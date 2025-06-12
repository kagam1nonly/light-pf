"use client";
import React, { JSX, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
  fullImage?: string; // Optional full-size image
};

export const LayoutGrid = ({ cards, isCertification }: { cards: Card[]; isCertification?: boolean }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <>
      <div
        className={cn(
          "w-auto grid auto-rows-[120px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative",
          "sm:auto-rows-[125px] md:auto-rows-[100px] lg:auto-rows-[144px]",
          isCertification ? "min-h-[100px]" : "min-h-[144px]"
        )}
      >
        {cards.map((card, i) => (
          <div key={i} className={cn(card.className, "cursor-pointer aspect-[2/3] w-full h-full")}>
            <motion.div
              onClick={() => handleClick(card)}
              className={cn(
                card.className,
                "relative items-center justify-center ",
                selected?.id === card.id
                  ? "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[80vh] [&:has(img[style*='aspect-ratio:1/1'])]:w-[25vw] [&:has(img[style*='aspect-ratio:<1'])]:w-[22vw] [&:has(img[style*='aspect-ratio:>1'])]:w-[35vw] z-[9999]"
                  : lastSelected?.id === card.id
                  ? "z-0 rounded-lg border border-gray-300 h-full w-full hover:scale-105 transition-transform duration-200"
                  : "rounded-lg border border-gray-300 h-full w-full hover:scale-105 transition-transform duration-200"
              )}
              layoutId={`card-${card.id}`}
            >
              {selected?.id === card.id && <SelectedCard selected={selected} />}
              <ImageComponent card={card} isSelected={selected?.id === card.id} />
            </motion.div>
          </div>
        ))}
      </div>
      {selected && (
        <motion.div
          onClick={handleOutsideClick}
          className="fixed inset-0 bg-black/80 z-[999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </>
  );
};

const ImageComponent = ({ card, isSelected }: { card: Card; isSelected: boolean }) => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className={cn(
        "relative",
        isSelected
          ? "w-full h-full max-h-[70vh] flex items-center justify-center"
          : "w-[95%] h-[90%] flex items-center justify-center"
      )}>
        <motion.img
          layoutId={`image-${card.id}-image`}
          src={isSelected ? (card.fullImage || card.thumbnail) : card.thumbnail}
          className={cn(
            "transition-all duration-200",
            isSelected
              ? "max-w-full max-h-[80vh] w-auto h-auto object-contain"
              : "w-full h-full object-cover"
          )}
          alt="Certificate"
        />
      </div>
    </div>
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div>
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className=""
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};
