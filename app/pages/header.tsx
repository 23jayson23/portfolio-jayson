import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { Text } from "@/components/ui/text";

const WORDS = [
  "WEB DEVELOPER",
  "APP DEVELOPER",
  "UI/UX DESIGNER",
  "VIRTUAL ASSISTANT",
];

const Header = () => {
  return (
    <div className="w-full">
      <div className="relative flex h-screen w-full items-center">
        <div className="z-20 max-w-3xl">
          <Text variant="small" className="mb-5 md:mb-10">
            – Hi, I&apos;m Jayson
          </Text>
          <Text variant="large">PROFESSIONAL</Text>
          <LayoutTextFlip words={WORDS} duration={6000} />
          <Text variant="medium" className="mt-5 md:mt-0">
            To ensure that the website functions properly, looks beautiful, and
            performs well across various devices and browsers, web developers
            collaborate closely with designers, UX/UI experts, and occasionally
            project managers.
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Header;
