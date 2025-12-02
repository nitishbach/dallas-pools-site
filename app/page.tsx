import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import TestimonialCard from "@/components/TestimonialCard";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export const metadata: Metadata = {
  title: "Gulf Breeze Pool Service | Crystal-Clear Pools in Dallas, TX",
  description:
    "Dallas homeowners trust Gulf Breeze Pool Service for fast, reliable pool cleaning and maintenance. Weekly service, deep cleans, and equipment repair.",
  openGraph: {
    title: "Gulf Breeze Pool Service | Crystal-Clear Pools in Dallas, TX",
    description:
      "Dallas homeowners trust Gulf Breeze Pool Service for fast, reliable pool cleaning and maintenance. Weekly service, deep cleans, and equipment repair.",
    url: "https://www.gulfbreezepoolsdfw.com",
    siteName: "Gulf Breeze Pool Service",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Gulf Breeze Pool Service",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gulf Breeze Pool Service | Crystal-Clear Pools in Dallas, TX",
    description:
      "Dallas homeowners trust Gulf Breeze Pool Service for fast, reliable pool cleaning and maintenance.",
    images: ["/logo.png"],
    creator: "@gulfbreeze.poolservice",
  },
  alternates: {
    canonical: "https://www.gulfbreezepoolsdfw.com",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 1. Hero Section */}
      <section className="px-6 py-16 md:py-24 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center gap-12">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
                Crystal-clear pools,{" "}
                <span className="text-sky-700">all season long.</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-slate-700 leading-relaxed">
                Dallas homeowners trust Gulf Breeze Pool Service for fast,
                reliable cleaning and maintenance.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#quote"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-sky-700 text-white font-semibold hover:bg-sky-800 transition text-lg"
                >
                  Request a Free Quote
                </a>
                <a
                  href="tel:+19729511149"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-md border-2 border-sky-700 text-sky-700 font-semibold hover:bg-sky-50 transition text-lg"
                >
                  Call Now: 972-951-1149
                </a>
              </div>
              <div className="mt-6 text-sm text-slate-600">
                <span className="font-semibold">Licensed & insured</span> ·
                Same-week availability · Satisfaction guaranteed
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
              <BeforeAfterSlider
                beforeImage="/before1.JPG"
                afterImage="/after1.jpg"
                beforeAlt="Pool before cleaning"
                afterAlt="Pool after cleaning - crystal clear"
              />
              <p className="mt-4 text-center text-slate-600 font-medium">
                Green to Blue in 3 Visits
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Services Section */}
      <section id="services" className="px-6 py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            The Offer
          </h2>
          <p className="text-lg text-slate-700 mb-12">
            Everything you need to keep your pool clean, safe, and ready to
            enjoy.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Weekly Pool Cleaning",
                desc: "Skimming, brushing, vacuuming, chemicals, and equipment check. We handle it all so you don't have to.",
              },
              {
                title: "One-Time Deep Clean",
                desc: "Perfect before parties, after storms, or when the pool has been ignored. Get it back to perfect condition.",
              },
              {
                title: "Green-to-Clean",
                desc: "Turn a green or cloudy pool back to crystal-clear blue. We specialize in pool recovery and algae removal.",
              },
              {
                title: "Equipment Check & Repair",
                desc: "Pumps, filters, timers, and heaters inspected and tuned. Keep your equipment running smoothly.",
              },
              {
                title: "Seasonal Startup / Opening",
                desc: "Get your pool ready for summer or after long downtime. We'll have it swim-ready in no time.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="border border-slate-200 rounded-xl p-6 bg-slate-50 hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg mb-2 text-slate-900">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-700 mb-4">{service.desc}</p>
                <a
                  href="#quote"
                  className="text-sm text-sky-700 font-semibold hover:text-sky-800 transition"
                >
                  Request a quote →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us - Value Equation */}
      <section className="px-6 py-16 md:py-24 bg-sky-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-900 text-center">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-slate-900">
                Dream Outcome
              </h3>
              <p className="text-slate-700">
                Walk outside and your pool just looks perfect every week.
              </p>
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-slate-900">
                Time Delay
              </h3>
              <p className="text-slate-700">
                We respond within 24 hours and start service fast.
              </p>
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-slate-900">
                Effort
              </h3>
              <p className="text-slate-700">
                No chemicals to buy or store. We handle everything.
              </p>
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
                Risk Reversal
              </h3>
              <p className="text-slate-700">
                If your pool doesn't look better after two visits, you don't pay
                for the second visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Before/After Section */}
      <section className="px-6 py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 text-center">
            Before & After
          </h2>
          <p className="text-lg text-slate-700 mb-12 text-center">
            See the transformation we deliver
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                caption: "Green to blue in 3 visits",
                before: "/before1.JPG",
                after: "/after1.jpg"
              },
              { 
                caption: "Cloudy to crystal clear",
                before: "/before2.jpg",
                after: "/after2.jpg"
              },
              { 
                caption: "Neglected pool restored",
                before: "/before3.jpg",
                after: "/after3.JPG"
              },
            ].map((item, idx) => {
              return (
                <div key={idx} className="space-y-2">
                  <div className="aspect-video md:aspect-[4/3] lg:aspect-[16/9] rounded-lg border border-slate-300 overflow-hidden relative">
                    <Image
                      src={item.before}
                      alt="Before"
                      fill
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="aspect-video md:aspect-[4/3] lg:aspect-[16/9] rounded-lg border border-sky-300 overflow-hidden relative">
                    <Image
                      src={item.after}
                      alt="After"
                      fill
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-sm text-slate-600 text-center mt-2">
                    {item.caption}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Testimonials Preview */}
      <section className="px-6 py-16 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-900 text-center">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard
              name="Sarah M."
              area="East Dallas"
              quote="My pool has never looked this good. Super reliable and always on time. I don't have to think about pool maintenance anymore."
            />
            <TestimonialCard
              name="Michael R."
              area="Plano"
              quote="Fast response, fair pricing, and they explained everything clearly. Highly recommend for busy families."
            />
            <TestimonialCard
              name="Priya K."
              area="Richardson"
              quote="They took a green mess and made it crystal clear in a couple of visits. Professional and trustworthy."
            />
          </div>
          <div className="text-center mt-8">
            <Link
              href="/testimonials"
              className="text-sky-700 font-semibold hover:text-sky-800 transition"
            >
              View all testimonials →
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Service Areas */}
      <section className="px-6 py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Service Areas
          </h2>
          <p className="text-lg text-slate-700 mb-8">
            Proudly serving Dallas, Plano, Richardson, Garland, Mesquite,
            Addison, Carrollton, Frisco, Flower Mound, Argyle, Highland Village, Southlake, and nearby areas.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Dallas",
              "Plano",
              "Richardson",
              "Garland",
              "Mesquite",
              "Addison",
              "Carrollton",
              "Frisco",
              "Flower Mound",
              "Argyle",
              "Highland Village",
              "Southlake",
            ].map((city) => (
              <span
                key={city}
                className="px-4 py-2 rounded-full bg-sky-100 text-sky-700 font-medium text-sm"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 7. How It Works */}
      <section className="px-6 py-16 md:py-24 bg-sky-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-900 text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "1",
                title: "Request a Quote",
                desc: "Online or by phone. Tell us about your pool and we'll respond within 24 hours.",
              },
              {
                number: "2",
                title: "We Inspect & Confirm",
                desc: "We inspect your pool and confirm pricing. No surprises, just honest transparent pricing.",
              },
              {
                number: "3",
                title: "Enjoy Your Pool",
                desc: "You enjoy a crystal-clear pool every week. We handle all the maintenance.",
              },
            ].map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-20 h-20 rounded-full bg-sky-700 text-white flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                  {step.number}
                </div>
                <h3 className="font-semibold text-xl mb-3 text-slate-900">
                  {step.title}
                </h3>
                <p className="text-slate-700">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ Section */}
      <section className="px-6 py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-900 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Do I need to be home during service?",
                a: "No, you don't need to be home. We have access codes or keys for most pools, and we'll let you know when we've completed service.",
              },
              {
                q: "Are chemicals included?",
                a: "Yes, all necessary chemicals are included in our weekly service. We test and balance your pool chemistry every visit.",
              },
              {
                q: "What if my pool is in really bad shape?",
                a: "We specialize in pool recovery. Even green, swampy pools can be restored. We'll assess and give you a clear plan and timeline.",
              },
              {
                q: "Do you offer one-time service or only weekly plans?",
                a: "We offer both! You can schedule one-time deep cleans, green-to-clean services, or sign up for weekly maintenance.",
              },
              {
                q: "Which areas do you serve?",
                a: "We serve Dallas, Plano, Richardson, Garland, Mesquite, Addison, and surrounding areas. Contact us to confirm we service your area.",
              },
              {
                q: "Are you insured?",
                a: "Yes, we are fully licensed and insured. Your pool and property are protected.",
              },
              {
                q: "How quickly can you start service?",
                a: "We typically have same-week availability for new customers. For urgent situations, we can often schedule within 24-48 hours.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 border border-slate-200"
              >
                <h3 className="font-semibold text-lg mb-2 text-slate-900">
                  {faq.q}
                </h3>
                <p className="text-slate-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Final CTA Section */}
      <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-sky-700 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for a pool that stays crystal-clear without the effort?
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            Tell us about your pool and we'll send a free quote.
          </p>
          <a
            href="#quote"
            className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-white text-sky-700 font-semibold hover:bg-sky-50 transition text-lg"
          >
            Request a Free Quote
          </a>
        </div>
      </section>

      {/* 11. Quote Form Section */}
      <section id="quote" className="px-6 py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 text-center">
            Get a Free Quote
          </h2>
          <p className="text-lg text-slate-700 mb-8 text-center">
            Tell us a bit about your pool and we'll reach out with pricing and
            availability.
          </p>
          <QuoteForm />
        </div>
      </section>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Gulf Breeze Pool Service",
            description:
              "Professional pool cleaning and maintenance services in Dallas, TX. Weekly service, deep cleans, and equipment repair.",
            url: "https://www.gulfbreezepoolsdfw.com",
            telephone: "972-951-1149",
            areaServed: [
              "Dallas",
              "Plano",
              "Richardson",
              "Garland",
              "Mesquite",
              "Addison",
              "Carrollton",
              "Frisco",
              "Flower Mound",
              "Argyle",
              "Highland Village",
              "Southlake",
              "Lewisville",
            ],
            serviceType: [
              "Pool Cleaning",
              "Pool Maintenance",
              "Pool Service",
              "Pool Equipment Repair",
              "Pool Deep Cleaning",
              "Pool Opening",
            ],
            priceRange: "$$",
            image: "https://www.gulfbreezepoolsdfw.com/logo.png",
            sameAs: ["https://www.instagram.com/gulfbreeze.poolservice"],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Dallas",
              addressRegion: "TX",
              addressCountry: "US",
            },
          }),
        }}
      />
    </main>
  );
}
