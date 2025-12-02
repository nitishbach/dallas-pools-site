import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Gulf Breeze Pool Service",
  description:
    "Learn about Gulf Breeze Pool Service - a local, family-owned Dallas pool company focused on reliability, communication, and quality service.",
  openGraph: {
    title: "About Us | Gulf Breeze Pool Service",
    description:
      "Learn about Gulf Breeze Pool Service - a local, family-owned Dallas pool company focused on reliability, communication, and quality service.",
    url: "https://www.gulfbreezepoolsdfw.com/about",
    siteName: "Gulf Breeze Pool Service",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Gulf Breeze Pool Service",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Gulf Breeze Pool Service",
    description:
      "Learn about Gulf Breeze Pool Service - a local, family-owned Dallas pool company focused on reliability, communication, and quality service.",
    images: ["/logo.png"],
    creator: "@gulfbreeze.poolservice",
  },
  alternates: {
    canonical: "https://www.gulfbreezepoolsdfw.com/about",
  },
};

export default function About() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="px-6 py-16 md:py-24 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            About Gulf Breeze Pool Service
          </h1>
          <p className="text-xl text-slate-700">
            A local, family-owned Dallas pool company you can trust
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900">
                Our Story
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Gulf Breeze Pool Service was founded with a simple mission:
                  make pool maintenance effortless for Dallas homeowners. We saw
                  too many people struggling with pool care, spending weekends
                  on maintenance, or dealing with unreliable service providers.
                </p>
                <p>
                  As a family-owned business, we understand what matters most:
                  reliability, clear communication, and quality work. We treat
                  every pool like it's our own, and every customer like family.
                </p>
                <p>
                  Today, we're proud to serve hundreds of Dallas-area families,
                  helping them enjoy their pools without the hassle. We're not
                  just cleaning pools—we're giving you back your time and peace
                  of mind.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/Logo1.png"
                alt="Gulf Breeze Pool Service"
                width={400}
                height={400}
                className="w-full h-auto max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-16 md:py-24 bg-sky-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-900 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Reliability",
                desc: "We show up on time, every time. You can count on us to keep your pool in perfect condition.",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "Safety",
                desc: "We're fully licensed and insured. Your pool and property are protected, and we follow all safety protocols.",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                ),
              },
              {
                title: "Transparency",
                desc: "No hidden fees, no surprises. We're upfront about pricing and always explain what we're doing and why.",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                ),
              },
              {
                title: "Friendly Service",
                desc: "We're not just service providers—we're your neighbors. Friendly, professional, and always happy to help.",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-xl p-6 border border-slate-200 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center mx-auto mb-4 text-sky-700">
                  {value.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2 text-slate-900">
                  {value.title}
                </h3>
                <p className="text-slate-700 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">
            Ready to work with us?
          </h2>
          <p className="text-lg text-slate-700 mb-8">
            Get a free quote and see why Dallas homeowners trust Gulf Breeze
            Pool Service.
          </p>
          <a
            href="/#quote"
            className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-sky-700 text-white font-semibold hover:bg-sky-800 transition text-lg"
          >
            Request a Free Quote
          </a>
        </div>
      </section>
    </main>
  );
}

