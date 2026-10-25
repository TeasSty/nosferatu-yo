import { Adventures } from '../components/Adventures';
import { Booking } from '../components/Booking';
import { Gallery } from '../components/Gallery';
import { Hero } from '../components/Hero';
import { HorrorQuests } from '../components/HorrorQuests';
import { Lounge } from '../components/Lounge';
import { OtherFormats } from '../components/OtherFormats';
import { Reviews } from '../components/Reviews';
import { Why } from '../components/Why';

export function HomePage() {
  return (
    <main>
      <Hero />
      <Adventures />
      <HorrorQuests />
      <OtherFormats />
      <Lounge />
      <Gallery />
      <Why />
      <Reviews />
      <Booking />
    </main>
  );
}
