import React from 'react'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0b1020] to-black text-white">
      {/* Spline full-cover background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/yji5KWXyD-xKVkWj/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle dark overlay to improve contrast over the 3D scene */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-[#0b1020]/30 to-black/70" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col-reverse items-center gap-10 px-6 pb-24 pt-32 md:flex-row md:items-start md:gap-12 lg:gap-16">
        {/* Left copy */}
        <div className="w-full md:w-1/2 lg:w-5/12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-fuchsia-500" />
            <span>Futuristic product showcase</span>
          </div>
          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Designed for the next era of mobile experiences
          </h1>
          <p className="mt-5 max-w-xl text-white/70">
            A minimal, immersive hero built for premium launches. Crisp type, generous space, and a cinematic glow that puts your device at the center.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#"
              className="rounded-full bg-fuchsia-500/90 px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(231,70,255,0.45)] transition hover:bg-fuchsia-500"
            >
              Preorder Now
            </a>
            <a
              href="#"
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Watch Demo
            </a>
          </div>
        </div>

        {/* Center device */}
        <div className="relative flex w-full justify-center md:w-1/2 lg:w-7/12">
          {/* Glowing orb behind the phone */}
          <div className="absolute inset-0 -z-0 flex items-center justify-center">
            <div className="h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl sm:h-96 sm:w-96" />
          </div>

          {/* Phone mockup */}
          <div className="relative mt-2 aspect-[9/19.5] w-[260px] rounded-[2.2rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-2.5 shadow-2xl backdrop-blur-sm sm:w-[320px]">
            {/* Metallic frame sheen */}
            <div className="pointer-events-none absolute inset-0 rounded-[2.2rem] ring-1 ring-white/10" />

            {/* Screen */}
            <div className="relative h-full w-full overflow-hidden rounded-[1.8rem] bg-black">
              {/* Inner neon glow */}
              <div className="absolute -inset-10 bg-[radial-gradient(closest-side,_rgba(255,0,199,0.28),_transparent_70%)]" />
              <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,_#8B5CF6_0deg,_#EC4899_120deg,_#8B5CF6_240deg,_#EC4899_360deg)] opacity-30 mix-blend-screen" />
              {/* Subtle grid for tech feel */}
              <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:18px_18px]" />
              {/* Top speaker notch */}
              <div className="absolute left-1/2 top-2 h-1.5 w-24 -translate-x-1/2 rounded-full bg-white/10" />
              {/* Glow content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-36 w-36 rounded-full bg-fuchsia-500/40 blur-2xl" />
              </div>
            </div>

            {/* Shadow under device */}
            <div className="absolute left-1/2 top-full h-10 w-3/4 -translate-x-1/2 -translate-y-2 rounded-[50%] bg-black/70 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
