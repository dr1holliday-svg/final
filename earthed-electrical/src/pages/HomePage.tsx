import { HomeHero } from '@/components/home/HomeHero';
import { Ticker } from '@/components/home/Ticker';
import { ServicesPreview } from '@/components/home/ServicesPreview';
import { TrustStrip } from '@/components/home/TrustStrip';
import { Manifesto } from '@/components/home/Manifesto';
import { ServiceArea } from '@/components/home/ServiceArea';
import { FAQ } from '@/components/home/FAQ';
import { CallToBook } from '@/components/home/CallToBook';

export function HomePage() {
  return (
    <>
      <HomeHero />
      <Ticker />
      <TrustStrip />
      <ServicesPreview />
      <Manifesto />
      <ServiceArea />
      <FAQ />
      <CallToBook />
    </>
  );
}
