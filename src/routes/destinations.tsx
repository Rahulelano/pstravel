import { createFileRoute } from "@tanstack/react-router";
import { DestinationGrid, PageIntro, QuoteBanner, ShellSection } from "../components/ps/ps-site";
import { SEO } from "../components/ps/SEO";

export const Route = createFileRoute("/destinations")({ component: DestinationsPage });
function DestinationsPage() {
  return (
    <main className="bg-mist">
      <SEO
        title="Tamil Nadu Taxi Destinations | PS Taxi Service"
        description="Find taxi service for Chennai, Madurai, Trichy, Ooty, Kodaikanal, Rameswaram, Kanyakumari and destinations across Tamil Nadu."
        url="https://pstaxiservice.in/destinations"
      />
      <PageIntro
        eyebrow="Destinations · All Over Tamil Nadu"
        title="One cab partner, every kind of Tamil Nadu."
        copy="Explore location-based taxi service for city trips, airport transfers, temple routes, hill stations and long outstation journeys."
      />
      <ShellSection className="pt-0">
        <DestinationGrid />
      </ShellSection>
      <ShellSection className="pt-0">
        <div className="grid gap-7 lg:grid-cols-2">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-amber-2">
              Local knowledge matters
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink">
              The road feels shorter when the driver knows it.
            </h2>
          </div>
          <p className="max-w-[50ch] leading-relaxed text-ink/65">
            PS Taxi Service covers the routes travelers actually take: terminals to hotels, cities
            to family homes, Chennai to the hills and temple circuits that need a little more
            planning. Choose a destination to see what we can help you arrange.
          </p>
        </div>
      </ShellSection>
      <QuoteBanner />
    </main>
  );
}
