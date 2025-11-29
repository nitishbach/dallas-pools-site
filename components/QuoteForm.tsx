export default function QuoteForm() {
  return (
    <form
      className="grid gap-4 md:grid-cols-2"
      action="mailto:info@gulfbreezepoolservice.com"
      method="post"
      encType="text/plain"
    >
      <input
        className="col-span-2 md:col-span-1 px-4 py-3 rounded-md text-slate-900 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
        placeholder="Name"
        name="name"
        required
      />
      <input
        type="email"
        className="col-span-2 md:col-span-1 px-4 py-3 rounded-md text-slate-900 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
        placeholder="Email"
        name="email"
        required
      />
      <input
        type="tel"
        className="col-span-2 md:col-span-1 px-4 py-3 rounded-md text-slate-900 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
        placeholder="Phone"
        name="phone"
      />
      <input
        className="col-span-2 md:col-span-1 px-4 py-3 rounded-md text-slate-900 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
        placeholder="Address or ZIP"
        name="address"
      />
      <select
        className="col-span-2 px-4 py-3 rounded-md text-slate-900 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
        name="service"
      >
        <option>Weekly service</option>
        <option>One-time deep clean</option>
        <option>Green-to-clean</option>
        <option>Equipment check / repair</option>
        <option>Other</option>
      </select>
      <textarea
        className="col-span-2 px-4 py-3 rounded-md text-slate-900 min-h-[120px] border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
        placeholder="Tell us about your pool (size, issues, timing)…"
        name="details"
      />
      <button
        type="submit"
        className="col-span-2 inline-flex items-center justify-center px-6 py-3 rounded-md bg-sky-700 text-white font-semibold hover:bg-sky-800 transition"
      >
        Send my request
      </button>
    </form>
  );
}

