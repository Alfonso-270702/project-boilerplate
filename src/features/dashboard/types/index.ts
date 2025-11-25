export interface DashboardStats {
  label: string;
  value: string | number;
  trend: number; // percentage change, positive or negative
  trendLabel: string; // e.g., "vs last month"
}

export interface RecentActivity {
  id: string;
  user: string;
  action: string;
  timestamp: string;
  status: 'success' | 'pending' | 'failed';
}

export interface RevenueData {
  month: string;
  revenue: number;
}
