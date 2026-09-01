import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Clock3, ShieldCheck } from "lucide-react";
import {
  BookingForm,
  DestinationGrid,
  FleetCard,
  HeroImage,
  QuoteBanner,
  SectionHeading,
  ServiceCard,
  ShellSection,
  TrustFeatures,
  TrustStrip,
} from "../components/ps/ps-site";
import { fleet, services } from "../components/ps/ps-data";
import { SEO } from "../components/ps/SEO";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <main className="bg-mist text-ink">
      <SEO
        title="Tamil Nadu Taxi Booking | PS Taxi Service"
        description="Book safe, comfortable and affordable taxi service across Tamil Nadu with PS Taxi Service. Airport transfers, outstation rides and tours, 24/7."
        url="https://pstaxiservice.in/"
      />
      <section className="relative">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-start gap-5 px-5 pb-8 pt-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="rise-in inline-flex items-center gap-2 rounded-full bg-amber/15 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-amber-2">
              <span className="size-1.5 rounded-full bg-amber" />
              Airport arrivals, freshly detailed
            </div>
            <h1 className="rise-in mt-5 max-w-[16ch] text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl lg:text-[3.5rem]">
              Tamil Nadu's trusted taxi, booked in one glance.
            </h1>
            <p className="rise-in mt-4 max-w-[46ch] text-[15px] leading-relaxed text-ink/65">
              Safe, comfortable and affordable cabs across Chennai, Madurai, Ooty and every temple
              town in between — with live availability and instant quotes.
            </p>
            <div className="rise-in mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[12px] text-ink/55">
              <span className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-amber" />
                24/7 availability
              </span>
              <span className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-amber" />
                Verified drivers
              </span>
              <span className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-amber" />
                Instant booking
              </span>
            </div>
            <HeroImage />
          </div>
          <div className="rise-in lg:col-span-5 lg:pt-16">
            <BookingForm />
          </div>
        </div>
      </section>
      <TrustStrip />
      <ShellSection>
        <SectionHeading
          eyebrow="(a) · Services"
          title="Every journey, one tap away"
          link={{ label: "View all 9 services", to: "/services" }}
        />
        <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          <Link to="/services" className="lg:col-span-3">
            <ServiceCard service={services[0]} featured />
          </Link>
          <Link to="/tours" className="lg:col-span-3">
            <ServiceCard service={services[4]} />
          </Link>
          <Link to="/tours" className="lg:col-span-2">
            <ServiceCard service={services[5]} />
          </Link>
          <Link to="/chennai-outstation" className="lg:col-span-2">
            <ServiceCard service={services[3]} />
          </Link>
          <Link to="/services" className="lg:col-span-2">
            <ServiceCard service={services[1]} />
          </Link>
        </div>
      </ShellSection>
      <section className="border-y border-hairline bg-surface">
        <ShellSection>
          <SectionHeading
            eyebrow="(b) · Fleet"
            title="Choose your ride"
            link={{ label: "View all vehicles", to: "/fleet" }}
          />
          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {fleet.map((item) => (
              <FleetCard item={item} key={item.name} />
            ))}
          </div>
        </ShellSection>
      </section>
      <ShellSection>
        <div className="grid items-center gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="(c) · Coverage" title="From Chennai to Kanyakumari" />
            <p className="mt-3 max-w-[40ch] text-[15px] text-ink/60">
              One trusted cab across every district — coastal, hill-station and temple towns.
            </p>
            <Link
              to="/destinations"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-amber px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-amber-2"
            >
              See all destinations <ArrowRight size={15} />
            </Link>
          </div>
          <div className="lg:col-span-7">
            <DestinationGrid />
          </div>
        </div>
      </ShellSection>
      <ShellSection className="pt-0">
        <div className="grid gap-5 rounded-2xl bg-ink p-7 text-surface sm:grid-cols-3 sm:p-9">
          <div className="sm:col-span-2">
            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-amber">
              Why choose PS Taxi Service
            </div>
            <h2 className="mt-3 max-w-[17ch] text-3xl font-extrabold tracking-tight sm:text-4xl">
              A better ride starts before you get in.
            </h2>
            <p className="mt-3 max-w-[48ch] text-surface/70">
              Clear communication, clean vehicles and thoughtful drivers — built around the way
              Tamil Nadu actually travels.
            </p>
          </div>
          <div className="grid gap-3 self-end text-sm text-surface/80">
            <span className="flex items-center gap-2">
              <Clock3 size={16} className="text-amber" /> On-time pickup planning
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-amber" /> Safety-first service
            </span>
            <span className="flex items-center gap-2">
              <Check size={16} className="text-amber" /> Transparent quote before booking
            </span>
          </div>
        </div>
      </ShellSection>
      <QuoteBanner />
    </main>
  );
}
