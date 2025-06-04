import Link from 'next/link';
import Image from 'next/image';
import { FiShoppingCart, FiSearch } from 'react-icons/fi'; // Icons for cart and search

export default function Navbar() {
    return (
        <header className="bg-white shadow-md">
            <nav className=" mx-auto flex  justify-between py-4 px-6">
                {/* Left Section: Logo + Navigation Links */}
                <div className="flex items-center space-x-6 mr-12"> {/* Added mr-12 */}
                    {/* Logo */}
                    <Link href="/">
                        <Image
                            src="/qalogo.jpg"
                            alt="QualityKeeper.ai Logo"
                            width={40}
                            height={40}
                            className="object-contain"
                        />
                    </Link>

                    {/* Navigation Links */}
                    <Link href="/" className="text-gray-700 hover:text-blue-600">
                        Home
                    </Link>
                    <Link href="/shop" className="text-gray-700 hover:text-blue-600">
                        Shop
                    </Link>
                    <Link href="/services" className="text-gray-700 hover:text-blue-600">
                        Services
                    </Link>
                    <Link href="/pricing" className="text-gray-700 hover:text-blue-600">
                        Pricing
                    </Link>
                    <div className="relative group">
                        <button className="text-gray-700 hover:text-blue-600 flex items-center">
                            Company
                            <span className="ml-1">▼</span>
                        </button>
                        {/* Dropdown (Placeholder) */}
                        <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 py-2 rounded-md">
                            <Link href="/company/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                About Us
                            </Link>
                            <Link href="/company/team" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                Our Team
                            </Link>
                        </div>
                    </div>
                    <Link href="/contact" className="text-gray-700 hover:text-blue-600">
                        Contact us
                    </Link>
                </div>

                {/* Right Section: Icons, Phone, and Buttons */}
                <div className="flex items-center space-x-4">
                    {/* Cart and Search Icons */}
                    <button className="text-gray-700 hover:text-blue-600">
                        <FiShoppingCart size={20} />
                    </button>
                    <button className="text-gray-700 hover:text-blue-600">
                        <FiSearch size={20} />
                    </button>

                    {/* Phone Number */}
                    <a href="tel:+15555555056" className="text-gray-700 hover:text-blue-600">
                        +1 555-555-5056
                    </a>

                    {/* Sign In Button */}
                    <Link
                        href="/signin"
                        className="bg-white border border-gray-300 text-gray-600 px-4 py-2  hover:text-gray-800"
                    >
                        Sign in
                    </Link>


                    {/* Contact US Button */}
                    <Link
                        href="/contact"
                        className="bg-blue-900 text-white px-4 py-2  hover:bg-blue-700"
                    >
                        Contact US
                    </Link>
                </div>
            </nav>
        </header>
    );
}