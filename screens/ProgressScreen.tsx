import React from 'react';
import { OverviewScreen } from './OverviewScreen';

export function ProgressScreen() {
  return (
    <OverviewScreen
      title="Your Progress"
      subtitle="Track how far you've come."
      metrics={[
        {
          title: 'CONSISTENCY',
          value: '86',
          detail: 'Up +12 this month',
          icon: 'stats-chart',
        },
        {
          title: 'XP EARNED',
          value: '1820',
          detail: '+320 vs last week',
          icon: 'trending-up',
        },
      ]}
      focusTitle="Weekly Activity"
      focusDetail="Progress charts, achievements, body status, and goal history can build from this route."
    />
  );
}
