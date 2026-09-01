import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { BookingForm, FeatureList, QuoteBanner, ShellSection } from "../components/ps/ps-site";
import { SEO } from "../components/ps/SEO";

export const Route = createFileRoute("/chennai-outstation")({ component: ChennaiPage });

function ChennaiPage() {
  return (
    <main className="bg-mist">
      <SEO
        title="Chennai Outstation Taxi | One Way & Round Trip"
        description="Book Chennai taxi service for airport transfers, one-way outstation cabs, round trips and Tamil Nadu travel."
        url="https://pstaxiservice.in/chennai-outstation"
      />
      <section className="bg-ink text-surface">
        <div className="mx-auto grid max-w-[1240px] gap-8 px-5 py-14 lg:grid-cols-12 lg:items-center lg:py-20">
          <div className="lg:col-span-7">
            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-amber">
              Chennai Taxi Service · Outstation Travel
            </div>
            <h1 className="mt-4 max-w-[14ch] text-4xl font-extrabold leading-[1.03] tracking-tight sm:text-6xl">
              Leave Chennai comfortably.
            </h1>
            <p className="mt-5 max-w-[48ch] text-[15px] leading-relaxed text-surface/70">
              Book a Chennai airport taxi, one-way cab or round trip for every road beyond the city.
              Clear quotes, comfortable vehicles and 24/7 support.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-amber px-5 py-3 font-semibold text-ink"
              >
                Get a quote <ArrowRight size={16} />
              </Link>
              <a
                href="tel:6380886330"
                className="inline-flex items-center rounded-full bg-surface/10 px-5 py-3 font-semibold text-surface ring-1 ring-surface/20"
              >
                Call 6380886330
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <BookingForm />
          </div>
        </div>
      </section>
      <ShellSection>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-amber-2">
              A route for every reason
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink">
              Your Chennai cab booking, handled properly.
            </h2>
            <p className="mt-4 leading-relaxed text-ink/65">
              Whether you are heading to Mahabalipuram, Pondicherry, Madurai, Coimbatore or a family
              home anywhere in Tamil Nadu, PS Taxi Service keeps the booking conversation simple.
            </p>
          </div>
          <div className="rounded-2xl bg-surface p-7 ring-1 ring-ink/5">
            <FeatureList
              items={[
                "Chennai airport taxi pickup and drop",
                "Chennai railway station pickup",
                "Chennai one way taxi service",
                "Chennai round trip taxi service",
                "Outstation taxi Tamil Nadu routes",
                "Instant fare conversation before booking",
              ]}
            />
          </div>
        </div>
      </ShellSection>
      <ShellSection className="pt-0">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-surface p-5 ring-1 ring-ink/5">
            <div className="font-mono text-2xl text-ink">MAA</div>
            <p className="mt-2 text-sm text-ink/60">
              Airport pickups with a driver ready for your arrival.
            </p>
          </div>
          <div className="rounded-xl bg-amber p-5 text-ink">
            <div className="font-mono text-2xl">1-way</div>
            <p className="mt-2 text-sm text-ink/70">
              Travel beyond Chennai without paying for a return you do not need.
            </p>
          </div>
          <div className="rounded-xl bg-ink p-5 text-surface">
            <div className="font-mono text-2xl text-amber">24/7</div>
            <p className="mt-2 text-sm text-surface/65">
              Support for early departures and late arrivals.
            </p>
          </div>
        </div>
      </ShellSection>
      <QuoteBanner />
    </main>
  );
}
