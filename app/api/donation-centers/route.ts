import { NextResponse } from 'next/server';
import { donationCenters } from '@/app/api/data-store';

export async function GET() {
  return NextResponse.json({ centers: donationCenters });
}
