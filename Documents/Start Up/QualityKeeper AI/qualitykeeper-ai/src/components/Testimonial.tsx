import Image from 'next/image';
import Link from 'next/link';

export default function Testimonial() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Headline */}
        <h2 className="text-4xl font-medium text-gray-900 mb-4">
          Alliances and testimonials.
        </h2>
        {/* Subheadline */}
        <p className="text-lg font-light text-gray-700 mb-4">
          Leverage this section to enhance your software's reputation.
        </p>
        {/* Link */}
        <Link
          href="/success-stories"
          className="text-blue-900 text-base hover:underline mb-8 inline-block"
        >
          See our success stories →
        </Link>
        {/* Partner Logos */}
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          <div className="flex flex-col items-center">
            <Image
              src="/amsterdam.png"
              alt="Amsterdam Logo"
              width={150}
              height={70}
              className="object-contain"
            />
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/firenze.png"
              alt="Firenze Logo"
              width={150}
              height={70}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/Nairobi.png"
              alt="Nairobi Logo"
              width={150}
              height={70}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/Madrid.png"
              alt="Madrid Logo"
              width={150}
              height={70}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/Kobe.png"
              alt="Kobe Logo"
              width={150}
              height={70}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/Berlin.png"
              alt="Berlin Logo"
              width={150}
              height={70}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}