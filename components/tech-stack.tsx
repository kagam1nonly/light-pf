
import { FloatingDock } from "./ui/floating-docks";
import { LayoutGrid } from "./ui/layout-grid";
import {
  IconBrandTypescript,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTailwind,
  IconBrandPython,
  IconBrandGit,
  IconBrandJavascript,
  IconBrandDjango,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandMysql,
  IconBrandUnity,
  IconBrandCSharp,
  IconBrandCpp,
  IconBrandVscode,
} from "@tabler/icons-react";

export function TechStack() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 fade-in-5 z-[1] max-w-screen">
      <div className="md:row-span-2 flex flex-col gap-8">
        <div>
          <h2 className="text-2xl font-[var(--font-heading)] mb-8 break-words">
            Tech Stack
          </h2>
          <FloatingDock
            items={techItems}
            desktopClassName="relative ml-0"
            mobileClassName="relative mt-4"
          />
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="text-2xl font-[var(--font-heading)] mb-8 break-words">
            Certifications
          </h2>
          <LayoutGrid cards={cards} isCertification={true} />
        </div>
      </div>
    </div>
  );
}
const techItems = [
  {
    title: "Java",
    icon: (
      <img
        src="/javalogo.svg"
        alt="Java"
        className="h-full w-full object-contain"
      />
    ),
    href: "https://www.java.com/",
  },
  {
    title: "Unity",
    icon: <IconBrandUnity className="h-full w-full text-[#000000]" />,
    href: "https://unity.com/",
  },
  {
    title: "Python",
    icon: <IconBrandPython className="h-full w-full text-[#3776AB]" />,
    href: "https://www.python.org/",
  },
  {
    title: "TypeScript",
    icon: <IconBrandTypescript className="h-full w-full text-[#3178C6]" />,
    href: "https://www.typescriptlang.org/",
  },
  {
    title: "React",
    icon: <IconBrandReact className="h-full w-full text-[#61DAFB]" />,
    href: "https://react.dev/",
  },
  {
    title: "Next.js",
    icon: (
      <IconBrandNextjs className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://nextjs.org/",
  },
  {
    title: "Tailwind CSS",
    icon: <IconBrandTailwind className="h-full w-full text-[#06B6D4]" />,
    href: "https://tailwindcss.com/",
  },
  {
    title: "JavaScript",
    icon: <IconBrandJavascript className="h-full w-full text-[#F7DF1E]" />,
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    title: "Git",
    icon: <IconBrandGit className="h-full w-full text-[#F05032]" />,
    href: "https://git-scm.com/",
  },
  {
    title: "Django",
    icon: <IconBrandDjango className="h-full w-full text-[#092E20]" />,
    href: "https://www.djangoproject.com/",
  },
  {
    title: "HTML5",
    icon: <IconBrandHtml5 className="h-full w-full text-[#E34F26]" />,
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    title: "CSS3",
    icon: <IconBrandCss3 className="h-full w-full text-[#1572B6]" />,
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    title: "MySQL",
    icon: <IconBrandMysql className="h-full w-full text-[#4479A1]" />,
    href: "https://www.mysql.com/",
  },
  {
    title: "C#",
    icon: <IconBrandCSharp className="h-full w-full text-[#239120]" />,
    href: "https://dotnet.microsoft.com/languages/csharp",
  },
  {
    title: "C++",
    icon: <IconBrandCpp className="h-full w-full text-[#00599C]" />,
    href: "https://isocpp.org/",
  },
  {
    title: "VS Code",
    icon: <IconBrandVscode className="h-full w-full text-[#007ACC]" />,
    href: "https://code.visualstudio.com/",
  },
  
];

const SkeletonOne = () => {
  return <div></div>;
};

const SkeletonTwo = () => {
  return <div></div>;
};
const SkeletonThree = () => {
  return <div></div>;
};

const SkeletonFour = () => {
  return <div></div>;
};

const SkeletonFive = () => {
  return <div></div>;
};

const cards = [
  {
    id: 5,
    content: <SkeletonOne />,
    className: "col-span-1",
    thumbnail: "/topcitlogo.jpeg",
    fullImage: "/topcit.png",
  },
  {
    id: 6,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/devfestlogo.png",
    fullImage: "/devfest.png",
  },
  {
    id: 7,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/sololearnlogo2.png",
    fullImage: "/sololearn.png",
  },
  {
    id: 8,
    content: <SkeletonFour />,
    className: "col-span-1",
    thumbnail: "/geekslogo.jpg",
    fullImage: "/geeks.jpg",
  },
  {
    id: 9,
    content: <SkeletonFive />,
    className: "col-span-1",
    thumbnail: "/udemylogo.jpg",
    fullImage: "/udemy.jpg",
  },
];

export default TechStack;
