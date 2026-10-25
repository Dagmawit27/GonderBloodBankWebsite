export type BloodGroup = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';

export type StockStatus = 'sufficient' | 'warning' | 'critical';

export interface BloodStockItem {
  group: BloodGroup;
  units: number;
  capacity: number;
  criticalThreshold: number;
  lowThreshold: number;
  lastUpdated: string;
}

export interface DonorEligibilityAnswers {
  age: number;
  weightKg: number;
  daysSinceLastDonation: number | null; // null if first time
  isFeelingHealthy: boolean;
  hasRecentInfectionOrAntibiotics: boolean;
  isPregnantOrLactating?: boolean;
}

export interface BloodRequisition {
  id: string;
  patientName: string;
  patientId: string;
  hospital: string;
  ward: string;
  bloodGroup: BloodGroup;
  unitsRequired: number;
  unitsFulfilled: number;
  urgency: 'critical_emergency' | 'urgent_surgery' | 'routine_scheduled';
  indication: string;
  requestingPhysician: string;
  contactPhone: string;
  createdAt: string;
  status: 'pending' | 'in_crossmatch' | 'dispatched' | 'completed';
}

// Red blood cell donor compatibility matrix
const COMPATIBILITY_MAP: Record<BloodGroup, BloodGroup[]> = {
  // Key = recipient blood type, Value = list of valid donor types they can receive from
  'O-': ['O-'],
  'O+': ['O-', 'O+'],
  'A-': ['O-', 'A-'],
  'A+': ['O-', 'O+', 'A-', 'A+'],
  'B-': ['O-', 'B-'],
  'B+': ['O-', 'O+', 'B-', 'B+'],
  'AB-': ['O-', 'A-', 'B-', 'AB-'],
  'AB+': ['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'],
};

/**
 * Checks if donor blood group is compatible with recipient blood group
 */
export function canDonate(donor: BloodGroup, recipient: BloodGroup): boolean {
  const allowedDonors = COMPATIBILITY_MAP[recipient];
  return allowedDonors ? allowedDonors.includes(donor) : false;
}

/**
 * Get all blood types that a specific recipient can receive from
 */
export function getCompatibleDonors(recipient: BloodGroup): BloodGroup[] {
  return COMPATIBILITY_MAP[recipient] || [];
}

/**
 * Get all blood types that a specific donor can safely give to
 */
export function getCompatibleRecipients(donor: BloodGroup): BloodGroup[] {
  const recipients: BloodGroup[] = [];
  for (const [recipient, donors] of Object.entries(COMPATIBILITY_MAP)) {
    if (donors.includes(donor)) {
      recipients.push(recipient as BloodGroup);
    }
  }
  return recipients;
}

/**
 * Evaluates blood inventory status against hospital emergency thresholds
 */
export function calculateStockStatus(
  currentUnits: number,
  criticalThreshold: number = 10,
  lowThreshold: number = 25
): StockStatus {
  if (currentUnits <= criticalThreshold) {
    return 'critical';
  }
  if (currentUnits <= lowThreshold) {
    return 'warning';
  }
  return 'sufficient';
}

/**
 * Calculates percentage of stock capacity capped between 0 and 100
 */
export function calculateStockPercentage(currentUnits: number, capacity: number = 100): number {
  if (capacity <= 0) return 0;
  const pct = Math.round((currentUnits / capacity) * 100);
  return Math.max(0, Math.min(100, pct));
}

/**
 * Standard Ethiopian Red Cross / WHO Blood Donation Clinical Criteria
 */
export function evaluateDonorEligibility(answers: DonorEligibilityAnswers): {
  isEligible: boolean;
  reasons: string[];
} {
  const reasons: string[] = [];

  if (answers.age < 18) {
    reasons.push('Must be at least 18 years of age (legal consent age).');
  } else if (answers.age > 65) {
    reasons.push('Regular donors over 65 require special clinical clearance.');
  }

  if (answers.weightKg < 50) {
    reasons.push('Weight must be at least 50 kg for standard 450ml donation safety.');
  }

  if (answers.daysSinceLastDonation !== null && answers.daysSinceLastDonation < 56) {
    const daysLeft = 56 - answers.daysSinceLastDonation;
    reasons.push(`Minimum 56 days required between whole blood donations (${daysLeft} days remaining).`);
  }

  if (!answers.isFeelingHealthy) {
    reasons.push('Must feel healthy and symptom-free on the day of donation.');
  }

  if (answers.hasRecentInfectionOrAntibiotics) {
    reasons.push('Must be fully recovered from recent bacterial infection and off antibiotics.');
  }

  if (answers.isPregnantOrLactating) {
    reasons.push('Deferral applies during pregnancy and first 6 months of breastfeeding.');
  }

  return {
    isEligible: reasons.length === 0,
    reasons,
  };
}

/**
 * Triage urgency weight calculation for prioritization queue
 */
export function calculateRequisitionPriority(req: BloodRequisition): number {
  let score = 0;
  if (req.urgency === 'critical_emergency') score += 100;
  else if (req.urgency === 'urgent_surgery') score += 50;
  else score += 10;

  // More units requested increases urgency weight
  score += Math.min(req.unitsRequired * 5, 30);

  return score;
}
