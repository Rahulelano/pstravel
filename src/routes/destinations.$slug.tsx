import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { QuoteBanner, ShellSection } from "../components/ps/ps-site";
import { destinations } from "../components/ps/ps-data";
import { SEO } from "../components/ps/SEO";

export const Route = createFileRoute("/destinations/$slug")({
  loader: ({ params }) => {
    const destination = destinations.find((item) => item.slug === params.slug);
    if (!destination) throw notFound();
    return destination;
  },
  component: DestinationPage,
});
function DestinationPage() {
  const destination = Route.useLoaderData();
  return (
    <main className="bg-mist">
      <SEO
        title={`${destination.name} Taxi Service | PS Taxi Tamil Nadu`}
        description={destination.intro ?? "Book a taxi across Tamil Nadu with PS Taxi Service."}
        url={`https://pstaxiservice.in/destinations/${destination.slug}`}
        image={destination.image}
      />
      <section className="bg-ink text-surface">
        <div className="mx-auto max-w-[1240px] px-5 py-14 sm:py-20">
          <Link
            to="/destinations"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-amber"
          >
            <ArrowLeft size={14} /> All destinations
          </Link>
          <div className="mt-8 max-w-3xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-amber">
              {destination.type}
            </div>
            <h1 className="mt-3 text-5xl font-extrabold tracking-tight sm:text-7xl">
              {destination.name} taxi service.
            </h1>
            <p className="mt-5 max-w-[55ch] text-[15px] leading-relaxed text-surface/70">
              {destination.intro} Book a clean vehicle and a thoughtful driver for local travel,
              airport transfers, family visits and outstation routes.
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-amber px-5 py-3 font-semibold text-ink"
            >
              Book a {destination.name} taxi <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      <ShellSection>
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-amber-2">
              Travel with PS Taxi Service
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink">
              Comfortable travel starts with a clear plan.
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-ink/65">
              Tell us your pickup point, destination, date and vehicle preference. We will help you
              plan the simplest route and confirm your booking with a clear fare conversation.
            </p>
          </div>
          <div className="rounded-xl bg-surface p-6 ring-1 ring-ink/5">
            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/45">
              Good for
            </div>
            <ul className="mt-4 space-y-3 text-sm text-ink/70">
              <li>Airport and railway pickups</li>
              <li>Local sightseeing</li>
              <li>One-way outstation travel</li>
              <li>Family and temple tours</li>
            </ul>
          </div>
        </div>
      </ShellSection>
      <QuoteBanner />
    </main>
  );
}
