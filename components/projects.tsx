import { ProjectGrid } from "./ui/projects-grid";
import { useState } from "react";

export function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={`relati vz[1]e ${isModalOpen ? "z-10" : "z-0"}`}>
      <div className="flex flex-col mb-20 fade-in-3">
        <h2 className="text-2xl font-[var(--font-heading)] mb-8">Projects</h2>
        <div className="relative z-0">
          <ProjectGrid cards={cards} onModalChange={setIsModalOpen} />
        </div>
      </div>
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Huyohoy Silogan Online Ordering System
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A web-based food ordering system built with Django, MySQL, and JavaScript. Features include real-time order tracking, user authentication, and a responsive design using HTML/CSS.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        GoFit Fitness Tracker
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A comprehensive fitness tracking application built with React and Django. Features a Python-powered backend for workout analytics, user progress tracking, and a responsive JavaScript frontend.
      </p>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Weather App
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A weather application built with React and OpenWeatherMap API. Features include real-time weather updates, location search, and a responsive design.
      </p>
    </div>
  );
}

const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Expense Tracker
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A mobile application for tracking expenses, built with React Native and Firebase. Features include real-time expense tracking, budget management, and a user-friendly interface.
      </p>
    </div>
  );
}


const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-1",
    thumbnail:
      "huyuhoylogo.png",
    fullImage:
      "huyuhoy.png",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "gofitlogo.jpg",
    fullImage:
      "gofit.png",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "weatherapp.png",
    fullImage:
      "weatherapp.png",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "col-span-1",
    thumbnail:
      "expensetracker.png",
    fullImage:
      "expensetracker.png",
  },
];

export default Projects;
