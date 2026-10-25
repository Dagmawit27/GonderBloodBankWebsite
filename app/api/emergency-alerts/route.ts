import { NextResponse } from 'next/server';
import { bloodInventory } from '@/app/api/data-store';
import { calculateStockStatus } from '@/lib/blood-logic';

export async function GET() {
  const criticalItems = bloodInventory.filter(
    i => calculateStockStatus(i.units, i.criticalThreshold, i.lowThreshold) === 'critical'
  );

  return NextResponse.json({
    alerts: [
      {
        id: 'ALERT-01',
        title:
          'CRITICAL ALERT: O-Negative and B-Positive blood supplies at emergency reserve thresholds in Gondar',
        amharicTitle:
          'አስቸኳይ ማስጠንቀቂያ፡ የኦ-ኔጌቲቭ እና ቢ-ፖዘቲቭ የደም ክምችት በከፍተኛ ሁኔታ ቀንሷል',
        severity: 'critical',
        affectedGroups: criticalItems.map(i => i.group),
        targetHospitals: [
          'University of Gondar Comprehensive Specialized Hospital',
          'Gondar Poly Clinic',
        ],
        actionText: 'Urgent Donor Walk-In Requested',
      },
    ],
  });
}
