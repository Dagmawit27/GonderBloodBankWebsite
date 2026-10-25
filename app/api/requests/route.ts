import { NextRequest, NextResponse } from 'next/server';
import { bloodRequisitions } from '@/app/api/data-store';
import { BloodRequisition } from '@/lib/blood-logic';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const urgency = searchParams.get('urgency');
  const bloodGroup = searchParams.get('bloodGroup');
  const status = searchParams.get('status');
  const query = searchParams.get('query');

  let filtered = [...bloodRequisitions];

  if (urgency) filtered = filtered.filter(r => r.urgency === urgency);
  if (bloodGroup) filtered = filtered.filter(r => r.bloodGroup === bloodGroup);
  if (status) filtered = filtered.filter(r => r.status === status);
  if (query) {
    const q = query.toLowerCase();
    filtered = filtered.filter(
      r =>
        r.patientName.toLowerCase().includes(q) ||
        r.patientId.toLowerCase().includes(q) ||
        r.hospital.toLowerCase().includes(q) ||
        r.id.toLowerCase().includes(q)
    );
  }

  return NextResponse.json({ total: filtered.length, requests: filtered });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const {
    patientName, patientId, hospital, ward, bloodGroup,
    unitsRequired, urgency, indication, requestingPhysician, contactPhone,
  } = body;

  if (!patientName || !hospital || !bloodGroup || !unitsRequired || !contactPhone) {
    return NextResponse.json({ error: 'Missing required requisition fields.' }, { status: 400 });
  }

  const newRequisition: BloodRequisition = {
    id: `REQ-2026-${String(bloodRequisitions.length + 81).padStart(3, '0')}`,
    patientName,
    patientId: patientId || `PT-GND-${Math.floor(1000 + Math.random() * 9000)}`,
    hospital,
    ward: ward || 'Emergency Admissions',
    bloodGroup,
    unitsRequired: Number(unitsRequired),
    unitsFulfilled: 0,
    urgency: urgency || 'urgent_surgery',
    indication: indication || 'Urgent clinical blood request',
    requestingPhysician: requestingPhysician || 'Attending Duty Physician',
    contactPhone,
    createdAt: new Date().toISOString(),
    status: 'pending',
  };

  bloodRequisitions.unshift(newRequisition);

  return NextResponse.json(
    {
      message: 'Blood requisition dispatched successfully to Gondar Vital Life triage desk.',
      requisition: newRequisition,
    },
    { status: 201 }
  );
}
