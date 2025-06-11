/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import {
  motion,
  useTransform,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "motion/react";

type Message = {
  id: number;
  message: string | React.JSX.Element;
  link?: string;
};

type AnimatedTooltipProps = {
  message: Message | null;
  profile: {
    id: number;
    image: string;
  };
};

export function AnimatedTooltip({ message, profile }: AnimatedTooltipProps) {
  const springConfig = { stiffness: 300, damping: 15 };
  const x = useMotionValue(0);
  const rotate = useSpring(
    useTransform(x, [-50, 50], [0, 0]),
    springConfig,
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-20, 20]),
    springConfig,
  );

  return (
    <>
      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ 
              duration: 0.3,
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
            style={{
              translateX: translateX,
              rotate: rotate,
              whiteSpace: "normal",
            }}
            className="-top-12 right-5 z-50 flex absolute w-[150px] flex-col items-center justify-center rounded-lg bg-gradient-to-br from-black to-gray-800 px-4 py-2.5 text-xs shadow-xl"
          >
            <div className="absolute -bottom-1 right-5 h-2.5 w-2.5 -translate-x-1/2 rotate-45 bg-gray-800" />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/10 to-transparent opacity-10" />
            <div className={`relative z-30 text-sm font-bold text-white text-center ${
              message.link ? "cursor-pointer hover:text-emerald-300 transition-colors" : ""
            }`}>
              {message.message}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <img
        src={profile.image}
        alt="Profile"
        className="relative !m-0 h-16 w-16 rounded-full border-2 border-white/50 object-cover object-top !p-0 shadow-xl hover:border-white/80 transition-all duration-300 hover:shadow-emerald-500/20"
      />
    </>
  );
}
