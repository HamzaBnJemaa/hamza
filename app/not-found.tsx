import Link from 'next/link';
import { Racing_Sans_One } from 'next/font/google';
import { PageTransition } from "@/components/page-transition";
import Header from "@/components/header";
 
const racingSansOne = Racing_Sans_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-racing-sans',
});

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="min-h-screen text-white px-4 py-8 sm:p-8 relative z-10 flex flex-col items-center justify-center">
        <h1 className={`${racingSansOne.variable} racing-sans-one-regular text-5xl sm:text-6xl md:text-7xl tracking-tight font-light text-white mb-2`}>404</h1>
        <h2 className="text-2xl font-semibold mb-4 text-white">Page Not Found</h2>
        <p className="text-lg text-white/70 mb-8 text-center">Could not find the requested resource.</p>
        <Link href="/" className="px-4 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer flex items-center gap-2">
          Return Home
        </Link>
      </div>
    </>
  );
}
