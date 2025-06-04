import Image from 'next/image';
import Link from 'next/link';
import Banner from '../components/Banner';
import Automation from '@/components/Automation';
import Report from '@/components/Report';
import Solution from '@/components/Solution';
import Testimonial from '@/components/Testimonial';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      {/* Banner Section */}
      <Banner />
      {/* Automation Testing Section */}
      <Automation/>
      <Report/>
      <Solution/>
      <Testimonial/>
      <Contact/>
         </main>
  );
}