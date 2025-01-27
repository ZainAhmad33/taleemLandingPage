"use client";

import './HeroSection.scss'
import { AuroraBackground } from "@/LandingPage/HeroSection/AuroraBackground";
import { scrollToSection } from "@/Utilities";

export function HeroSection() {
  return (
    <AuroraBackground>
      <div
        className="relative flex flex-col gap-4 items-center justify-center px-4"
        id="heroSection"
      >
        <div className="fade-in text-3xl md:text-7xl font-bold dark:text-white text-center">
        Your Personal Tutor, Anytime, Anywhere <br/> Learning Made Smarter with TaleemAI.
        </div>
        <div className="fade-in w-[70%] font-extralight text-lg dark:text-neutral-200 py-4">
        Unlock your full potential with our intelligent chatbot tutor. Whether you’re tackling complex concepts or need help with everyday questions, our AI-powered assistant is here to guide you through every step of your learning journey, anytime you need it.
        </div>
        <div className="fade-in flex flex-col w-[70%] max-h-min items-center justify-evenly">
        <p className="fade-in font-medium font-extralight text-lg dark:text-neutral-200 py-4">Get Notified When We Launch </p>
        <button className="fade-in max-h-min bg-blue-800 text-md rounded-xl w-fit text-neutral-50 hover:text-neutral-900 dark:text-neutral-50/80 dark:hover:text-neutral-50 px-4 py-2" onClick={() => scrollToSection("waitlistSection")}>
        Sign Up Now!
        </button>
        </div>
      </div>
    </AuroraBackground>
  );
}
