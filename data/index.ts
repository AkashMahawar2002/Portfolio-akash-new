import { links } from "@/config";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#get-in-touch" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "Ziostech Solutions Portfolio",
    des: "Built the official portfolio using Next.js and Tailwind CSS with reusable components across 15+ pages.",
    img: "/project1.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://www.ziostechsolutions.com/",
    sourceCode: "https://github.com/SinghAdii/Z.S.M",
    caseStudy: {
      problem: "Marketing pages were inconsistent and difficult to scale across service verticals.",
      role: "Owned frontend architecture and reusable component system.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS"],
      result: "Delivered 15+ reusable pages with faster shipping cadence for business updates.",
    },
  },
  {
    id: 2,
    title: "Ekta Janch Kendra",
    des: "Diagnostic platform deployed via AWS S3 + CloudFront, improving load speed by ~40%.",
    img: "/project2.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/c.svg"],
    link: "https://github.com/akash-mahawar",
    sourceCode: "https://github.com/akash-mahawar",
    caseStudy: {
      problem: "The diagnostic portal had slow first-load performance for patients.",
      role: "Built and deployed frontend on cloud static infrastructure.",
      stack: ["React", "AWS S3", "CloudFront", "JavaScript"],
      result: "Improved page load speed by about 40% and made updates easier to release.",
    },
  },
  {
    id: 3,
    title: "Narayan Energy Platform",
    des: "Integrated AWS Lambda & SES APIs for serverless form handling with 99% email delivery success.",
    img: "/project3.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/c.svg"],
    link: "https://www.narayanenergy.in/",
    sourceCode: "https://github.com/SinghAdii/Narayan-Energy-",
    caseStudy: {
      problem: "Lead capture and form response flow required manual follow-ups.",
      role: "Integrated serverless APIs for contact and notification workflows.",
      stack: ["Next.js", "AWS Lambda", "SES", "TypeScript"],
      result: "Achieved reliable automated email workflows with high delivery success.",
    },
  },
  {
    id: 4,
    title: "IPO Web Application",
    des: "Co-led a team of 10 in developing an IPO web application with RESTful APIs, improving data retrieval speed by 40%.",
    img: "/p4.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/c.svg"],
    link: "https://github.com/akash-mahawar",
    sourceCode: "https://github.com/akash-mahawar",
    caseStudy: {
      problem: "IPO data retrieval and UI responsiveness were bottlenecks for the team.",
      role: "Co-led a 10-member engineering team and shipped API-powered features.",
      stack: ["React", "TypeScript", "REST APIs"],
      result: "Improved retrieval speed by 40% and delivered production-ready features faster.",
    },
  },
] as const;

export const testimonials = [
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
] as const;

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "Software Development Engineer Intern",
    desc: "Ziostech Solutions. Developed and deployed web applications using Next.js and Tailwind CSS, improving UI consistency.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Development Engineer Intern",
    desc: "BlueStock FinTech. Co-led a team of 10 developing an IPO web application, improving data retrieval speed by 40%.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Cloud & Gen AI Certification",
    desc: "Google Cloud Computing Foundation and Generative AI (40 Badges), mastering modern cloud architectures.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Hackathon Top Performer",
    desc: "Top 6 out of 154 teams in Be SDE Ready 1.0 Hackathon and 1st PRIZE in Campus Technical fest AADHAR.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
] as const;

export const socialMedia = [
  {
    name: "Resume",
    img: "/profile.svg",
    link: "https://drive.google.com/file/d/1OnPc5DWWwFCZdKYL8LUoyE13emej59di/view?usp=sharing",
  },
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/AkashMahawar2002",
  },
  {
    name: "Twitter",
    img: "/twit.svg",
    link: "https://x.com/akashmahawar001",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/akash-mahawar-09842b25a/",
  },
] as const;

export const techStack = {
  stack1: ["React.js", "Next.js", "Java"],
  stack2: ["AWS", "MySQL", "C++"],
} as const;

export const codingProfiles = [
  {
    id: 1,
    title: "LeetCode",
    desc: "Solved various strict algorithmic and data structure problems.",
    link: "https://leetcode.com/u/akashmahawar20/",
    icon: "leetcode",
  },
  {
    id: 2,
    title: "GeeksforGeeks",
    desc: "Consistent competitive programming and core concepts mastery.",
    link: "https://www.geeksforgeeks.org/profile/akashmahawar19",
    icon: "gfg",
  },
  {
    id: 3,
    title: "Codeforces",
    desc: "Participated in global level competitive programming contests.",
    link: "https://codeforces.com/profile/AkashMahawar20",
    icon: "codeforces",
  },
] as const;
