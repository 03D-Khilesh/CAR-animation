"use client";

import { useEffect, useRef , useState} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      gsap.registerPlugin(ScrollTrigger);


      tl.from(".hero-label", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".hero-title",
          {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".stat",
          {
            opacity: 0,
            y: 30,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.4"
        );

//
gsap.to(".car", {
  x: "50vw",
  ease: "none",
  scrollTrigger: {
    trigger: ".car-container",
    start: "top 70%",
    end: "bottom 20%",
    scrub: 1.2,},
});

gsap.to(".car-trail", {
  width: "50vw",
  ease: "none",
  scrollTrigger: {
    trigger: ".car-container",
    start: "top 70%",
    end: "bottom 20%",
    scrub: 1.2,}
    });

gsap.fromTo(
  ".about-content",
  {
    opacity: 0,
    y: 60,
    filter: "blur(12px)",
  },
  {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
  }
);

// gsap.fromTo(
//   ".car-trail",
//   {
//     scaleX: 0,
//   },
//   {
//     scaleX: 1,
//     ease: "none",
//     scrollTrigger: {
//       trigger: ".car-container",
//       start: "top 70%",
//       end: "bottom 20%",
//       scrub: 1.2
//     },
//   }
// );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={heroRef}
      className="min-h-screen bg-black text-white"
    >
      <section className="relative min-h-[200vh] overflow-hidden flex flex-col justify-center px-8 md:px-16">
      <div className="pointer-events-none absolute left-1/2 top-[35%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-[120px]" />
        <p className="hero-label mb-6 text-sm tracking-[0.4em] text-gray-400 uppercase">
          Creative Digital Experience
        </p>

        <h1 className="hero-title text-5xl font-bold uppercase leading-[0.9] tracking-[0.12em] md:text-8xl">
  W E L C O M E <br />
        <span className="text-gray-500">I T Z F I Z Z</span>
        </h1>
        <div className="car-container relative mt-28 w-full overflow-hidden">

  {/* Blue motion trail */}
  <div className="car-trail absolute left-0 top-1/2 h-2 w-[0%] -translate-y-1/2 rounded-full bg-gradient-to-r from-transparent via-blue-500/40 to-blue-400/70 blur-lg" />

      <img
        src="/CAR-animation/car.png"
        alt="Sports car"
      className="car relative z-10 w-[550px] sm:w-[650px] md:w-[750px] max-w-none"
      />

</div>
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px max-w-5xl border border-white/10 bg-white/10">
          <div className="stat bg-black/80 p-6 backdrop-blur-md">
            <h2 className="text-4xl font-bold">58%</h2>
            <p className="mt-2 text-sm text-gray-400">
              Engagement
            </p>
          </div>

          <div className="stat bg-black/80 p-6 backdrop-blur-md">
            <h2 className="text-4xl font-bold">23%</h2>
            <p className="mt-2 text-sm text-gray-400">
              Growth
            </p>
          </div>

          <div className="stat bg-black/80 p-6 backdrop-blur-md">
            <h2 className="text-4xl font-bold">27%</h2>
            <p className="mt-2 text-sm text-gray-400">
              Conversion
            </p>
          </div>

          <div className="stat bg-black/80 p-6 backdrop-blur-md">
            <h2 className="text-4xl font-bold">40%</h2>
            <p className="mt-2 text-sm text-gray-400">
              Retention
            </p>
          </div>

        </div>

      </section>
      <section className="about-section min-h-screen bg-black px-8 py-32 text-white md:px-16">
  <div className="about-content max-w-4xl opacity-0 blur-[12px] translate-y-12">

    <p className="mb-6 text-sm uppercase tracking-[0.3em] text-gray-500">
      About the experience
    </p>

    <h2 className="text-4xl font-bold uppercase leading-tight md:text-7xl">
      Designed to move.
      <br />
      Built to engage.
    </h2>

    <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-400">
      A scroll-driven digital experience combining motion, interaction
      and visual storytelling.
    </p>

  </div>
</section>
    </main>
  );
}