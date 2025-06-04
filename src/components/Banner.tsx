import Image from 'next/image';
import Link from 'next/link';

export default function Banner() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/banner.jpg" // Placeholder image
            alt="People working on laptops"
            layout="fill"
            objectFit="cover"
            className="filter  brightness-50"
          />
        </div>

        {/* Overlay for darkening */}
        <div className="absolute inset-0 bg-white opacity-10"></div>

        {/* Content */}
        <div className="relative text-center text-white px-4">
          {/* Headline */}
          {/* QualityKeeper.ai® Logo */}
          <h2 className="text-3xl text-orange-400 font-regular mb-4">
            QualityKeeper.ai
            <sup className="text-orange-400 text-xl ml-2">®</sup>
          </h2>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Unlock the power of A.I. <br />
            Quality solutions, all conveniently available in one place
          </h1>

          {/* Subheadline */}
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            With a single click, leverage A.I. to enhance the quality of your product to new professional standards.
          </p>

          {/* CTA Button */}
          <Link
            href="/tools"
            className="mt-6 inline-block bg-orange-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600"
          >
            Explore Our Tools
          </Link>
        </div>
      </section>
  );
}