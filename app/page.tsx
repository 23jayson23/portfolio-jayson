"use client"

import { ModeToggle } from "./components/mode-toggle"
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

export default function Home() {
  return (
    <div>
      <ModeToggle />
      <h1>Welcome to the Home Page</h1>
<ShaderGradientCanvas
      style={{ position: 'absolute', inset: 0 }}
      pixelDensity={1.5}
      fov={45}
    >
      <ShaderGradient cDistance={32} cPolarAngle={125} />
    </ShaderGradientCanvas>

    </div>
  );
}
