import { createFileRoute } from "@tanstack/react-router";
import { Accordion, QuoteBanner, ShellSection } from "../components/ps/ps-site";
import { faqs } from "../components/ps/ps-data";
import { SEO } from "../components/ps/SEO";

export const Route = createFileRoute("/faq")({ component: FAQPage });

function FAQPage() {
  return (
    <main className="bg-mist">
      <SEO
        title="Taxi Booking FAQ | PS Taxi Service Tamil Nadu"
        description="Answers to common PS Taxi Service questions about booking, fares, safety, vehicle availability and taxi tours."
        url="https://pstaxiservice.in/faq"
      />
      <section className="bg-ink text-surface">
        <div className="mx-auto max-w-[1240px] px-5 py-14 sm:py-20">
          <h1 className="text-4xl font-bold">Clear answers before you book.</h1>
          <p className="mt-4 text-lg">
            Everything you need to know about taxi booking, pricing, safety, vehicles and travel
            planning with PS Taxi Service.
          </p>
        </div>
      </section>
      <ShellSection className="pt-0">
        <div className="mx-auto max-w-3xl rounded-xl bg-surface px-5 ring-1 ring-ink/5">
          {faqs.map(([question, answer]) => (
            <Accordion key={question} question={question} answer={answer} />
          ))}
        </div>
      </ShellSection>
      <QuoteBanner />
    </main>
  );
}
