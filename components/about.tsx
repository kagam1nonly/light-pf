"use client";
import React, { useState, useRef, useEffect } from "react";
import { Modal } from "./ui/modal";

export const About = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [truncatedCards, setTruncatedCards] = useState<boolean[]>([false, false, false, false]);
  const contentRefs = [useRef<HTMLParagraphElement>(null), useRef<HTMLParagraphElement>(null), useRef<HTMLParagraphElement>(null), useRef<HTMLParagraphElement>(null)];

  const checkTruncation = React.useCallback(() => {
    const newTruncatedState = contentRefs.map(ref => {
      if (ref.current) {
        return ref.current.scrollHeight > ref.current.clientHeight;
      }
      return false;
    });
    
    // Only update state if values have changed
    if (JSON.stringify(newTruncatedState) !== JSON.stringify(truncatedCards)) {
      setTruncatedCards(newTruncatedState);
    }
  }, [truncatedCards]);

  useEffect(() => {
    checkTruncation();
    window.addEventListener('resize', checkTruncation);
    return () => window.removeEventListener('resize', checkTruncation);
  }, [checkTruncation]);

  return (
    <div className={`relative ${selectedCard !== null ? 'z-99' : 'z-0'}`}>
      <div className="flex flex-col mb-20 opacity-0 fade-in-3">
        <h2 className="text-2xl font-[var(--font-heading)] mb-8">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              onClick={() => setSelectedCard(index)}
              className="group rounded-lg p-6 h-[240px] relative border border-gray-300 overflow-hidden cursor-pointer hover:shadow-[0_0_15px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-lg font-semibold mb-3 truncate">
                {["Who I Am", "Freelancer & Creative Support", "Problem Solver at Heart", "Future-Ready Explorer"][index]}
              </div>
              <p
                ref={contentRefs[index]}
                className="text-sm text-gray-600 overflow-hidden line-clamp-6"
              >
                {index === 0 && "Tech enthusiast from the Philippines with a passion for crafting sleek, scalable applications. Currently studying IT at Holy Cross of Davao College. Driven by curiosity, problem-solving, and making cool things that work."}
                {index === 1 && "Helped multiple clients grow their presence and streamline their workflow. Experience in: Social Media Management, Virtual Assistance & Outreach, Acquisition & Lead Generation, Graphic Design (Canva) & Video Editing (CapCut)"}
                {index === 2 && "Skilled in Core Java, PostgreSQL, React Native, and building RESTful APIs. Regularly practice Data Structures & Algorithms to sharpen logic. I build with performance, readability, and user experience in mind."}
                {index === 3 && "Learning AI and Web3 as side quests. Curious about how tech shapes people&apos;s lives. Exploring machine learning frameworks and blockchain development to stay ahead of emerging technologies. Building projects with OpenAI and smart contracts."}
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white"></div>
              {truncatedCards[index] && (
                <button className="absolute bottom-3 left-6 text-sm text-blue-500 hover:text-blue-400 cursor-pointer transition-colors">
                  Read More →
                </button>
              )}
            </div>
          ))}
        </div>

        <Modal
          isOpen={selectedCard !== null}
          onClose={() => setSelectedCard(null)}
          className="bg-white p-8 rounded-lg max-w-2xl m-4 shadow-2xl"
        >
          {/* Modal content based on selectedCard */}
          {selectedCard === 0 && (
            <>
              <div className="text-lg font-semibold mb-3 truncate-4">
                Who I Am
              </div>
              <p className="text-sm text-gray-600">
                Tech enthusiast from the Philippines with a passion for crafting
                sleek, scalable applications. Currently studying IT at Holy
                Cross of Davao College. Driven by curiosity, problem-solving,
                and making cool things that work.
              </p>
            </>
          )}
          {selectedCard === 1 && (
            <>
              <div className="text-lg font-semibold mb-3 truncate-4">
                Freelancer & Creative Support
              </div>
              <p className="text-sm text-gray-600">
                Helped multiple clients grow their presence and streamline their
                workflow. Experience in: Social Media Management, Virtual
                Assistance & Outreach, Acquisition & Lead Generation, Graphic
                Design (Canva) & Video Editing (CapCut)
              </p>
            </>
          )}
          {selectedCard === 2 && (
            <>
              <div className="text-lg font-semibold mb-3 truncate">
                Problem Solver at Heart
              </div>
              <p className="text-sm text-gray-600">
                Skilled in Core Java, PostgreSQL, React Native, and building
                RESTful APIs. Regularly practice Data Structures & Algorithms to
                sharpen logic. I build with performance, readability, and user
                experience in mind.
              </p>
            </>
          )}
          {selectedCard === 3 && (
            <>
              <div className="text-lg font-semibold mb-3 truncate">
                Future-Ready Explorer
              </div>
              <p className="text-sm text-gray-600">
                Learning AI and Web3 as side quests. Curious about how tech
                shapes people&apos;s lives. Exploring machine learning frameworks and
                blockchain development to stay ahead of emerging technologies.
                Building projects with OpenAI and smart contracts.
              </p>
            </>
          )}
          <button
            onClick={() => setSelectedCard(null)}
            className="mt-4 text-sm text-gray-500 cursor-pointer rounded-md transition-all duration-200"
          >
            Close
          </button>
        </Modal>
      </div>
    </div>
  );
};

export default About;
