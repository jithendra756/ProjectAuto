import { useState } from "react";
import heroImg from "./assets/hero-auto.png";

const PHONE = "+919876543210";
const WHATSAPP = "919876543210";
const BUSINESS_NAME = "Sri Balaji Auto Travels";

const telHref = `tel:${PHONE}`;
const waHref = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

const services = [
  { icon: "🛺", title: "Local Travel", desc: "Quick rides within the city at fair prices." },
  { icon: "🛣️", title: "Outstation Trips", desc: "Comfortable rides up to 150 KM away." },
  { icon: "🚆", title: "Railway Pickup", desc: "On-time pickup and drop at railway stations." },
  { icon: "🚌", title: "Bus Stand Pickup", desc: "Reliable pickup from any bus stand." },
  { icon: "🏥", title: "Hospital Visits", desc: "Safe, caring rides for patients & families." },
  { icon: "🛕", title: "Temple Trips", desc: "Peaceful trips to nearby temples." },
  { icon: "🎉", title: "Family Functions", desc: "Trusted travel for weddings & events." },
  { icon: "🏡", title: "Village Transport", desc: "Door-to-door service to nearby villages." },
];

const whyUs = [
  { icon: "💰", title: "Affordable Pricing", desc: "Much cheaper than cabs, with no hidden charges." },
  { icon: "🛡️", title: "Safer Travel", desc: "Experienced driver who follows all traffic rules." },
  { icon: "⏰", title: "Flexible Timings", desc: "Available early morning to late night." },
  { icon: "⚡", title: "Quick Response", desc: "Just one call or WhatsApp message away." },
  { icon: "😊", title: "Friendly Behavior", desc: "Polite, helpful, and respectful to every customer." },
  { icon: "🛋️", title: "Comfortable Ride", desc: "Clean and well-maintained auto-rickshaw." },
];

const areas = [
  "Madurai", "Dindigul", "Trichy", "Karur", "Theni",
  "Sivaganga", "Virudhunagar", "Ramnad", "Pudukkottai",
  "Palani", "Kodaikanal", "Oddanchatram", "Usilampatti", "Melur",
];

const testimonials = [
  {
    name: "Lakshmi Amma",
    role: "Senior Citizen, Madurai",
    text: "Driver anna is very kind and careful. He helped me with my bags and drove very safely to the hospital. Price was also very low.",
  },
  {
    name: "Ravi Kumar",
    role: "Student",
    text: "I take this auto every weekend to railway station. Always on time and much cheaper than cabs. Highly recommend!",
  },
  {
    name: "Suresh & Family",
    role: "Family of 4",
    text: "We booked for a temple trip to Palani. Comfortable journey, safe driving and very friendly. We will book again.",
  },
];

