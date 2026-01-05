"use client";

import { cn } from "@/lib/utils";
import { Text } from "@/components/ui/text";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

const WORDS = [
  "WEB DEVELOPER",
  "APP DEVELOPER",
  "UI/UX DESIGNER",
  "VIRTUAL ASSISTANT",
];

export default function Home() {
  return (
    <div className="relative flex h-screen w-full items-center pl-5 md:pl-32">
      <BackgroundRippleEffect rows={16} cols={40}/>  
      {/* Grid background */}
      {/* <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      /> */}

      {/* Radial fade overlay */}
      <div className="pointer-events-none absolute inset-0 bg-white dark:bg-black mask-[radial-gradient(ellipse_at_center,transparent_10%,black)]" />

      <div className="z-20 max-w-3xl">
        <Text variant="small" className="mb-5 md:mb-0">
          – Hi, I&apos;m Jayson
        </Text>

        <Text variant="large">PROFESSIONAL</Text>

        <LayoutTextFlip
          words={WORDS}
          duration={6000}
        />

        <Text variant="medium" className="mt-5 md:mt-0">
          To ensure that the website functions properly, looks beautiful, and
          performs well across various devices and browsers, web developers
          collaborate closely with designers, UX/UI experts, and occasionally
          project managers.
        </Text>
      </div>
    </div>
  );
}
