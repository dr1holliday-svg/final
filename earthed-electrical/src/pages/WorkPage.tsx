import { WorkHero } from '@/components/work/WorkHero';
import { StatsStrip } from '@/components/work/StatsStrip';
import { WorkServicesSection } from '@/components/work/WorkServicesSection';
import { WorkCTA } from '@/components/work/WorkCTA';

export function WorkPage() {
  return (
    <>
      <WorkHero />
      <StatsStrip />
      <WorkServicesSection />
      <WorkCTA />
    </>
  );
}
