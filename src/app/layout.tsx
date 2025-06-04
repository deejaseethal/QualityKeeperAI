import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css';

// Import Poppins font
import { Poppins } from 'next/font/google';

// Initialize Poppins with desired weights and subsets
const poppins = Poppins({
  weight: ['400', '500', '600', '700'], // Regular, Medium, Semibold, Bold
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'QualityKeeper.ai - AI-Powered Quality Assurance',
  description: 'Automate quality assurance with cutting-edge AI technology.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}