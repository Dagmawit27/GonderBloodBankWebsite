import { NextResponse } from 'next/server';
import { bloodInventory } from '@/app/api/data-store';
import {
  calculateStockStatus,
  calculateStockPercentage,
  getCompatibleDonors,
  getCompatibleRecipients,
} from '@/lib/blood-logic';

export async function GET() {
  const inventoryWithMetrics = bloodInventory.map(item => {
    const status = calculateStockStatus(item.units, item.criticalThreshold, item.lowThreshold);
    const percentage = calculateStockPercentage(item.units, item.capacity);
    const compatibleDonors = getCompatibleDonors(item.group);
    const compatibleRecipients = getCompatibleRecipients(item.group);
    return { ...item, status, percentage, compatibleDonors, compatibleRecipients };
  });

  const totalUnits = bloodInventory.reduce((acc, curr) => acc + curr.units, 0);
  const criticalCount = inventoryWithMetrics.filter(i => i.status === 'critical').length;
  const warningCount = inventoryWithMetrics.filter(i => i.status === 'warning').length;

  return NextResponse.json({
    inventory: inventoryWithMetrics,
    totalUnits,
    criticalCount,
    warningCount,
    lastRefreshed: new Date().toISOString(),
  });
}
