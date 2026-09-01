import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PageIntro, QuoteBanner, ShellSection } from "../components/ps/ps-site";
import { tours } from "../components/ps/ps-data";
import { SEO } from "../components/ps/SEO";

export const Route = createFileRoute("/tours")({ component: ToursPage });

function ToursPage() {
  return (
    <main className="bg-mist">
      <SEO
        title="Tamil Nadu Temple & Family Tours | PS Taxi"
        description="Plan Rameswaram, Madurai, Navagraha, Ooty, Kodaikanal and Kanyakumari taxi tour packages with PS Taxi Service."
        url="https://pstaxiservice.in/tours"
      />
      <PageIntro
        eyebrow="Tour Packages · Tamil Nadu Travel"
        title="See more of Tamil Nadu, without rushing it."
        copy="Temple towns, coastal roads and hill-station mornings — we plan flexible taxi tours around your group, your dates and the places you want to remember."
        image="temple"
      />
      <ShellSection className="pt-0">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour, index) => (
            <article
              key={tour.name}
              className={`rounded-xl p-6 ring-1 ring-ink/5 ${index === 0 ? "bg-ink text-surface" : "bg-surface text-ink"}`}
            >
              <div
                className={`font-mono text-[11px] uppercase tracking-[0.16em] ${index === 0 ? "text-amber" : "text-amber-2"}`}
              >
                {tour.meta}
              </div>
              <h2 className="mt-6 text-xl font-bold tracking-tight">{tour.name}</h2>
              <p
                className={`mt-2 text-sm leading-relaxed ${index === 0 ? "text-surface/65" : "text-ink/60"}`}
              >
                {tour.copy}
              </p>
              <ul
                className={`mt-5 space-y-2 text-sm ${index === 0 ? "text-surface/75" : "text-ink/65"}`}
              >
                <li className="flex gap-2">
                  <Check size={15} className="mt-0.5 text-amber-2" />
                  Private taxi and driver
                </li>
                <li className="flex gap-2">
                  <Check size={15} className="mt-0.5 text-amber-2" />
                  Flexible itinerary options
                </li>
              </ul>
              <div
                className={`mt-6 flex items-center justify-end font-mono text-[12px] ${index === 0 ? "text-amber" : "text-amber-2"}`}
              >
                <a href="tel:6380886330" className="font-sans font-semibold">
                  Plan this tour <ArrowRight className="inline" size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </ShellSection>
      <QuoteBanner />
    </main>
  );
}
