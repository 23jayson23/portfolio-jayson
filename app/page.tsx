"use client"

import { ModeToggle } from "../components/ui/mode-toggle"
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

export default function Home() {
  return (
    <div>
      <ModeToggle />
      <h1>Welcome to the Home Page</h1>
    </div>
  );
}
