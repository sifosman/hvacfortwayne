const PHONE = "(260) 786-9284";
const PHONE_HREF = "tel:+12607869284";

interface PageCTAProps {
  title?: string;
  subtitle?: string;
}

export default function PageCTA({
  title = "Need Service Right Now?",
  subtitle = "Don't wait for your system to fail completely. Call our dispatch center for same-day service across Fort Wayne and Allen County.",
}: PageCTAProps) {
  return (
    <section className="py-20 px-4 bg-red-600 text-white text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black uppercase mb-4 tracking-tight">{title}</h2>
        <p className="text-lg mb-8 text-red-100">{subtitle}</p>
        <a
          href={PHONE_HREF}
          className="bg-white text-red-600 px-10 py-4 rounded-full text-xl font-black uppercase shadow-2xl hover:bg-slate-900 hover:text-white transition-all inline-block"
        >
          {PHONE}
        </a>
        <p className="mt-4 text-sm text-red-200">Average response time in Allen County: 45 minutes</p>
      </div>
    </section>
  );
}
