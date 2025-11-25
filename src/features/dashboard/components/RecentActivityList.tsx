import type { RecentActivity } from '../types';

interface RecentActivityListProps {
  activities: RecentActivity[];
}

export const RecentActivityList = ({ activities }: RecentActivityListProps) => {
  return (
    <div className="rounded-xl border bg-card shadow-sm">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="font-semibold leading-none tracking-tight">Recent Activity</h3>
        <p className="text-sm text-muted-foreground">
          You have {activities.length} new notifications today.
        </p>
      </div>
      <div className="p-6 pt-0">
        <div className="space-y-8">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center">
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  <span className="font-bold">{activity.user}</span> {activity.action}
                </p>
                <p className="text-sm text-muted-foreground">
                  {new Date(activity.timestamp).toLocaleTimeString()} - {activity.status}
                </p>
              </div>
              <div className="ml-auto font-medium">
                {/* Optional: Add amount or other details here */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
