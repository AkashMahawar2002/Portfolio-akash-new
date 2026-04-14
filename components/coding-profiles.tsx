import { SiLeetcode, SiGeeksforgeeks, SiCodeforces } from "react-icons/si";
import { FaCode } from "react-icons/fa6";

import { Button } from "@/components/ui/moving-borders";
import { codingProfiles } from "@/data";

export const CodingProfiles = () => {
  return (
    <section id="coding-profiles" className="py-20">
      <h1 className="heading">
        My <span className="text-purple">Coding Profiles</span>
      </h1>

      <div className="mt-12 grid w-full grid-cols-1 gap-10 md:grid-cols-3">
        {codingProfiles.map((profile) => {
          return (
            <Button
              key={profile.id}
              as="a"
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              borderRadius="1.75rem"
              containerClassName="md:col-span-1 hover:scale-[1.02] transition-transform duration-300"
              className="flex flex-1 border-neutral-200 text-white dark:border-slate-800"
              duration={Math.floor(Math.random() * 10000 + 10000)}
            >
              <div className="flex flex-col gap-4 p-5 md:p-8 lg:p-10 w-full h-full items-center lg:items-start text-center lg:text-left">
                {profile.icon === "leetcode" ? (
                  <SiLeetcode className="h-16 w-16 flex-shrink-0 text-purple md:h-20 md:w-20 lg:mb-2" />
                ) : profile.icon === "gfg" ? (
                  <SiGeeksforgeeks className="h-16 w-16 flex-shrink-0 text-purple md:h-20 md:w-20 lg:mb-2" />
                ) : profile.icon === "codeforces" ? (
                  <SiCodeforces className="h-16 w-16 flex-shrink-0 text-purple md:h-20 md:w-20 lg:mb-2" />
                ) : (
                  <FaCode className="h-16 w-16 flex-shrink-0 text-purple md:h-20 md:w-20 lg:mb-2" />
                )}

                <div>
                  <h1 className="text-xl font-bold md:text-2xl">
                    {profile.title}
                  </h1>
                  <p className="mt-3 font-semibold text-white-100 line-clamp-3">
                    {profile.desc}
                  </p>
                </div>
              </div>
            </Button>
          );
        })}
      </div>
    </section>
  );
};