export default function App() {
  const [form, setForm] = useState({ name: "", phone: "", pickup: "", drop: "", date: "", notes: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello ${BUSINESS_NAME}, I want to book an auto.%0A%0AName: ${form.name}%0APhone: ${form.phone}%0APickup: ${form.pickup}%0ADrop: ${form.drop}%0ADate/Time: ${form.date}%0ANotes: ${form.notes}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
  };

  const prefilled = `Hello ${BUSINESS_NAME}, I would like to book an auto ride. Please share details.`;

  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth">
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#home" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-xl">🛺</span>
            <span className="text-base font-bold leading-tight sm:text-lg">{BUSINESS_NAME}</span>
          </a>
          <a href={telHref} className="hidden rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background hover:opacity-90 sm:inline-flex">
            📞 Call Now
          </a>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden bg-gradient-to-b from-primary/30 via-primary/10 to-background">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-2 md:items-center md:py-16">
          <div className="text-center md:text-left">
            <span className="inline-block rounded-full bg-foreground px-3 py-1 text-xs font-semibold text-primary">
              Trusted Local Auto Service
            </span>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
              Affordable Auto Travel Service
            </h1>
            <p className="mt-3 text-base text-muted-foreground sm:text-lg">
              Safe and budget-friendly rides within <strong className="text-foreground">150 KM</strong>. Call us or book on WhatsApp in seconds.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
              <a href={telHref} className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-4 text-base font-bold text-primary shadow-lg active:scale-95">
                📞 Call Now
              </a>
              <a href={waHref(prefilled)} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-4 text-base font-bold text-whatsapp-foreground shadow-lg active:scale-95">
                💬 WhatsApp Booking
              </a>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground md:justify-start">
              <span>✅ Experienced Driver</span>
              <span>✅ Low Prices</span>
              <span>✅ 150 KM Coverage</span>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border-4 border-foreground/90 shadow-2xl">
              <img src={heroImg} alt="Friendly auto-rickshaw driver ready to serve" width={1280} height={960} className="h-auto w-full object-cover" />
            </div>
            <div className="absolute -bottom-4 left-4 rounded-2xl border border-border bg-card px-4 py-3 shadow-lg">
              <p className="text-xs text-muted-foreground">Starting from</p>
              <p className="text-xl font-bold">₹15 / KM</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">About Our Service</h2>
            <p className="mt-3 text-muted-foreground">
              {BUSINESS_NAME} is a trusted local auto-rickshaw travel service helping families,
              elderly travelers, students and patients reach their destination safely and affordably.
              Whether you need a quick local ride or an outstation trip within 150 KM, we are just a call away.
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {["Experienced & licensed driver","Safe and careful driving","Affordable pricing always","Friendly, polite service","Reliable and on time","Clean auto-rickshaw"].map((t) => (
                <li key={t} className="flex items-start gap-2 rounded-xl bg-secondary px-3 py-2 text-sm">
                  <span className="text-base">✅</span><span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-primary/20 p-6 sm:p-8">
            <p className="text-5xl font-extrabold text-foreground">10+</p>
            <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Years of safe driving</p>
            <div className="mt-5 grid grid-cols-2 gap-4">
              <Stat n="2,500+" l="Happy Riders" />
              <Stat n="150 KM" l="Coverage Area" />
              <Stat n="24/7" l="Booking Support" />
              <Stat n="4.9★" l="Customer Rating" />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-secondary/60 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title="Our Services" sub="Wherever you want to go within 150 KM, we are ready." />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl border border-border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-2xl">{s.icon}</div>
                <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                <a href={waHref(`Hello, I need ${s.title}. Please share details.`)} target="_blank" rel="noopener" className="mt-4 inline-flex text-sm font-semibold text-foreground underline-offset-4 hover:underline">
                  Book on WhatsApp →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <SectionHead title="Why Choose Us" sub="Real reasons families and travelers trust us every day." />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((w) => (
            <div key={w.title} className="rounded-2xl bg-card p-5 ring-1 ring-border">
              <div className="text-3xl">{w.icon}</div>
              <h3 className="mt-3 text-lg font-bold">{w.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="coverage" className="bg-primary/15 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title="Coverage Areas" sub="We travel up to 150 KM, including these nearby towns and cities." />
          <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3">
            {areas.map((a) => (
              <span key={a} className="rounded-full border border-foreground/20 bg-card px-4 py-2 text-sm font-medium shadow-sm">📍 {a}</span>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Don't see your location? <a href={waHref("Hello, do you cover my area?")} target="_blank" rel="noopener" className="font-semibold text-foreground underline">Ask us on WhatsApp</a>
          </p>
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <SectionHead title="What Customers Say" sub="Honest reviews from people in our community." />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="text-primary">★★★★★</div>
              <p className="mt-3 text-sm leading-relaxed text-foreground/90">"{t.text}"</p>
              <div className="mt-4 border-t border-border pt-3">
                <p className="font-bold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-foreground text-background py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold sm:text-3xl text-primary">Book Your Ride</h2>
            <p className="mt-2 text-sm text-background/80">Fill the form and we'll send the details on WhatsApp.</p>
          </div>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <form onSubmit={handleSubmit} className="space-y-3 rounded-2xl bg-background p-5 text-foreground shadow-xl sm:p-6">
              <Field label="Your Name" required value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
              <Field label="Phone Number" required type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
              <Field label="Pickup Location" required value={form.pickup} onChange={(v) => setForm({ ...form, pickup: v })} />
              <Field label="Drop Location" required value={form.drop} onChange={(v) => setForm({ ...form, drop: v })} />
              <Field label="Date & Time" value={form.date} onChange={(v) => setForm({ ...form, date: v })} placeholder="e.g. Tomorrow 9 AM" />
              <div>
                <label className="mb-1 block text-sm font-semibold">Notes</label>
                <textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} rows={3} className="w-full rounded-xl border border-input bg-card px-4 py-3 text-base focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40" />
              </div>
              <button type="submit" className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-4 text-base font-bold text-whatsapp-foreground shadow-lg active:scale-95">
                💬 Send Booking on WhatsApp
              </button>
            </form>
            <div className="space-y-5">
              <div className="rounded-2xl bg-background/10 p-5 ring-1 ring-background/20">
                <h3 className="text-lg font-bold text-primary">Contact Directly</h3>
                <div className="mt-4 space-y-3">
                  <a href={telHref} className="flex items-center justify-between rounded-xl bg-primary px-4 py-3 text-foreground">
                    <span className="font-semibold">📞 {PHONE}</span><span className="text-sm font-bold">Call</span>
                  </a>
                  <a href={waHref(prefilled)} target="_blank" rel="noopener" className="flex items-center justify-between rounded-xl bg-whatsapp px-4 py-3 text-whatsapp-foreground">
                    <span className="font-semibold">💬 WhatsApp Chat</span><span className="text-sm font-bold">Open</span>
                  </a>
                </div>
                <p className="mt-4 text-sm text-background/80">
                  📍 Main Bus Stand Road, Madurai, Tamil Nadu - 625001
                  <br />⏰ Available: 5:00 AM – 11:00 PM, all 7 days
                </p>
              </div>
              <div className="overflow-hidden rounded-2xl ring-1 ring-background/20">
                <iframe title="Our location" src="https://www.google.com/maps?q=Madurai,Tamil+Nadu&output=embed" width="100%" height="260" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="block w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-background py-10">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-xl">🛺</span>
              <span className="font-bold">{BUSINESS_NAME}</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">Safe, affordable and friendly auto-rickshaw rides within 150 KM.</p>
          </div>
          <div>
            <p className="text-sm font-bold">Quick Links</p>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-foreground">Services</a></li>
              <li><a href="#why" className="hover:text-foreground">Why Choose Us</a></li>
              <li><a href="#coverage" className="hover:text-foreground">Coverage Areas</a></li>
              <li><a href="#contact" className="hover:text-foreground">Book Now</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-bold">Contact</p>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li><a href={telHref} className="hover:text-foreground">📞 {PHONE}</a></li>
              <li><a href={waHref(prefilled)} target="_blank" rel="noopener" className="hover:text-foreground">💬 WhatsApp</a></li>
              <li>📍 Madurai, Tamil Nadu</li>
            </ul>
          </div>
        </div>
        <p className="mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
        </p>
      </footer>

      <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center gap-3 px-4 md:hidden">
        <a href={telHref} className="flex flex-1 items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3.5 text-base font-bold text-primary shadow-xl active:scale-95">📞 Call</a>
        <a href={waHref(prefilled)} target="_blank" rel="noopener" className="flex flex-1 items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3.5 text-base font-bold text-whatsapp-foreground shadow-xl active:scale-95">💬 WhatsApp</a>
      </div>
      <div className="h-20 md:hidden" />
    </div>
  );
}

function SectionHead({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
      <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground sm:text-base">{sub}</p>
      <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-primary" />
    </div>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div className="rounded-xl bg-background/80 p-3">
      <p className="text-xl font-extrabold">{n}</p>
      <p className="text-xs text-muted-foreground">{l}</p>
    </div>
  );
}

function Field({ label, value, onChange, required, type = "text", placeholder }: {
  label: string; value: string; onChange: (v: string) => void;
  required?: boolean; type?: string; placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1 block text-sm font-semibold">
        {label} {required && <span className="text-destructive">*</span>}
      </label>
      <input type={type} required={required} value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} className="w-full rounded-xl border border-input bg-card px-4 py-3 text-base focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40" />
    </div>
  );
}
