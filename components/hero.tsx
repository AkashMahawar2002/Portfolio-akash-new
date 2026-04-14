import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { MagicButton } from "@/components/ui/magic-button";
import { links } from "@/config";

export const Hero = () => {
  return (
    <section id="about" className="relative overflow-hidden pb-10 pt-24 md:pb-12 md:pt-28">
      <div>
        <Spotlight
          className="-left-24 -top-44 h-screen opacity-80 md:-left-32 md:-top-20"
          fill="white"
        />
      </div>

      <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white bg-grid-black/[0.12] dark:bg-black-100 dark:bg-grid-white/[0.02]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
      </div>

      <div className="relative z-10 my-8 flex justify-center md:my-10">
        <div className="flex max-w-[90vw] flex-col items-center justify-center md:max-w-3xl lg:max-w-[70vw]">
          <h2 className="max-w-80 text-center text-xs uppercase tracking-[0.3em] text-white-100">
            Product-Focused Software Engineer
          </h2>

          <TextGenerateEffect
            className="text-center text-[32px] md:text-5xl lg:text-6xl"
            words="Building polished web products that deliver measurable business impact"
          />

          <p className="mb-4 mt-1 max-w-2xl text-center text-base leading-relaxed text-white-100 md:text-lg md:tracking-wide">
            Hi, I&apos;m <span className="name-mark name-reveal">{links.ownerName}</span>. I build reliable,
            high-performance web experiences using Next.js, TypeScript, and AWS.
          </p>

          <Link href="#projects" className="md:mt-4">
            <MagicButton
              title="View Case Studies"
              icon={<FaLocationArrow />}
              position="right"
              asChild
            />
          </Link>

          <div className="mt-6 grid w-full grid-cols-1 gap-2 md:grid-cols-3">
            <div className="rounded-2xl border border-white/[0.1] bg-neutral-panel px-4 py-2.5 text-center">
              <p className="text-xl font-semibold text-brand">15+</p>
              <p className="text-xs uppercase tracking-wider text-white-100">Production Pages Shipped</p>
            </div>
            <div className="rounded-2xl border border-white/[0.1] bg-neutral-panel px-4 py-2.5 text-center">
              <p className="text-xl font-semibold text-brand">Top 6/154</p>
              <p className="text-xs uppercase tracking-wider text-white-100">Hackathon Placement</p>
            </div>
            <div className="rounded-2xl border border-white/[0.1] bg-neutral-panel px-4 py-2.5 text-center">
              <p className="text-xl font-semibold text-brand">40</p>
              <p className="text-xs uppercase tracking-wider text-white-100">Google Cloud + GenAI Badges</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
