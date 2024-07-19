"use client";

import Hero from "@/components/Hero";
import { motion, Variants } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import CardOne from "/public/card1.avif";
import CardTwo from "/public/card2.avif";
interface Props {
  image: StaticImageData;
  hueA: number;
  hueB: number;
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

function Card({ image, hueA, hueB }: Props) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="splash" style={{ background }} />
      <motion.div className="card" variants={cardVariants}>
        <Image src={image} alt="image" />
      </motion.div>
    </motion.div>
  );
}

const food: [StaticImageData, number, number][] = [
  [CardOne, 340, 10],
  [CardTwo, 20, 40],
  [CardOne, 60, 90],
  [CardOne, 80, 120],
  [CardTwo, 100, 140],
  [CardOne, 205, 245],
  [CardTwo, 260, 290],
  [CardOne, 290, 320],
];

export default function App() {
  return (
    <>
      <Hero />
      <div className="max-w-xl mx-auto">
        {" "}
        {food.map(([image, hueA, hueB]) => (
          <Card image={image} hueA={hueA} hueB={hueB} key={hueB} />
        ))}
      </div>
    </>
  );
}
