import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageIntro, QuoteBanner, ShellSection } from "../components/ps/ps-site";
import { blogPosts } from "../components/ps/ps-data";
import { SEO } from "../components/ps/SEO";

export const Route = createFileRoute("/blog")({ component: BlogPage });

function BlogPage() {
  return (
    <main className="bg-mist">
      <SEO
        title="Tamil Nadu Taxi Travel Guide | PS Taxi Blog"
        description="Read practical guides for airport taxi booking, temple tours, outstation travel and family journeys across Tamil Nadu."
        url="https://pstaxiservice.in/blog"
      />
      <PageIntro
        eyebrow="Travel Journal · Practical Guides"
        title="Useful notes for better journeys."
        copy="Simple, grounded advice for booking taxis, planning temple routes, traveling with family and making long drives across Tamil Nadu more comfortable."
      />
      <ShellSection className="pt-0">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <article
              key={post.title}
              className={`flex min-h-[250px] flex-col rounded-xl p-6 ring-1 ring-ink/5 ${index === 0 ? "bg-ink text-surface" : "bg-surface text-ink"}`}
            >
              <div
                className={`font-mono text-[11px] uppercase tracking-[0.16em] ${index === 0 ? "text-amber" : "text-amber-2"}`}
              >
                {post.category}
              </div>
              <h2 className="mt-6 text-xl font-bold leading-tight tracking-tight">{post.title}</h2>
              <p
                className={`mt-3 text-sm leading-relaxed ${index === 0 ? "text-surface/65" : "text-ink/60"}`}
              >
                {post.copy}
              </p>
              <div className="mt-auto flex items-center justify-between pt-6">
                <span
                  className={`font-mono text-[11px] ${index === 0 ? "text-surface/45" : "text-ink/45"}`}
                >
                  {post.date}
                </span>
                <a
                  href="tel:6380886330"
                  className={`text-sm font-semibold ${index === 0 ? "text-amber" : "text-ink"}`}
                >
                  Ask us <ArrowRight className="inline" size={14} />
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
