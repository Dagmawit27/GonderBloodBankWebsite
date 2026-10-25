import React from 'react';
import { BloodStockItem, StockStatus, calculateStockStatus, calculateStockPercentage } from '@/lib/blood-logic';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ArrowRight, Droplet, ShieldAlert, CheckCircle, Clock } from 'lucide-react';

interface BloodInventoryCardProps {
  item: BloodStockItem;
  onSelectGroup: (group: string) => void;
  onQuickDonate: (group: string) => void;
}

export const BloodInventoryCard: React.FC<BloodInventoryCardProps> = ({
  item,
  onSelectGroup,
  onQuickDonate,
}) => {
  const status: StockStatus = calculateStockStatus(
    item.units,
    item.criticalThreshold,
    item.lowThreshold
  );
  const percentage = calculateStockPercentage(item.units, item.capacity);

  const getStatusBadge = () => {
    switch (status) {
      case 'critical':
        return (
          <Badge variant="critical" className="gap-1">
            <ShieldAlert className="h-3 w-3" />
            Critically Low
          </Badge>
        );
      case 'warning':
        return (
          <Badge variant="warning" className="gap-1">
            <Clock className="h-3 w-3" />
            Low Stock
          </Badge>
        );
      case 'sufficient':
        return (
          <Badge variant="sufficient" className="gap-1">
            <CheckCircle className="h-3 w-3" />
            Sufficient
          </Badge>
        );
    }
  };

  const getProgressColor = () => {
    switch (status) {
      case 'critical':
        return 'bg-[#dc2626]';
      case 'warning':
        return 'bg-[#d97706]';
      case 'sufficient':
        return 'bg-[#15803d]';
    }
  };

  return (
    <Card
      className={`relative overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0px_8px_20px_rgba(17,24,39,0.08)] border ${
        status === 'critical'
          ? 'border-red-300 ring-1 ring-red-200 bg-linear-to-b from-red-50/40 to-white'
          : 'border-[#e5e7eb] bg-white'
      }`}
    >
      <CardContent className="p-5">
        <div className="flex items-start justify-between">
          {/* Blood Group Glyph with Circular Badge geometry per style guide */}
          <div className="flex items-center gap-3">
            <div
              className={`w-13 h-13 rounded-full flex items-center justify-center font-heading text-xl font-extrabold text-white shadow-sm shrink-0 ${
                status === 'critical'
                  ? 'bg-[#b91c1c]'
                  : status === 'warning'
                  ? 'bg-[#111827]'
                  : 'bg-[#1f2937]'
              }`}
            >
              {item.group}
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#8f6f6c] uppercase tracking-wider block">
                Whole Blood
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-extrabold text-[#111827] font-heading">
                  {item.units}
                </span>
                <span className="text-xs text-[#575e70] font-medium">
                  / {item.capacity} units
                </span>
              </div>
            </div>
          </div>

          <div>{getStatusBadge()}</div>
        </div>

        {/* Level Indicator Bar */}
        <div className="mt-4 space-y-1.5">
          <div className="flex justify-between text-xs text-[#575e70]">
            <span className="font-medium">Reserve Level</span>
            <span className="font-bold text-[#111827]">{percentage}%</span>
          </div>
          <Progress
            value={percentage}
            indicatorClassName={getProgressColor()}
            className="h-2 bg-slate-100"
          />
        </div>

        {/* Status micro-copy & threshold info */}
        <div className="mt-3.5 pt-3 border-t border-[#f3f4f6] flex items-center justify-between text-xs">
          <span className="text-[#575e70]">
            Threshold: <strong className="text-[#111827]">{item.criticalThreshold} units</strong>
          </span>
          <span className="text-[11px] text-[#8f6f6c]">{item.lastUpdated}</span>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 grid grid-cols-2 gap-2">
          <button
            onClick={() => onSelectGroup(item.group)}
            className="w-full py-1.5 px-2 rounded-md border border-[#e5e7eb] hover:bg-[#eff4ff] text-xs font-semibold text-[#111827] flex items-center justify-center gap-1 transition cursor-pointer"
          >
            <span>Compatibility</span>
            <ArrowRight className="h-3 w-3 text-[#575e70]" />
          </button>

          <button
            onClick={() => onQuickDonate(item.group)}
            className={`w-full py-1.5 px-2 rounded-md text-xs font-bold transition flex items-center justify-center gap-1 cursor-pointer ${
              status === 'critical'
                ? 'bg-[#b91c1c] hover:bg-[#991b1b] text-white shadow-xs'
                : 'bg-[#111827] hover:bg-[#1f2937] text-white'
            }`}
          >
            <Droplet className="h-3 w-3 fill-current" />
            <span>Donate {item.group}</span>
          </button>
        </div>
      </CardContent>
    </Card>
  );
};
