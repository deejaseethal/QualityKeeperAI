import Link from 'next/link';

export default function Contact() {
  return (
    <section className="bg-orange-500 py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Text Content */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-3xl text-gray-900 mb-4">
            Do you want to get involved with our state-of-the-art technology?
          </h2>
          <p className="text-lg text-gray-700">
            Empowering your business with cutting-edge technology.
          </p>
        </div>
        {/* Button */}
        <Link
          href="/contact"
          className="bg-blue-900 text-white text-sm px-6 py-3 font-medium hover:bg-blue-700"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}