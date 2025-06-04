import Image from 'next/image';
import Link from 'next/link';

export default function Report() {
    return (
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
            {/* Image */}
            <div className="md:w-1/2 order-2 md:order-1">
              <Image
                src="/Report.jpg"
                alt="Tablet with charts and papers"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full"
              />
            </div>
    
            {/* Text Content */}
            <div className="md:w-1/2 order-1 md:order-2 md:pl-4">
              <h2 className="text-4xl font-normal text-gray-900 mb-4">
                Overwhelmed by ineffective reporting?
              </h2>
              <p className="text-base text-gray-700 mb-4">
                Our innovative framework empowers PRODUCT and Business owners to effortlessly streamline their processes. By simply providing the necessary documents, our advanced AI technology will work wonders, generating comprehensive test cases and automation codes in no time.
              </p>
              <p className="text-base text-gray-700 mb-6">
                Discover our tailored Reporting solutions that are specifically crafted to elevate your business operations. Product owners can now effortlessly monitor growth and identify issues in real-time, simply by logging into the console each day. Experience the transformation in your business today!
              </p>
              <Link
                href="/software-offerings"
                className="inline-block bg-orange-500 text-white text-lg px-6 py-3 rounded-lg font-semibold hover:bg-orange-600"
              >
                Discover our software offerings
              </Link>
            </div>
          </div>
        </section>
      );
    }