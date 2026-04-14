import Image from "next/image";
import Link from "next/link";
import { FaRegFileLines } from "react-icons/fa6";

import { socialMedia } from "@/data";

export const TopSocials = () => {
  return (
    <div className="fixed right-6 top-6 z-[6000] hidden items-center gap-3 md:flex">
      {socialMedia.map((profile) => (
        <Link
          key={profile.name}
          href={profile.link}
          target="_blank"
          rel="noreferrer noopener"
          className="saturate-180 flex size-10 items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 backdrop-blur-lg backdrop-filter"
          title={profile.name}
        >
          {profile.name === "Resume" ? (
            <FaRegFileLines className="h-5 w-5 text-white" aria-hidden="true" />
          ) : (
            <Image
              src={profile.img}
              alt={`profile-${profile.name}`}
              width={20}
              height={20}
            />
          )}
        </Link>
      ))}
    </div>
  );
};
