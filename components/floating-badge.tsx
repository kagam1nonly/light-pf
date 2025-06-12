"use client";
import React, { useState, useEffect } from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";

type Message = {
  id: number;
  message: string | React.JSX.Element;
  link?: string;
};

const messages: Message[] = [
  {
    id: 1,
    message: "Welcome! 👋",
  },
  {
    id: 2,
    message: "Let's connect! 🤝",
  },
  {
    id: 3,
    message: (
      <span className="flex items-center gap-1">
        Message Me{"  "}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22.0717 2.14317C21.7917 1.89317 21.3717 1.84917 20.9817 2.01917L2.91174 9.92917C2.50174 10.1092 2.22174 10.4892 2.15174 10.9392C2.08174 11.3892 2.33174 11.8792 2.76174 12.1192L7.81174 15.1492L16.3517 8.61917C16.7017 8.33917 17.2017 8.38917 17.4817 8.72917C17.7617 9.07917 17.7117 9.57917 17.3717 9.85917L8.83174 16.3892L11.8617 21.4392C12.0817 21.8392 12.5017 22.0792 12.9517 22.0792C13.0017 22.0792 13.0617 22.0792 13.1117 22.0692C13.6117 21.9892 14.0117 21.6592 14.1617 21.2092L22.0717 3.13917C22.2517 2.74917 22.2517 2.39917 22.0717 2.14317Z" />
        </svg>
      </span>
    ),
    link: "mailto:jamespiastro20@gmail.com"
  },
];

const profile = {
  id: 1,
  image: "/james.jpg",
};

export function FloatingBadge() {
  const [currentMessage, setCurrentMessage] = useState<Message | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [animation, setAnimation] = useState<'left' | 'right' | 'none'>('none');
  const [stopCycle, setStopCycle] = useState(false);

  useEffect(() => {
    let mounted = true;
  
    const animate = async (msg: Message, direction: 'left' | 'right') => {
      if (!mounted || isHovered) return;
      setIsVisible(false);
      await new Promise(resolve => setTimeout(resolve, 300));
      setAnimation(direction);
      setCurrentMessage(msg);
      setIsVisible(true);
      await new Promise(resolve => setTimeout(resolve, 300));
      setAnimation('none');
    };
  
    const showMessages = async () => {
      if (!mounted || stopCycle) return;
  
      await animate(messages[0], 'right');
      await delayOrBreak(4500);
      if (shouldStop()) return;
  
      await delayOrBreak(5500);
      if (shouldStop()) return;
  
      await animate(messages[1], 'left');
      await delayOrBreak(4500);
      if (shouldStop()) return;
  
      await delayOrBreak(5500);
      if (shouldStop()) return;
  
      await animate(messages[2], 'right');
      await new Promise(resolve => setTimeout(resolve, 500));
  
      if (mounted) {
        setStopCycle(true);
        setCurrentMessage(messages[2]);
        setIsVisible(true);
      }
    };
  
    const delayOrBreak = async (ms: number) => {
      for (let i = 0; i < ms / 200; i++) {
        if (!mounted || isHovered || stopCycle) return;
        await new Promise(resolve => setTimeout(resolve, 200));
      }
    };
  
    const shouldStop = () => !mounted || isHovered || stopCycle;
  
    const timeoutId = setTimeout(showMessages, 3000);
  
    return () => {
      mounted = false;
      clearTimeout(timeoutId);
    };
  }, [isHovered, stopCycle]);

  // Update hover effect to not override the message if cycle is stopped
  useEffect(() => {
    if (isHovered && !stopCycle) {
      setAnimation('right');
      setCurrentMessage(messages[2]);
      setIsVisible(true);
      setStopCycle(true);
    }
  }, [isHovered, stopCycle]);

  const handleClick = () => {
    if (currentMessage?.link) {
      window.location.href = currentMessage.link;
    }
  };

  return (
    <div 
      className="fixed bottom-0 right-0 w-46 h-46 flex items-end justify-end z-[100]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`
          relative mb-4 mr-4 transition-all duration-300 transform
          ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
          ${animation === 'right' ? 'translate-x-2' : animation === 'left' ? '-translate-x-2' : 'translate-x-0'}
        `}
        onClick={handleClick}
      >
        <AnimatedTooltip message={currentMessage} profile={profile} />
      </div>
    </div>
  );
}
