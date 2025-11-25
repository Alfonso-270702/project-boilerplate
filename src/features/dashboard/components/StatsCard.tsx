import type { DashboardStats } from '../types';

interface StatsCardProps {
  stats: DashboardStats;
}

export const StatsCard = ({ stats }: StatsCardProps) => {
  const isPositive = stats.trend >= 0;

  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <div className="flex flex-row items-center justify-between space-y-0 pb-2">
        <h3 className="text-sm font-medium tracking-tight text-muted-foreground">
          {stats.label}
        </h3>
      </div>
      <div className="content">
        <div className="text-2xl font-bold">{stats.value}</div>
        <p className="text-xs text-muted-foreground">
          <span className={isPositive ? 'text-green-500' : 'text-red-500'}>
            {isPositive ? '+' : ''}
            {stats.trend}%
          </span>{' '}
          {stats.trendLabel}
        </p>
      </div>
    </div>
  );
};
