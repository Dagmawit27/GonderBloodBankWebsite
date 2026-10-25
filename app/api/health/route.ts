import { NextResponse } from 'next/server';
import { bloodInventory, bloodRequisitions } from '@/app/api/data-store';
import { calculateStockStatus } from '@/lib/blood-logic';

export async function GET() {
  return NextResponse.json({
    status: 'online',
    app: 'Gondar Vital Life Blood Bank Service',
    region: 'Gondar, Amhara Regional State, Ethiopia',
    activeRequisitions: bloodRequisitions.filter(r => r.status !== 'completed').length,
    criticalShortages: bloodInventory.filter(
      i => calculateStockStatus(i.units, i.criticalThreshold, i.lowThreshold) === 'critical'
    ).length,
    timestamp: new Date().toISOString(),
  });
}
