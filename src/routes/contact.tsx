import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Clock3, Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import { alternatePhone, phone, whatsappUrl } from "../components/ps/ps-data";
import { QuoteBanner, ShellSection } from "../components/ps/ps-site";
import { SEO } from "../components/ps/SEO";

export const Route = createFileRoute("/contact")({ component: ContactPage });

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <main className="bg-mist">
      <SEO
        title="Contact PS Taxi Service | Book a Tamil Nadu Taxi"
        description="Call, WhatsApp or send a quick booking request to PS Taxi Service for 24/7 taxi service across Tamil Nadu."
        url="https://pstaxiservice.in/contact"
      />
      <section className="bg-ink text-surface">
        <div className="mx-auto max-w-[1240px] px-5 py-14 sm:py-20">
          <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-amber">
            Contact · 24/7 Taxi Booking
          </div>
          <h1 className="mt-4 max-w-[14ch] text-5xl font-extrabold leading-[1.03] tracking-tight sm:text-7xl">
            Tell us where you need to go.
          </h1>
          <p className="mt-5 max-w-[50ch] text-[15px] leading-relaxed text-surface/70">
            Call, WhatsApp or send a quick request. A real PS Taxi Service team member will help
            confirm your route and vehicle.
          </p>
        </div>
      </section>
      <ShellSection>
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <ContactItem
              icon={<Phone size={18} />}
              label="Call us"
              value={phone}
              href={`tel:${phone}`}
            />
            <ContactItem
              icon={<Phone size={18} />}
              label="Alternate number"
              value={alternatePhone}
              href={`tel:${alternatePhone}`}
            />
            <ContactItem
              icon={<MessageCircle size={18} />}
              label="WhatsApp booking"
              value="Message PS Taxi Service"
              href={whatsappUrl}
            />
            <ContactItem
              icon={<Instagram size={18} />}
              label="Instagram"
              value="@mr_lee_ps"
              href="https://www.instagram.com/mr_lee_ps"
            />
            <div className="rounded-xl bg-amber p-5 text-ink">
              <div className="flex items-center gap-2 font-semibold">
                <Clock3 size={18} /> Open 24/7
              </div>
              <p className="mt-2 text-sm text-ink/70">
                All over Tamil Nadu · Airport, local, outstation and tour bookings.
              </p>
            </div>
          </div>
          <div className="rounded-2xl bg-surface p-6 ring-1 ring-ink/5 sm:p-8 lg:col-span-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/45">
              Quick booking form
            </div>
            {sent ? (
              <div className="mt-8 rounded-xl bg-amber/15 p-6">
                <div className="flex items-center gap-2 font-semibold text-ink">
                  <Check size={18} /> Request sent successfully
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  We will contact you shortly to confirm the booking details.
                </p>
              </div>
            ) : (
              <form
                className="mt-6 grid gap-4 sm:grid-cols-2"
                onSubmit={(event) => {
                  event.preventDefault();
                  const formData = new FormData(event.currentTarget);
                  const name = formData.get("name") as string;
                  const phone = formData.get("phone") as string;
                  const pickup = formData.get("pickup") as string;
                  const drop = formData.get("drop") as string;
                  const messageText = formData.get("message") as string;

                  const text = `Hello PS Taxi! I am reaching out for a booking.
👤 *Name:* ${name}
📞 *Phone:* ${phone}
📍 *Pickup:* ${pickup}
📍 *Drop:* ${drop}
💬 *Message:* ${messageText}`;

                  window.open(
                    `https://wa.me/916380886330?text=${encodeURIComponent(text)}`,
                    "_blank",
                  );
                  setSent(true);
                }}
              >
                <label className="block">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/45">
                    Your name
                  </span>
                  <input
                    required
                    name="name"
                    className="mt-1 w-full rounded-lg border border-hairline bg-mist px-3 py-3 text-sm outline-none focus:border-amber"
                  />
                </label>
                <label className="block">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/45">
                    Phone number
                  </span>
                  <input
                    required
                    name="phone"
                    type="tel"
                    className="mt-1 w-full rounded-lg border border-hairline bg-mist px-3 py-3 text-sm outline-none focus:border-amber"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/45">
                    Pickup location
                  </span>
                  <input
                    required
                    name="pickup"
                    placeholder="Chennai Airport, hotel, railway station..."
                    className="mt-1 w-full rounded-lg border border-hairline bg-mist px-3 py-3 text-sm outline-none focus:border-amber"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/45">
                    Where are you going?
                  </span>
                  <input
                    required
                    name="drop"
                    placeholder="Destination or tour route"
                    className="mt-1 w-full rounded-lg border border-hairline bg-mist px-3 py-3 text-sm outline-none focus:border-amber"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/45">
                    Message
                  </span>
                  <textarea
                    rows={4}
                    name="message"
                    placeholder="Date, passenger count, vehicle preference..."
                    className="mt-1 w-full resize-none rounded-lg border border-hairline bg-mist px-3 py-3 text-sm outline-none focus:border-amber"
                  />
                </label>
                <button
                  type="submit"
                  className="rounded-lg bg-ink px-5 py-3 font-semibold text-surface transition-colors hover:bg-ink-2 sm:col-span-2"
                >
                  Send booking request
                </button>
              </form>
            )}
          </div>
        </div>
      </ShellSection>
      <ShellSection className="pt-0">
        <div className="grid gap-6 rounded-2xl bg-surface p-7 ring-1 ring-ink/5 sm:grid-cols-2 sm:p-9">
          <div>
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/45">
              <MapPin size={14} /> Service area
            </div>
            <h2 className="mt-3 text-2xl font-bold text-ink">All over Tamil Nadu</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              Chennai, Madurai, Trichy, Coimbatore, Salem, Erode, Thanjavur, Kumbakonam, Rameswaram,
              Ooty, Kodaikanal and Kanyakumari.
            </p>
          </div>
          <div className="min-h-40 rounded-xl bg-mist p-5">
            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-amber-2">
              Map area
            </div>
            <p className="mt-3 max-w-[28ch] text-sm leading-relaxed text-ink/55">
              Serving Tamil Nadu routes from city streets to coastal highways and hill roads.
            </p>
          </div>
        </div>
      </ShellSection>
      <QuoteBanner />
    </main>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="flex items-center gap-4 rounded-xl bg-surface p-4 ring-1 ring-ink/5 transition-transform hover:-translate-y-0.5"
    >
      <span className="grid size-10 place-items-center rounded-lg bg-amber/15 text-amber-2">
        {icon}
      </span>
      <span>
        <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-ink/45">
          {label}
        </span>
        <span className="mt-1 block text-sm font-semibold text-ink">{value}</span>
      </span>
    </a>
  );
}
