import type { Metadata } from "next";

export const links = {
  sourceCode: "https://github.com/AkashMahawar2002",
  ownerName: "Akash Mahawar",
  ownerEmail: "akash637598@gmail.com",
} as const;

export const web3FormsAccessKey = "ac665d78-26d2-4447-a927-d6f59c9716e6";

export const siteConfig: Metadata = {
  title: `${links.ownerName}'s Portfolio | Software Development Engineer`,
  description: "Portfolio of Akash Mahawar, a Software Development Engineer specializing in Next.js, React, Java, and AWS.",
  keywords: [
    "akash mahawar",
    "software development engineer",
    "sde",
    "reactjs",
    "nextjs",
    "java",
    "c++",
    "aws",
    "tailwindcss",
    "portfolio",
    "frontend developer",
    "fullstack developer",
    "javascript",
    "typescript",
  ] as Array<string>,
  authors: {
    name: links.ownerName,
    url: "https://github.com/AkashMahawar2002",
  },
} as const;
