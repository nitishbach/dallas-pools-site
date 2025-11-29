interface TestimonialCardProps {
  name: string;
  area: string;
  quote: string;
  initials?: string;
}

export default function TestimonialCard({
  name,
  area,
  quote,
  initials,
}: TestimonialCardProps) {
  const displayInitials = initials || name.split(" ").map((n) => n[0]).join("");

  return (
    <div className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center text-sky-700 font-semibold flex-shrink-0">
          {displayInitials}
        </div>
        <div>
          <p className="font-semibold text-slate-900">{name}</p>
          <p className="text-sm text-slate-600">{area}</p>
        </div>
      </div>
      <p className="text-slate-700 leading-relaxed">"{quote}"</p>
    </div>
  );
}

