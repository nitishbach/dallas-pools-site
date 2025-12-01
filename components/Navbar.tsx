import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <Image
              src="/Logo1.png"
              alt="Gulf Breeze Pool Service"
              width={120}
              height={72}
              className="h-10 w-auto"
              priority
            />
            <span className="text-2xl font-bold text-sky-700">
              Gulf Breeze Pool Service
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/"
                className="text-slate-700 hover:text-sky-700 transition font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-slate-700 hover:text-sky-700 transition font-medium"
              >
                About
              </Link>
              <Link
                href="/testimonials"
                className="text-slate-700 hover:text-sky-700 transition font-medium"
              >
                Testimonials
              </Link>
              <Link
                href="/contact"
                className="text-slate-700 hover:text-sky-700 transition font-medium"
              >
                Contact
              </Link>
            </div>
            <Link
              href="/#quote"
              className="inline-flex items-center justify-center px-6 py-2 rounded-md bg-sky-700 text-white font-semibold hover:bg-sky-800 transition text-sm"
            >
              Request a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

