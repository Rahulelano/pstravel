import { createFileRoute } from "@tanstack/react-router";
import { FleetCard, PageIntro, QuoteBanner, ShellSection } from "../components/ps/ps-site";
import { fleet } from "../components/ps/ps-data";
import { SEO } from "../components/ps/SEO";

export const Route = createFileRoute("/fleet")({ component: FleetPage });
function FleetPage() {
  return (
    <main className="bg-mist">
      <SEO
        title="Taxi Fleet Tamil Nadu | Sedan, SUV & Innova"
        description="Choose a clean sedan, SUV, Innova Crysta or Tempo Traveller for your Tamil Nadu taxi booking."
        url="https://pstaxiservice.in/fleet"
      />
      <PageIntro
        eyebrow="Fleet · Comfortable Vehicles"
        title="Choose the vehicle that fits your journey."
        copy="From a quick city transfer to a family road trip, our fleet is selected for clean interiors, practical luggage space and a comfortable ride across Tamil Nadu."
        image="fleet"
      />
      <ShellSection className="pt-0">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {fleet.map((item) => (
            <FleetCard item={item} key={item.name} />
          ))}
        </div>
        <div className="mt-8 rounded-xl bg-amber/10 p-5 text-center text-sm font-medium text-ink ring-1 ring-amber/20">
          <span className="mr-2 text-lg">✨</span>
          Looking for something else? We can arrange any vehicle you need for your journey. Just
          ask!
        </div>
      </ShellSection>
      <ShellSection className="pt-0">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-amber-2">
              Vehicle matching
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink">
              More space when the journey calls for it.
            </h2>
            <p className="mt-4 leading-relaxed text-ink/65">
              Share your passenger count, luggage and route when booking. We will help you choose a
              vehicle that keeps everyone comfortable without paying for space you do not need.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl bg-surface p-5 ring-1 ring-ink/5">
              <div className="font-mono text-xl text-amber-2">4</div>
              <p className="mt-2 text-sm text-ink/60">
                Vehicle categories for local, airport and outstation travel.
              </p>
            </div>
            <div className="rounded-xl bg-ink p-5 text-surface">
              <div className="font-mono text-xl text-amber">12</div>
              <p className="mt-2 text-sm text-surface/65">
                Seats available in our group travel option.
              </p>
            </div>
          </div>
        </div>
      </ShellSection>
      <QuoteBanner />
    </main>
  );
}
