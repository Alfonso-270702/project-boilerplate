import { StatsCard } from '../features/dashboard/components/StatsCard';
import { RecentActivityList } from '../features/dashboard/components/RecentActivityList';
import { RevenueChart } from '../features/dashboard/components/RevenueChart';
import type { DashboardStats, RecentActivity, RevenueData } from '../features/dashboard/types';

// Mock Data
const statsData: DashboardStats[] = [
  { label: 'Total Revenue', value: '$45,231.89', trend: 20.1, trendLabel: 'from last month' },
  { label: 'Subscriptions', value: '+2350', trend: 180.1, trendLabel: 'from last month' },
  { label: 'Sales', value: '+12,234', trend: 19, trendLabel: 'from last month' },
  { label: 'Active Now', value: '+573', trend: 201, trendLabel: 'since last hour' },
];

const revenueData: RevenueData[] = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 4500 },
  { month: 'Mar', revenue: 3000 },
  { month: 'Apr', revenue: 5500 },
  { month: 'May', revenue: 4000 },
  { month: 'Jun', revenue: 7000 },
  { month: 'Jul', revenue: 6500 },
  { month: 'Aug', revenue: 8000 },
  { month: 'Sep', revenue: 7500 },
  { month: 'Oct', revenue: 9000 },
  { month: 'Nov', revenue: 8500 },
  { month: 'Dec', revenue: 10000 },
];

const recentActivityData: RecentActivity[] = [
  { id: '1', user: 'Olivia Martin', action: 'signed up', timestamp: new Date().toISOString(), status: 'success' },
  { id: '2', user: 'Jackson Lee', action: 'paid invoice', timestamp: new Date().toISOString(), status: 'success' },
  { id: '3', user: 'Isabella Nguyen', action: 'failed payment', timestamp: new Date().toISOString(), status: 'failed' },
  { id: '4', user: 'William Kim', action: 'created ticket', timestamp: new Date().toISOString(), status: 'pending' },
  { id: '5', user: 'Sofia Davis', action: 'deleted account', timestamp: new Date().toISOString(), status: 'success' },
];

export const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {statsData.map((stat, index) => (
          <StatsCard key={index} stats={stat} />
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4">
           <RevenueChart data={revenueData} />
        </div>
        <div className="col-span-3">
          <RecentActivityList activities={recentActivityData} />
        </div>
      </div>
    </div>
  );
};
