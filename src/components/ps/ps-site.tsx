import { useEffect, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUp,
  Check,
  ChevronDown,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
  X,
} from "lucide-react";
import { alternatePhone, destinations, fleet, navItems, phone, whatsappUrl } from "./ps-data";
import heroImage from "../../assets/ps-hero-airport.jpg";
import fleetImage from "../../assets/ps-fleet-innova.jpg";
import templeImage from "../../assets/ps-temple-tour.jpg";
import familyImage from "../../assets/ps-family-trip.jpg";
import logoImg from "../../assets/logo.png";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-ink text-surface text-[13px]">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-5 py-2">
          <div className="flex items-center gap-2">
            <span className="size-1.5 animate-pulse rounded-full bg-amber" />
            <span className="font-mono tracking-tight">
              24/7 · All of Tamil Nadu · Avg pickup 18 min
            </span>
          </div>
          <div className="hidden items-center gap-5 font-mono text-surface/80 sm:flex">
            <a href={`tel:${phone}`} className="hover:text-amber">
              ☎ {phone}
            </a>
            <a
              href="https://www.instagram.com/mr_lee_ps"
              target="_blank"
              rel="noreferrer"
              className="hover:text-amber"
            >
              Instagram @mr_lee_ps
            </a>
          </div>
        </div>
      </div>
      <header className="sticky top-0 z-30 border-b border-black/5 bg-white/80 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.03)] transition-all">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-5 py-3.5">
          <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <img src={logoImg} alt="PS Taxi Service Logo" className="h-10 w-10 object-contain" />
            <span className="leading-tight">
              <span className="block text-[15px] font-bold tracking-tight text-ink">
                PS Taxi Service
              </span>
              <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-ink/45">
                Safe · Comfort · Satisfaction
              </span>
            </span>
          </Link>
          <nav className="hidden items-center gap-7 text-sm font-medium text-ink/75 lg:flex">
            {navItems.map(([label, to]) => (
              <Link
                key={to}
                to={to}
                activeProps={{ className: "text-ink" }}
                className="transition-colors hover:text-ink"
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden rounded-full bg-ink px-4 py-2 text-sm font-semibold text-surface ring-1 ring-ink/5 transition-colors hover:bg-ink-2 sm:inline-flex"
            >
              Book Now
            </Link>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid size-10 place-items-center rounded-md border border-hairline text-ink lg:hidden"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
        {open && (
          <nav className="border-t border-hairline bg-surface px-5 py-3 lg:hidden">
            {navItems.map(([label, to]) => (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className="block border-b border-hairline py-3 text-sm font-medium text-ink/75 last:border-0"
              >
                {label}
              </Link>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-surface">
      <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-8 px-5 py-10 md:grid-cols-4">
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoImg} alt="PS Taxi Service Logo" className="h-9 w-9 object-contain" />
            <span className="font-bold tracking-tight text-ink">PS Taxi Service</span>
          </Link>
          <p className="mt-4 max-w-[28ch] text-sm text-ink/55">
            Safe Journey · Comfortable Ride · Customer Satisfaction. 24/7 across Tamil Nadu.
          </p>
          <div className="mt-4 font-mono text-[12px] text-ink/55">
            <a href={`tel:${phone}`} className="hover:text-ink">
              ☎ {phone}
            </a>
            <br />
            <a href={`tel:${alternatePhone}`} className="hover:text-ink">
              ☎ {alternatePhone}
            </a>
            <br />
            <a
              href="https://www.instagram.com/mr_lee_ps"
              target="_blank"
              rel="noreferrer"
              className="hover:text-ink"
            >
              @mr_lee_ps
            </a>
          </div>
        </div>
        <FooterGroup
          title="Company"
          links={[
            ["About Us", "/about"],
            ["Services", "/services"],
            ["Fleet", "/fleet"],
            ["Blog", "/blog"],
          ]}
        />
        <FooterGroup
          title="Travel"
          links={[
            ["Temple Tours", "/tours"],
            ["Chennai Outstation", "/chennai-outstation"],
            ["Destinations", "/destinations"],
            ["FAQ", "/faq"],
          ]}
        />
        <FooterGroup
          title="Book"
          links={[
            ["Airport Transfer", "/services"],
            ["One Way Taxi", "/chennai-outstation"],
            ["Round Trip", "/tours"],
            ["Contact", "/contact"],
          ]}
        />
      </div>
      <div className="border-t border-hairline">
        <div className="mx-auto flex max-w-[1240px] flex-col items-center justify-between gap-2 px-5 py-4 text-[12px] text-ink/45 sm:flex-row">
          <span>© 2026 PS Taxi Service · Chennai, Tamil Nadu</span>
          <span className="font-mono">Serving all of Tamil Nadu · 24/7</span>
        </div>
      </div>
    </footer>
  );
}

function FooterGroup({
  title,
  links,
}: {
  title: string;
  links: readonly (readonly [string, string])[];
}) {
  return (
    <div>
      <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/45">{title}</div>
      <ul className="mt-3 space-y-2 text-sm text-ink/70">
        {links.map(([label, to]) => (
          <li key={to}>
            <Link to={to} className="hover:text-ink">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="grid size-12 place-items-center rounded-full bg-ink text-surface shadow-xl shadow-ink/20 transition-transform hover:scale-105"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <ScrollToTop />
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp booking"
        className="grid size-12 place-items-center rounded-full bg-whatsapp text-surface shadow-xl shadow-ink/20 transition-transform hover:scale-110"
      >
        <MessageCircle size={21} />
      </a>
      <a
        href={`tel:${phone}`}
        aria-label="Call PS Taxi Service"
        className="grid size-12 place-items-center rounded-full bg-amber text-ink shadow-xl shadow-ink/20 transition-transform hover:scale-110"
      >
        <Phone size={19} />
      </a>
    </div>
  );
}

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [vehicle, setVehicle] = useState("Sedan");
  return (
    <div className="relative group">
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-amber/20 to-ink/10 opacity-50 blur-xl transition duration-1000 group-hover:opacity-80 group-hover:duration-200"></div>
      <div
        id="booking"
        className="relative rounded-3xl bg-white/95 backdrop-blur-xl p-6 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] ring-1 ring-black/5 sm:p-8"
      >
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50">
            Book your ride
          </span>
          <span className="font-mono text-[11px] text-amber-2">~40s quote</span>
        </div>
        {submitted ? (
          <div className="mt-5 rounded-xl bg-amber/15 p-5">
            <div className="flex items-center gap-2 font-semibold text-ink">
              <span className="grid size-7 place-items-center rounded-full bg-amber text-ink">
                <Check size={16} />
              </span>
              Request received
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink/65">
              Thanks. A PS Taxi Service team member will call you shortly to confirm your route and
              fare.
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-4 text-sm font-semibold text-ink underline underline-offset-4"
            >
              Book another ride
            </button>
          </div>
        ) : (
          <form
            className="mt-4 space-y-3"
            onSubmit={(event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const pickup = formData.get("pickup") as string;
              const drop = formData.get("drop") as string;
              const datetime = formData.get("datetime") as string;

              const message = `Hello PS Taxi! I would like to request a quote.
📍 *Pickup:* ${pickup}
📍 *Drop:* ${drop}
📅 *Date & Time:* ${new Date(datetime).toLocaleString()}
🚙 *Vehicle:* ${vehicle}`;

              window.open(
                `https://wa.me/916380886330?text=${encodeURIComponent(message)}`,
                "_blank",
              );
              setSubmitted(true);
            }}
          >
            <Field label="Pickup" name="pickup" placeholder="Chennai Airport (MAA)" dot="bg-ink" />
            <Field label="Drop" name="drop" placeholder="Mahabalipuram" dot="bg-amber" />
            <div className="grid grid-cols-2 gap-3">
              <label className="block">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/45">
                  Date · time
                </span>
                <input
                  required
                  name="datetime"
                  type="datetime-local"
                  className="mt-1 w-full rounded-lg border border-hairline bg-mist px-3 py-2.5 text-sm text-ink outline-none focus:border-amber"
                />
              </label>
              <label className="block">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/45">
                  Vehicle
                </span>
                <select
                  value={vehicle}
                  onChange={(event) => setVehicle(event.target.value)}
                  className="mt-1 w-full rounded-lg border border-hairline bg-mist px-3 py-2.5 text-sm text-ink outline-none focus:border-amber"
                >
                  <option>Sedan</option>
                  <option>Innova Crysta</option>
                  <option>SUV</option>
                  <option>Tempo Traveller</option>
                </select>
              </label>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-amber/15 px-3 py-2.5 text-sm text-ink/70">
              <span className="size-2 rounded-full bg-amber-2" />
              <span>
                {vehicle} · <b className="text-ink">Instant quote</b> · one-way
              </span>
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-ink py-3 font-semibold text-surface ring-1 ring-ink/5 transition-colors hover:bg-ink-2"
            >
              Request a quote <ArrowRight size={16} />
            </button>
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href={`tel:${phone}`}
                className="flex items-center justify-center gap-2 rounded-lg border border-hairline bg-surface py-2.5 font-semibold text-ink transition-colors hover:border-ink/30"
              >
                <Phone size={15} /> Call
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg bg-amber py-2.5 font-semibold text-ink transition-colors hover:bg-amber-2"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
            <div className="flex items-center gap-2 text-[12px] text-ink/55">
              <span className="flex gap-0.5 text-amber-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={12} fill="currentColor" />
                ))}
              </span>
              <span>
                <b className="text-ink">4.9</b> from 2,300+ rides
              </span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  placeholder,
  dot,
  name,
}: {
  label: string;
  placeholder: string;
  dot: string;
  name?: string;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/45">{label}</span>
      <span className="mt-1 flex items-center gap-2 rounded-lg border border-hairline bg-mist px-3 py-2.5 focus-within:border-amber">
        <span className={`size-2 rounded-full ${dot}`} />
        <input
          name={name}
          required
          placeholder={placeholder}
          className="min-w-0 flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-ink/40"
        />
      </span>
    </label>
  );
}

export function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative mt-7 overflow-hidden rounded-xl"
    >
      <img
        src={heroImage}
        alt="White PS Taxi Service sedan at an airport arrivals plaza"
        width={1280}
        height={800}
        className="aspect-[16/10] w-full object-cover transition-transform duration-1000 hover:scale-105"
      />
      <div className="pointer-events-none absolute left-[10%] top-[78%] h-0.5 w-[75%] route-line" />
      <span className="absolute bottom-[21%] left-[9%] size-3 rounded-full border-2 border-surface bg-ink" />
      <span className="absolute right-[14%] top-[15%] size-3 rounded-full border-2 border-ink bg-amber" />
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute bottom-4 left-4 rounded-lg bg-surface/95 px-3.5 py-2.5 shadow-xl shadow-ink/10 ring-1 ring-ink/5"
      >
        <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/45">
          Now available
        </div>
        <div className="text-sm font-semibold text-ink">Chennai → Mahabalipuram · 2 cabs ready</div>
      </motion.div>
    </motion.div>
  );
}

export function TrustStrip() {
  return (
    <section className="bg-gradient-to-b from-mist to-white border-y border-black/5 shadow-[inset_0_-2px_10px_rgba(0,0,0,0.02)] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-full bg-amber/5 blur-[120px] pointer-events-none" />
      <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-4 px-5 py-6 md:grid-cols-4 relative z-10">
        <Stat value="24/7" label="Always on the road" />
        <Stat value="18 min" label="Average pickup time" />
        <Stat value="4.9★" label="Verified customer rating" />
        <Stat value="Tamil Nadu" label="Full-state coverage" />
      </div>
    </section>
  );
}
function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rise-in flex flex-col items-center text-center p-3">
      <div className="font-mono text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-ink to-ink/70 drop-shadow-sm">
        {value}
      </div>
      <div className="mt-1.5 text-[13px] font-medium text-ink/60 uppercase tracking-widest">
        {label}
      </div>
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  copy,
  image,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  image?: "temple" | "family" | "fleet";
}) {
  const imageSrc =
    image === "temple"
      ? templeImage
      : image === "family"
        ? familyImage
        : image === "fleet"
          ? fleetImage
          : undefined;
  return (
    <section className="mx-auto grid max-w-[1240px] gap-8 px-5 pb-10 pt-10 lg:grid-cols-12 lg:items-end lg:pt-14 overflow-hidden">
      {" "}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`${imageSrc ? "lg:col-span-7" : "lg:col-span-9"}`}
      >
        <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-amber-2">
          {eyebrow}
        </div>
        <h1 className="mt-3 max-w-[18ch] text-4xl font-extrabold leading-[1.03] tracking-tight text-ink sm:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-[55ch] text-[15px] leading-relaxed text-ink/65">{copy}</p>
      </motion.div>
      {imageSrc && (
        <motion.img
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          src={imageSrc}
          alt="Tamil Nadu travel with PS Taxi Service"
          width={1200}
          height={800}
          className="aspect-[5/3] w-full rounded-xl object-cover shadow-2xl lg:col-span-5"
        />
      )}
    </section>
  );
}

export function QuoteBanner() {
  return (
    <section className="mx-auto max-w-[1240px] px-5 pb-14">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-ink via-[#1a1a1a] to-black p-8 text-surface sm:p-12 shadow-2xl shadow-ink/20 ring-1 ring-white/10">
        <div className="absolute -top-32 -right-32 size-[30rem] bg-amber/20 blur-[100px] rounded-full pointer-events-none transition-all duration-1000 ease-in-out" />
        <div className="absolute -bottom-32 -left-32 size-[25rem] bg-amber/10 blur-[90px] rounded-full pointer-events-none" />
        <div className="relative z-10 flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl drop-shadow-md">
              Need a taxi right now?
            </h2>
            <p className="mt-4 max-w-[42ch] text-[15px] leading-relaxed text-surface/80">
              Talk to a real person in under a minute. We operate 24/7, providing premium rides
              across Tamil Nadu.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href={`tel:${phone}`}
              className="rounded-full bg-amber px-5 py-3 font-semibold text-ink transition-colors hover:bg-amber-2"
            >
              ☎ {phone}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-surface/10 px-5 py-3 font-semibold text-surface ring-1 ring-surface/20 transition-colors hover:bg-surface/20"
            >
              WhatsApp Booking
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceCard({
  service,
  featured = false,
}: {
  service: (typeof import("./ps-data").services)[number];
  featured?: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`group rounded-2xl p-6 sm:p-8 ring-1 shadow-sm hover:shadow-2xl transition-all duration-300 ${featured ? "bg-gradient-to-br from-ink to-black ring-white/10 text-surface" : "bg-white ring-black/5 hover:ring-amber/30 text-ink"}`}
    >
      <div
        className={`font-mono text-[11px] uppercase tracking-[0.16em] ${featured ? "text-amber" : "text-amber-2"}`}
      >
        {service.eyebrow}
      </div>
      <div className="mt-6 text-xl font-bold tracking-tight">{service.name}</div>
      <p className={`mt-1.5 max-w-[34ch] text-sm ${featured ? "text-surface/65" : "text-ink/60"}`}>
        {service.description}
      </p>
      <div className={`mt-4 font-mono text-[12px] ${featured ? "text-amber" : "text-amber-2"}`}>
        <span className="flex items-center gap-1 font-semibold hover:underline">
          Book Now <ArrowRight size={13} />
        </span>
      </div>
    </motion.article>
  );
}

export function FleetCard({ item }: { item: (typeof fleet)[number] }) {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="overflow-hidden rounded-2xl bg-white border border-transparent hover:border-amber/20 shadow-sm hover:shadow-2xl transition-all duration-300"
    >
      <img
        src={item.image}
        alt={`${item.name} taxi vehicle option`}
        width={1024}
        height={768}
        loading="lazy"
        className="aspect-[4/3] w-full object-cover"
      />
      <div className="p-4">
        <div className="font-bold tracking-tight text-ink">{item.name}</div>
        <div className="mt-1 font-mono text-[11px] text-ink/55">
          {item.model} · {item.seats} · {item.bags}
        </div>
        <div className="mt-3 flex items-center justify-end">
          <Link
            to="/contact"
            className="text-[13px] flex items-center gap-1 font-semibold text-ink hover:underline"
          >
            Select <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export function FeatureList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm text-ink/70">
          <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-amber/20 text-amber-2">
            <Check size={13} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function DestinationGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {destinations.map((item, i) => (
        <motion.div
          key={item.slug}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
        >
          <Link
            to="/destinations/$slug"
            params={{ slug: item.slug }}
            className="group relative overflow-hidden rounded-2xl w-full aspect-[4/5] block shadow-md hover:shadow-2xl transition-shadow"
          >
            <img
              src={item.image}
              alt={item.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/90 pointer-events-none transition-opacity duration-300 group-hover:opacity-90" />

            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-2.5 py-1.5 rounded-md text-[11px] font-semibold flex items-center gap-1.5 text-ink shadow-sm transition-transform duration-300 group-hover:translate-y-1">
              <MapPin size={12} />
              {item.name}
            </div>

            <div className="absolute bottom-0 left-0 w-full p-5 text-left pointer-events-none">
              <h3 className="text-xl tracking-tight font-bold text-white drop-shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
                {item.name}
              </h3>
              <p className="mt-1.5 text-[13px] leading-snug text-white/90 drop-shadow-sm max-w-[90%] line-clamp-2 transition-transform duration-300 group-hover:-translate-y-1">
                {item.intro}
              </p>
              <div className="mt-3 flex items-center gap-1 text-[12px] font-medium text-white drop-shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
                <Star size={13} className="fill-amber text-amber" />
                <span>{item.rating}</span>
                <span className="text-white/70 ml-0.5">({item.reviews})</span>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

export function TrustFeatures() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <div className="flex gap-3">
        <ShieldCheck className="mt-0.5 shrink-0 text-amber-2" size={22} />
        <div>
          <h3 className="font-bold text-ink">Drivers you can trust</h3>
          <p className="mt-1 text-sm leading-relaxed text-ink/60">
            Professional drivers who put calm, punctual and respectful travel first.
          </p>
        </div>
      </div>
      <div className="flex gap-3">
        <Check className="mt-0.5 shrink-0 text-amber-2" size={22} />
        <div>
          <h3 className="font-bold text-ink">Comfort in every mile</h3>
          <p className="mt-1 text-sm leading-relaxed text-ink/60">
            Clean, maintained vehicles matched to your people, luggage and route.
          </p>
        </div>
      </div>
    </div>
  );
}

export function Accordion({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group border-b border-hairline py-5">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink">
        <span>{question}</span>
        <ChevronDown size={18} className="shrink-0 transition-transform group-open:rotate-180" />
      </summary>
      <p className="max-w-3xl pt-3 text-sm leading-relaxed text-ink/65">{answer}</p>
    </details>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  link,
}: {
  eyebrow: string;
  title: string;
  link?: { label: string; to: string };
}) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/45">
          {eyebrow}
        </div>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          {title}
        </h2>
      </div>
      {link && (
        <Link
          to={link.to}
          className="hidden font-mono text-[12px] text-ink/60 hover:text-ink sm:inline"
        >
          {link.label} →
        </Link>
      )}
    </div>
  );
}

export function ShellSection({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <section className={`mx-auto max-w-[1240px] px-5 py-14 ${className}`}>{children}</section>;
}
