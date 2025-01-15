"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "@/LandingPage/HeroSection/AuroraBackground";

export function HeroSection() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 2,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
        Your Personal Tutor, Anytime, Anywhere <br/> Learning Made Smarter with AI.
        </div>
        <div className="w-[60%] font-extralight text-lg dark:text-neutral-200 py-4">
        Unlock your full potential with our intelligent chatbot tutor. Whether you’re tackling complex concepts or need help with everyday questions, our AI-powered assistant is here to guide you through every step of your learning journey, anytime you need it.
        </div>
        <div className="flex flex-row w-[30%] max-h-min items-center justify-evenly">
        <p className="font-medium font-extralight text-lg dark:text-neutral-200 py-4">Get Notified When We Launch </p>
        <button className="max-h-min bg-black dark:bg-white text-md rounded-full w-fit text-white dark:text-black px-4 py-2">
        Sign Up Now!
        </button>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
