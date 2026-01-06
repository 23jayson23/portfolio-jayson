"use client";

import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import Header from "./pages/header";
import { Text } from "@/components/ui/text";
export default function Home() {
  return (
    <div className="px-5 md:px-32">
      <BackgroundRippleEffect rows={16} cols={40} />
      <Header />
      <div>
        {/* Other page content can go here */}
        <div className="h-1/2">
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
}
