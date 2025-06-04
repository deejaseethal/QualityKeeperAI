import Image from 'next/image';
import Link from 'next/link';

export default function Automation() {return(
    <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Are you upgrading your Automation Testing methods?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Unlock the potential of your software projects by scheduling a complimentary consultation to explore your Automation Testing requirements. At QUALITYkeeper.ai, we leverage an advanced AI-driven testing framework that transforms your PRDs into comprehensive Test Cases and Automation scripts, delivering insightful reports daily or on-demand. Our expert team is dedicated to understanding your unique needs, offering tailored solutions, and guiding you through our streamlined development process. Partner with us and elevate your software quality to new heights!
            </p>
            <Link
              href="/learn-more"
              className="inline-block bg-orange-500 text-white text-lg px-6 py-3 rounded-lg font-semibold hover:bg-orange-600"
            >
              Learn more
            </Link>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex flex-row items-center justify-center gap-4">
            <Image
              src="/man-laptop.jpg"
              alt="Person working on laptop"
              width={200}
              height={150}
              className="rounded-lg object-cover"
            />
            <Image
              src="/man-laptop.jpg"
              alt="Person working on laptop"
              width={200}
              height={150}
              className="rounded-lg object-cover translate-y-8"
            />
          </div>
        </div>
      </section>
 
)}