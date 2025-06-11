"use client";
import React, { JSX, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Modal } from "./modal";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
  fullImage?: string; // Optional full-size image
};

export const ProjectGrid = ({ 
  cards, 
  isCertification,
  onModalChange
}: { 
  cards: Card[]; 
  isCertification?: boolean;
  onModalChange?: (isOpen: boolean) => void;
}) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
    onModalChange?.(true);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
    onModalChange?.(false);
  };

  return (
    <>
      <div
        className={cn(
          "w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
          isCertification ? "min-h-[200px] md:min-h-[120px]" : "min-h-[250px] md:min-h-[144px]"
        )}
      >
        {cards.map((card, i) => (
          <div key={i} className={cn(card.className, "cursor-pointer w-full h-full relative min-h-[250px] md:min-h-[144px]")}>
            <motion.div
              onClick={() => handleClick(card)}
              className={cn(
                card.className,
                "relative",
                selected?.id === card.id
                  ? "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[80vh] w-[90vw] md:w-[40vw]"
: lastSelected?.id === card.id
                  ? "z-0 bg-white rounded-lg h-full w-full hover:scale-105 transition-transform duration-200"
                  : "bg-white rounded-xl h-full w-full hover:scale-105 transition-transform duration-200"
              )}
              layoutId={`card-${card.id}`}
              transition={{ duration: 0.5 }}
            >
              {selected?.id === card.id && <SelectedCard selected={selected} />}
              <ImageComponent card={card} isSelected={selected?.id === card.id} />
            </motion.div>
          </div>
        ))}
      </div>
      <Modal
        isOpen={selected !== null}
        onClose={handleOutsideClick}
        className="max-h-[100vh] w-[45vw]"
      >
        {selected && (
          <div className="relative">
            <SelectedCard selected={selected} />
            <ImageComponent card={selected} isSelected={true} />
          </div>
        )}
      </Modal>
    </>
  );
};

const ImageComponent = ({ card, isSelected }: { card: Card; isSelected: boolean }) => {
  return (
    <div className={cn(
      "relative flex items-center justify-center ",
      isSelected 
        ? "max-h-[72vh] overflow-hidden"
        : "h-full aspect-[5/3] rounded-lg border border-gray-300"
    )}>
      <div className="relative w-full h-full pt-4 ">
        <motion.img
          layoutId={`image-${card.id}-image`}
          src={isSelected ? (card.fullImage || card.thumbnail) : card.thumbnail}
          className={cn(
            "transition-all duration-200 mx-auto",
            isSelected
              ? "max-w-full max-h-[80vh] w-auto h-auto object-contain"
              : "h-[90%] w-full object-contain"
          )}
          alt="thumbnail"
        />
      </div>
    </div>
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="relative backdrop-blur-xl rounded-lg p-4">  
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};
