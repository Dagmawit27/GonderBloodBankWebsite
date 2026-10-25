import { NextRequest, NextResponse } from 'next/server';
import { donationCenters, scheduledAppointments } from '@/app/api/data-store';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { donorName, phone, bloodGroup, centerId, date, timeSlot } = body;

  if (!donorName || !phone || !centerId || !date || !timeSlot) {
    return NextResponse.json(
      { error: 'Please provide all required appointment details.' },
      { status: 400 }
    );
  }

  const center = donationCenters.find(c => c.id === centerId) || donationCenters[0];

  const appointment = {
    id: `APT-${Math.floor(100 + Math.random() * 900)}`,
    donorName,
    phone,
    bloodGroup: bloodGroup || 'Unknown',
    centerId,
    centerName: center.name,
    address: center.address,
    date,
    timeSlot,
    createdAt: new Date().toISOString(),
  };

  scheduledAppointments.push(appointment);

  return NextResponse.json(
    {
      message: 'Donation appointment confirmed! An SMS confirmation will be sent to your phone.',
      appointment,
    },
    { status: 201 }
  );
}
