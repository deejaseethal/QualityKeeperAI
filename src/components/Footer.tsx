import Link from 'next/link';
import { FaComments, FaEnvelope, FaPhone, FaFacebookF, FaTwitter, FaLinkedinIn, FaHome } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-start items-start">
        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Useful Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About us
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:underline">
                Products
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="/legal" className="hover:underline">
                Legal
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:underline">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link href="/forum" className="hover:underline">
                Forum
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact us
              </Link>
            </li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-lg font-bold mb-4">About us</h3>
          <p className="mb-4">
            We are a team of passionate people whose goal is to improve everyone’s life through disruptive products. We build great products to solve your business problems.
          </p>
          <p>
            Our products are designed for small to medium size companies willing to optimize their performance.
          </p>
        </div>

        {/* Connect with Us */}
        <div>
          <h3 className="text-lg font-bold mb-4">Connect with us</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <FaComments className="mr-2" />
              <Link href="/contact" className="hover:underline">
                Contact us
              </Link>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-2" />
              <a href="mailto:info@qualitykeeper.ai" className="hover:underline">
                info@qualitykeeper.ai
              </a>
            </li>
            <li className="flex items-center">
              <FaPhone className="mr-2" />
              <a href="tel:+15555555556" className="hover:underline">
                +1 555-555-5556
              </a>
            </li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <div className="bg-gray-700 rounded-full p-2">
                <FaFacebookF size={20} />
              </div>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <div className="bg-gray-700 rounded-full p-2">
                <FaTwitter size={20} />
              </div>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <div className="bg-gray-700 rounded-full p-2">
                <FaLinkedinIn size={20} />
              </div>
            </a>
            <a href="/" className="hover:text-gray-300">
              <div className="bg-gray-700 rounded-full p-2">
                <FaHome size={20} />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="max-w-6xl mx-auto px-6 mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0">
          COPYRIGHT © QualityKeeper.ai
        </p>
        <div className="flex items-center">
          <span className="mr-2">Powered by</span>
          <a href="https://www.odoo.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
            odoo
          </a>
          <span className="ml-2">– THE #1 Open Source eCommerce</span>
        </div>
      </div>
    </footer>
  );
}