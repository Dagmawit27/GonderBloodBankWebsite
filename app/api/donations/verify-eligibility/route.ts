import { NextRequest, NextResponse } from 'next/server';
import { evaluateDonorEligibility } from '@/lib/blood-logic';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const evaluation = evaluateDonorEligibility(body);
  return NextResponse.json(evaluation);
}
