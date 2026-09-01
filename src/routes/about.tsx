import { createFileRoute, Link } from "@tanstack/react-router";
import {
  FeatureList,
  PageIntro,
  QuoteBanner,
  ShellSection,
  TrustFeatures,
} from "../components/ps/ps-site";
import { SEO } from "../components/ps/SEO";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <main className="bg-mist">
      <SEO
        title="About PS Taxi Service | Tamil Nadu Travel"
        description="Learn why customers trust PS Taxi Service for safe, comfortable and professional journeys across Tamil Nadu."
        url="https://pstaxiservice.in/about"
      />
      <PageIntro
        eyebrow="About PS Taxi Service"
        title="A safer, calmer way to travel Tamil Nadu."
        copy="PS Taxi Service is built around a simple promise: every passenger deserves a clean vehicle, a professional driver and a journey that feels looked after from the first call."
        image="family"
      />
      <ShellSection>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/45">
              Our vision
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink">
              Make every Tamil Nadu journey feel easy.
            </h2>
            <p className="mt-4 leading-relaxed text-ink/65">
              From airport arrivals and railway station pickups to temple tours and long highway
              drives, we bring dependable service to the moments that matter. Our team focuses on
              clear communication, comfortable vehicles and drivers who respect your time.
            </p>
            <div className="mt-7">
              <TrustFeatures />
            </div>
          </div>
          <div className="rounded-2xl bg-surface p-7 ring-1 ring-ink/5">
            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-amber-2">
              What we stand for
            </div>
            <h2 className="mt-3 text-2xl font-bold text-ink">
              Safe Journey · Comfortable Ride · Customer Satisfaction
            </h2>
            <div className="mt-6">
              <FeatureList
                items={[
                  "24/7 response for planned and urgent travel",
                  "Clean vehicles matched to your route and group size",
                  "Professional drivers for city, highway and temple routes",
                  "A clear booking conversation before the journey starts",
                  "Service across Chennai and all over Tamil Nadu",
                ]}
              />
            </div>
          </div>
        </div>
      </ShellSection>
      <ShellSection className="pt-0">
        <div className="grid gap-5 sm:grid-cols-3">
          <div className="rounded-xl bg-ink p-6 text-surface">
            <div className="font-mono text-3xl text-amber">24/7</div>
            <p className="mt-2 text-sm text-surface/65">
              Availability for airport, local and emergency cab requests.
            </p>
          </div>
          <div className="rounded-xl bg-surface p-6 ring-1 ring-ink/5">
            <div className="font-mono text-3xl text-ink">TN</div>
            <p className="mt-2 text-sm text-ink/60">One trusted travel partner across the state.</p>
          </div>
          <div className="rounded-xl bg-amber p-6 text-ink">
            <div className="font-mono text-3xl">4.9★</div>
            <p className="mt-2 text-sm text-ink/70">Customer rating built on thoughtful rides.</p>
          </div>
        </div>
      </ShellSection>
      <ShellSection className="pt-0">
        <p className="text-sm text-ink/60">
          Need help planning your route?{" "}
          <Link to="/contact" className="font-semibold text-ink underline underline-offset-4">
            Talk to PS Taxi Service
          </Link>
          .
        </p>
      </ShellSection>
      <QuoteBanner />
    </main>
  );
}
