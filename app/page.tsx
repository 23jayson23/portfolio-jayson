"use client";

import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import Header from "./pages/header";
import Info from "./pages/info";
import { LayoutGridDemo } from "./pages/bento";
export default function Home() {
  return (
    <div className="px-5 md:px-32">
      <BackgroundRippleEffect rows={14} cols={40} />
      <Header />
      <Info />
      <LayoutGridDemo/>
    </div>
  );
}
