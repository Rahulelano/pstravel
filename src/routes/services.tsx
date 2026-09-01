import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, QuoteBanner, ServiceCard, ShellSection } from "../components/ps/ps-site";
import { services } from "../components/ps/ps-data";
import { SEO } from "../components/ps/SEO";

export const Route = createFileRoute("/services")({ component: ServicesPage });

function ServicesPage() {
  return (
    <main className="bg-mist">
      <SEO
        title="Taxi Services Tamil Nadu | PS Taxi Service"
        description="Explore airport transfers, railway pickups, local cabs, outstation taxis, temple tours, family travel and 24/7 cab booking."
        url="https://pstaxiservice.in/services"
      />
      <PageIntro
        eyebrow="Services · Taxi Booking Tamil Nadu"
        title="One trusted service for every kind of journey."
        copy="Book the right vehicle and the right kind of support for airport transfers, city travel, outstation drives, temple tours, business travel and family trips."
        image="temple"
      />
      <ShellSection className="pt-0">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link to="/contact" key={service.name}>
              <ServiceCard service={service} featured={index === 0} />
            </Link>
          ))}
        </div>
      </ShellSection>
      <ShellSection className="pt-0">
        <div className="rounded-2xl bg-surface p-7 ring-1 ring-ink/5 sm:p-9">
          <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-amber-2">
            How booking works
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div>
              <div className="font-mono text-2xl text-ink">01</div>
              <h2 className="mt-2 font-bold text-ink">Share your route</h2>
              <p className="mt-1 text-sm text-ink/60">
                Tell us where you are, where you are going and when you need to travel.
              </p>
            </div>
            <div>
              <div className="font-mono text-2xl text-ink">02</div>
              <h2 className="mt-2 font-bold text-ink">Choose your ride</h2>
              <p className="mt-1 text-sm text-ink/60">
                We recommend a suitable sedan, SUV, Innova or Tempo Traveller.
              </p>
            </div>
            <div>
              <div className="font-mono text-2xl text-ink">03</div>
              <h2 className="mt-2 font-bold text-ink">Travel comfortably</h2>
              <p className="mt-1 text-sm text-ink/60">
                Your driver and pickup details are confirmed before the journey.
              </p>
            </div>
          </div>
        </div>
      </ShellSection>
      <QuoteBanner />
    </main>
  );
}
