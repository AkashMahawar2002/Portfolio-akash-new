import Image from "next/image";
import Link from "next/link";
import { FaArrowUpRightFromSquare, FaCode } from "react-icons/fa6";

import { projects } from "@/data";

export const RecentProjects = () => {
  return (
    <section id="projects" className="section-wrap">
      <h1 className="heading">
        Project <span className="text-brand">Case Studies</span>
      </h1>
      <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-white-100 md:text-base">
        Each project highlights the business challenge, my execution role, the stack used,
        and measurable outcomes.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {projects.map(
          ({ id, des, iconLists, img, link, sourceCode, title, caseStudy }) => (
            <div
              key={id}
              className="group rounded-3xl border border-white/[0.1] bg-neutral-panel p-6 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.7)] transition-all duration-300 hover:-translate-y-1 hover:border-brand"
            >
              <div className="relative h-56 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d122b]">
                <Image
                  fill
                  src={img}
                  alt={title}
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04071D] via-transparent to-transparent" />
              </div>

              <div className="mt-5">
                <h2 className="text-2xl font-semibold text-white">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-white-100 md:text-base">
                  {des}
                </p>
              </div>

              <div className="mt-5 grid gap-3">
                <div className="rounded-xl border border-white/[0.08] bg-[#0f1532] p-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand">Problem</p>
                  <p className="mt-1 text-sm text-white-100">{caseStudy.problem}</p>
                </div>

                <div className="rounded-xl border border-white/[0.08] bg-[#0f1532] p-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand">My Role</p>
                  <p className="mt-1 text-sm text-white-100">{caseStudy.role}</p>
                </div>

                <div className="rounded-xl border border-white/[0.08] bg-[#0f1532] p-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand">Stack</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {caseStudy.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/[0.12] bg-[#1a2147] px-3 py-1 text-xs text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-white/[0.08] bg-[#0f1532] p-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand">Result</p>
                  <p className="mt-1 text-sm text-white">{caseStudy.result}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                  {iconLists.map((icon, i) => (
                    <div
                      key={icon}
                      className="-ml-2 flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.2] bg-black"
                      style={{
                        marginLeft: i === 0 ? "0" : "-10px",
                      }}
                    >
                      <Image
                        height={36}
                        width={36}
                        src={icon}
                        alt={icon}
                        className="p-2"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-sm">
                  <Link
                    href={link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 text-brand transition-colors hover:text-white"
                  >
                    Live
                    <FaArrowUpRightFromSquare size={12} />
                  </Link>
                  <Link
                    href={sourceCode}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 text-white-100 transition-colors hover:text-white"
                  >
                    Code
                    <FaCode size={12} />
                  </Link>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};
