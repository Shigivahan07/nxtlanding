"use client";
import React, { useState } from "react";
import { Spotlight } from "./components/Spotlight";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { BackgroundBeams } from "./components/background-beams";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./components/text-reveal-card";
import { AnimatedTooltip } from "./components/animated-tooltip";
import { FloatingNav } from "./components/floating-navbar";

const people = [
  {
    id: 1,
    name: "Shigivahan A",
    designation: "Backend Developer",
    image:""  
  },
  {
    id: 2,
    name: "Charan Vivek Raj R",
    designation: "Tax Expert",
    image:""  
  },
  {
    id: 3,
    name: "Jaianandakrishnaa K",
    designation: "Front End Developer",
    image:""  
  },
  {
    id: 4,
    name: "",
    designation: "Software Developer",
    image:""  
  }
];

export default function Pages() {
  return (
    <>
      <div className="relative w-full">
        <FloatingNavDemo />
      </div>
      <SpotlightPreview id="homeSection"/>
      <div className="flex items-center justify-center bg-[#0E0E10] h-[40rem] rounded-2xl w-full" id="aboutSection">
        <TextRevealCard text="Calculate Your Taxes with Ease" revealText="Get Accurate Results Instantly">
          <TextRevealCardTitle>Simplify Your Tax Calculations</TextRevealCardTitle>
          <TextRevealCardDescription>Our tax calculator provides quick and accurate results, helping you understand your tax obligations with ease.</TextRevealCardDescription>
        </TextRevealCard>
      </div>
      <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased" id="contactSection">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Get Notified When Our Tax Calculator App Launches!
          </h1>
          <p></p>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            Be the first to know when our revolutionary tax calculator app hits
            the market! Say goodbye to complicated tax calculations and hello to
            simplicity and accuracy. Sign up now and stay informed about the
            latest updates, features, and exclusive offers.
          </p>
          <input
            type="text"
            placeholder="abc@gmail.com"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
          />
        </div>
        <BackgroundBeams />
      </div>
      <BackgroundBeams />
      <div className="flex flex-row items-center justify-center mb-10 w-full">
        <AnimatedTooltip items={people} />
      </div>
    </>
  );
}

const FloatingNavDemo = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <FloatingNav navItems={navItems} />
  );
};

const SpotlightPreview = () => {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <div className="p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Simplify Your Tax Calculations.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Take the stress out of tax season with our easy-to-use tax calculator. Whether you are an individual filer or a small business owner, our calculator provides quick and accurate results, helping you understand your tax obligations with ease.
          <br />
          With our intuitive interface and detailed breakdowns, you will have peace of mind knowing that your taxes are calculated correctly. Say goodbye to complicated spreadsheets and let our tax calculator do the work for you.
        </p>
      </div>
    </div>
  );
};


