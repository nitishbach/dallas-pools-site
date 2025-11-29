import type { Metadata } from "next";
import TestimonialCard from "@/components/TestimonialCard";

export const metadata: Metadata = {
  title: "Testimonials | Gulf Breeze Pool Service",
  description:
    "Read what our customers say about Gulf Breeze Pool Service. See how we've helped Dallas homeowners maintain crystal-clear pools.",
};

export default function Testimonials() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="px-6 py-16 md:py-24 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            Customer Testimonials
          </h1>
          <p className="text-xl text-slate-700">
            See what Dallas homeowners are saying about our service
          </p>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="px-6 py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 text-center">
            Video Testimonials
          </h2>
          <p className="text-center text-slate-600 mb-8">
            (Demo videos for now)
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((num) => (
              <div key={num} className="aspect-video rounded-lg bg-slate-200 border border-slate-300 flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="w-16 h-16 mx-auto mb-2 text-slate-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <p className="text-slate-600 text-sm font-medium">
                    Video Testimonial {num}
                  </p>
                  <p className="text-slate-500 text-xs mt-1">
                    YouTube placeholder
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="px-6 py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-900 text-center">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard
              name="Sarah M."
              area="East Dallas"
              quote="My pool has never looked this good. Super reliable and always on time. I don't have to think about pool maintenance anymore. Gulf Breeze has been a game-changer for our family."
            />
            <TestimonialCard
              name="Michael R."
              area="Plano"
              quote="Fast response, fair pricing, and they explained everything clearly. Highly recommend for busy families. The team is professional and trustworthy."
            />
            <TestimonialCard
              name="Priya K."
              area="Richardson"
              quote="They took a green mess and made it crystal clear in a couple of visits. Professional and trustworthy. I'm so glad we found them."
            />
            <TestimonialCard
              name="David L."
              area="Garland"
              quote="Best pool service we've ever had. They're consistent, thorough, and always leave our pool looking perfect. Worth every penny."
            />
            <TestimonialCard
              name="Jennifer W."
              area="Addison"
              quote="I love that I don't have to worry about pool chemicals or maintenance anymore. They handle everything and communicate clearly about what they're doing."
            />
            <TestimonialCard
              name="Robert T."
              area="Mesquite"
              quote="After trying several pool services, we finally found one we can rely on. Gulf Breeze is professional, responsive, and does excellent work."
            />
            <TestimonialCard
              name="Amanda S."
              area="Carrollton"
              quote="The team is friendly, professional, and always on time. Our pool has never been cleaner. Highly recommend to anyone in the Dallas area."
            />
            <TestimonialCard
              name="James P."
              area="Frisco"
              quote="Great service, fair prices, and they actually care about doing a good job. We've been with them for over a year and couldn't be happier."
            />
            <TestimonialCard
              name="Lisa H."
              area="Dallas"
              quote="They saved our pool after we neglected it for months. Green to blue in just a few visits. Now we have weekly service and couldn't be happier."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">
            Ready to join our happy customers?
          </h2>
          <p className="text-lg text-slate-700 mb-8">
            Get a free quote and see why DFW homeowners trust Gulf Breeze
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

