import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Contact Us | Gulf Breeze Pool Service",
  description:
    "Get in touch with Gulf Breeze Pool Service. Call 972-951-1149. We typically reply within 24 hours.",
  openGraph: {
    title: "Contact Us | Gulf Breeze Pool Service",
    description:
      "Get in touch with Gulf Breeze Pool Service. Call 972-951-1149. We typically reply within 24 hours.",
    url: "https://www.gulfbreezepoolsdfw.com/contact",
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
    title: "Contact Us | Gulf Breeze Pool Service",
    description:
      "Get in touch with Gulf Breeze Pool Service. Call 972-951-1149. We typically reply within 24 hours.",
    images: ["/logo.png"],
    creator: "@gulfbreeze.poolservice",
  },
  alternates: {
    canonical: "https://www.gulfbreezepoolsdfw.com/contact",
  },
};

export default function Contact() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="px-6 py-16 md:py-24 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            Contact Us
          </h1>
          <p className="text-xl text-slate-700">
            Get in touch and we'll respond within 24 hours
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="px-6 py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-sky-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-slate-900">
                Phone
              </h3>
              <a
                href="tel:+19729511149"
                className="text-sky-700 hover:text-sky-800 transition font-medium"
              >
                972-951-1149
              </a>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-sky-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-slate-900">
                Email
              </h3>
              <a
                href="mailto:info@gulfbreezepoolservice.com"
                className="text-sky-700 hover:text-sky-800 transition font-medium"
              >
                info@gulfbreezepoolservice.com
              </a>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-sky-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-slate-900">
                Service Area
              </h3>
              <p className="text-slate-700 font-medium">Dallas, TX</p>
              <p className="text-sm text-slate-600 mt-1">
                and surrounding areas
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-sky-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-slate-900">
                Business Hours
              </h3>
              <p className="text-slate-700 font-medium">Mon to Fri : 9 AM to 5 PM</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-sky-700"
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
              </div>
              <h3 className="font-semibold text-lg mb-2 text-slate-900">
                Certification
              </h3>
              <p className="text-slate-700 font-medium">CPO Certified</p>
            </div>
          </div>

          <div className="bg-sky-50 rounded-lg p-6 mb-12 text-center">
            <p className="text-slate-700">
              <span className="font-semibold">Response time:</span> We typically
              reply within 24 hours to all inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-6 py-16 md:py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-slate-900 text-center">
            Send Us a Message
          </h2>
          <p className="text-lg text-slate-700 mb-8 text-center">
            Fill out the form below and we'll get back to you as soon as
            possible.
          </p>
          <QuoteForm />
        </div>
      </section>
    </main>
  );
}

