import type { RevenueData } from '../types';

interface RevenueChartProps {
  data: RevenueData[];
}

export const RevenueChart = ({ data }: RevenueChartProps) => {
  const maxRevenue = Math.max(...data.map((d) => d.revenue));

  return (
    <div className="rounded-xl border bg-card shadow-sm col-span-2">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="font-semibold leading-none tracking-tight">Revenue Overview</h3>
        <p className="text-sm text-muted-foreground">Monthly revenue for the current year.</p>
      </div>
      <div className="p-6 pt-0">
        <div className="flex h-[350px] items-end gap-2">
          {data.map((item) => (
            <div key={item.month} className="group relative flex h-full w-full flex-col justify-end gap-2">
              <div
                className="w-full rounded-t-md bg-primary/80 transition-all hover:bg-primary"
                style={{ height: `${(item.revenue / maxRevenue) * 100}%` }}
              ></div>
              <span className="text-center text-xs text-muted-foreground">{item.month}</span>
              
              {/* Tooltip */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 hidden rounded bg-popover px-2 py-1 text-xs text-popover-foreground shadow-md group-hover:block">
                ${item.revenue.toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
