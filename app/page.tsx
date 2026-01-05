"use client"

import { cn } from "@/lib/utils";
import { Text } from "@/components/ui/text";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { motion } from "motion/react";
export default function Home() {

  const words = ["WEB DEVELOPER", "APP DEVELOPER", "UI/UX DESIGNER", "VIRTUAL ASSISTANT"];
  return (
    <div className="relative flex h-screen w-full items-center overflow-hidden pl-5 md:pl-32">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="z-20">
        <Text variant="small">- Hi I'm Jayson</Text>
        <Text variant="large">PROFESSIONAL</Text>
        <LayoutTextFlip 
        duration={6000}
          words={words}
        />
        {/* <Text variant="large" className="text-black [text-shadow:1px_1px_0_white,-1px_1px_0_white,1px_-1px_0_white,-1px_-1px_0_white]">WEB DEVELOPER</Text> */}
        <Text variant="medium" className="w-xs md:w-3xl text-x">To ensure that the website functions properly, looks beautiful, and performs well across various devices and browsers, web developers collaborate closely with designers, UX/UI experts, and occasionally project managers.</Text>
      </div>
    </div>
  );
}
