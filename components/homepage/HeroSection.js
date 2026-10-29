"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import Header from "../common/Header";
import HeroThreeScene from "./HeroThreeScene";

const ribbonItems = [
  "Expert Faculty",
  "Weekly Tests",
  "Personal Mentorship",
  "Doubt Solving",
  "Study Material",
  "Proven Results",
  "Learn at Your Pace",
  "Build Strong Foundation",
  "Prepare With Confidence",
];

const ribbonText = ribbonItems.join("   |   ");

export default function HeroSection() {
  const ribbonTextRef = useRef(null);
  const heroContentRef = useRef(null);
  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);
  const centerImageRef = useRef(null);
  const decorativeElementsRef = useRef(null);
  const badgeRef = useRef(null);
  const branchesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate ribbon text scrolling
      if (ribbonTextRef.current) {
        gsap.to(ribbonTextRef.current, {
          attr: { startOffset: "-50%" },
          duration: 35,
          ease: "none",
          repeat: -1,
        });
      }

      // Animate badge with bounce
      if (badgeRef.current) {
        gsap.fromTo(
          badgeRef.current,
          {
            y: -30,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            ease: "bounce.out",
          },
        );
      }

      // Animate hero content on load with autoAlpha for proper visibility
      if (heroContentRef.current) {
        gsap.fromTo(
          heroContentRef.current.children,
          {
            y: 20,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
          },
        );
      }

      // Animate left image with floating effect
      if (leftImageRef.current) {
        gsap.fromTo(
          leftImageRef.current,
          {
            x: -50,
            autoAlpha: 0,
            rotation: -8,
          },
          {
            x: 0,
            autoAlpha: 1,
            rotation: -4,
            duration: 1,
            delay: 0.2,
            ease: "power2.out",
          },
        );

        // Continuous floating animation
        gsap.to(leftImageRef.current, {
          y: -15,
          rotation: -2,
          duration: 2.5,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }

      // Animate right image with floating effect
      if (rightImageRef.current) {
        gsap.fromTo(
          rightImageRef.current,
          {
            x: 50,
            autoAlpha: 0,
            rotation: 5,
          },
          {
            x: 0,
            autoAlpha: 1,
            rotation: 0,
            duration: 1,
            delay: 0.2,
            ease: "power2.out",
          },
        );

        // Continuous floating animation
        gsap.to(rightImageRef.current, {
          y: -12,
          rotation: 3,
          duration: 3,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }

      // Animate center image with scale effect
      if (centerImageRef.current) {
        gsap.fromTo(
          centerImageRef.current,
          {
            scale: 0.9,
            autoAlpha: 0,
            y: 20,
          },
          {
            scale: 1,
            autoAlpha: 1,
            y: 0,
            duration: 1,
            delay: 0.1,
            ease: "power2.out",
          },
        );

        // Subtle breathing animation
        gsap.to(centerImageRef.current, {
          scale: 1.02,
          duration: 3,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }

      // Animate branches with wave effect
      branchesRef.current.forEach((branch, index) => {
        if (branch) {
          gsap.fromTo(
            branch,
            {
              scale: 0,
              rotation: index === 0 ? -20 : 20,
              autoAlpha: 0,
            },
            {
              scale: 1,
              rotation: index === 0 ? 0 : -10,
              autoAlpha: 1,
              duration: 0.8,
              delay: 0.8 + index * 0.1,
              ease: "back.out(1.7)",
            },
          );

          // Continuous swaying animation
          gsap.to(branch, {
            rotation: index === 0 ? 5 : -15,
            duration: 2 + index * 0.5,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          });
        }
      });

      // Animate decorative elements with stagger and float
      if (decorativeElementsRef.current) {
        const elements = decorativeElementsRef.current.children;

        gsap.fromTo(
          elements,
          {
            scale: 0,
            autoAlpha: 0,
            rotation: 0,
          },
          {
            scale: 1,
            autoAlpha: 1,
            rotation: 360,
            duration: 0.8,
            stagger: 0.1,
            delay: 0.6,
            ease: "back.out(2)",
          },
        );

        // Continuous floating and rotation for each element
        Array.from(elements).forEach((element, index) => {
          gsap.to(element, {
            y: index % 2 === 0 ? -10 : -15,
            rotation: index % 2 === 0 ? 15 : -15,
            duration: 2 + index * 0.3,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          });
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top,_#fffaf1_0%,_#f8f6ee_38%,_#f2efe2_100%)] text-[#071c18]">
      <Header />

      {/* ================= HERO ================= */}
      <section className="relative w-full px-4 pt-4 sm:px-6 sm:pt-5 md:px-8 [perspective:1400px]">
        <HeroThreeScene />

        {/* ================= BADGE ================= */}
        <div ref={badgeRef} className="relative z-30 flex justify-center">
          <div className="rounded-full border border-[#f0bfd5] bg-[#f1c4da] px-3.5 py-1.5 text-center text-[11px] font-semibold shadow-[0_8px_0_#d8a3bc,0_14px_20px_rgba(47,40,35,0.12)] sm:px-4 sm:py-2 sm:text-xs sm:shadow-[0_10px_0_#d8a3bc,0_18px_24px_rgba(47,40,35,0.12)]">
            Classes 8th–12th • Competitive Exams • Online & Offline
          </div>
        </div>

        {/* ================= HERO CONTENT ================= */}
        <div
          ref={heroContentRef}
          className="relative z-30 mx-auto mt-4 max-w-[780px] text-center sm:mt-5 [transform:translateZ(50px)]"
        >
          {/* Heading */}
          <h1 className="text-[32px] font-extrabold leading-[1.02] tracking-[-1.5px] text-[#0b1e18] drop-shadow-[0_3px_0_rgba(255,255,255,0.8)] sm:text-[44px] sm:tracking-[-2px] lg:text-[58px] lg:leading-[0.98]">
            Learn Today.
            <br />
            <span className="relative inline-block text-[#3c755c] [text-shadow:0_3px_0_rgba(49,92,70,0.28)]">
              Achieve Tomorrow.
              {/* Orange underline */}
              <span className="absolute -bottom-1.5 left-[20%] h-[2.5px] w-[75%] rotate-[-1deg] rounded-full bg-[#ed7200] sm:-bottom-2 sm:h-[3px]" />
            </span>
          </h1>

          {/* Decorative Mark */}
          <div className="absolute right-[3%] top-[92px] hidden text-xl text-[#ed7200] lg:block">
            ✦
          </div>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-[520px] px-2 text-xs leading-5 text-[#111] sm:mt-7 sm:px-0 sm:text-sm">
            Expert guidance, personalized learning, and proven
            <br className="hidden sm:block" />
            strategies to help students achieve their academic and career goals.
          </p>

          {/* CTA Buttons */}
          <div className="mt-5 flex flex-col justify-center gap-3 px-4 sm:flex-row sm:px-0">
            <button className="group w-full rounded-full border border-[#db5e00] bg-[#ed7200] px-6 py-2.5 text-xs font-bold text-white shadow-[0_6px_0_#c85800,0_12px_22px_rgba(237,114,0,0.28)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:bg-[#d96600] hover:shadow-[0_10px_0_#b94900,0_20px_32px_rgba(237,114,0,0.32)] active:scale-95 sm:w-auto sm:shadow-[0_8px_0_#c85800,0_16px_28px_rgba(237,114,0,0.28)]">
              <span className="inline-block transition-transform group-hover:scale-110">
                Book a Free Demo
              </span>
            </button>

            <button className="group w-full rounded-full border-2 border-[#13251f] bg-white/60 px-6 py-2.5 text-xs font-bold text-[#13251f] shadow-[0_6px_0_rgba(19,37,31,0.18)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:bg-[#13251f] hover:text-white hover:shadow-[0_10px_0_rgba(19,37,31,0.28)] active:scale-95 sm:w-auto sm:shadow-[0_8px_0_rgba(19,37,31,0.18)]">
              <span className="inline-block transition-transform group-hover:scale-110">
                Explore Courses
              </span>
            </button>
          </div>
        </div>

        {/* ================================================= */}
        {/*                  GREEN RIBBON                     */}
        {/* ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            -left-10
            top-[320px]
            z-10
            hidden
            h-[120px]
            w-[calc(100%+80px)]
            sm:top-[360px]
            md:block
            md:h-[140px]
            lg:top-[400px]
            lg:h-[160px]
          "
        >
          <svg
            viewBox="0 0 1600 160"
            className="h-full w-full"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Smooth organic path for text to follow */}
              <path
                id="ribbonTextPath"
                d="
                  M 0 110
                  C 200 135, 400 140, 600 115
                  C 800 90, 1000 80, 1200 95
                  C 1400 110, 1500 105, 1600 100
                "
              />
            </defs>

            {/* ================= ORGANIC WAVY RIBBON ================= */}
            <path
              d="
                M 0 90
                C 200 120, 400 125, 600 98
                C 800 71, 1000 62, 1200 78
                C 1400 94, 1500 89, 1600 85
                
                L 1600 120
                
                C 1500 124, 1400 129, 1200 113
                C 1000 97, 800 106, 600 133
                C 400 160, 200 155, 0 125
                
                Z
              "
              fill="#2d5f45"
              opacity="0.95"
            />

            {/* ================= SCROLLING TEXT ================= */}
            <text
              fill="#ffffff"
              fontSize="11"
              fontWeight="500"
              dominantBaseline="middle"
              letterSpacing="1"
            >
              <textPath
                ref={ribbonTextRef}
                href="#ribbonTextPath"
                startOffset="0%"
              >
                {ribbonText}
                {"    •    "}
                {ribbonText}
                {"    •    "}
                {ribbonText}
                {"    •    "}
                {ribbonText}
              </textPath>
            </text>
          </svg>
        </div>

        {/* ================================================= */}
        {/*                    LEFT IMAGE                     */}
        {/* ================================================= */}

        <div
          ref={leftImageRef}
          className="absolute left-[2%] top-[290px] z-20 hidden w-[170px] rotate-[-4deg] md:block lg:left-[8%] lg:top-[275px] lg:w-[210px] xl:w-[245px]"
        >
          <div className="relative">
            <div className="absolute -inset-[8px] rounded-[18px] bg-[#d6e8d5] blur-md" />
            <div className="relative overflow-hidden rounded-[18px] border-[4px] border-white bg-white shadow-[0_20px_30px_rgba(25,55,40,0.18)]">
              <Image
                src="/herosection/student.png"
                alt="Student"
                width={700}
                height={700}
                className="h-[140px] w-full object-cover lg:h-[185px] xl:h-[195px]"
              />
            </div>
          </div>

          {/* Book Shape */}
          <div className="relative mx-auto -mt-3 h-7 w-[180px] rounded-b-[50%] border-[4px] border-[#111] bg-white shadow-[0_10px_0_rgba(17,17,17,0.12)] lg:h-9 lg:w-[225px] xl:w-[245px]">
            <div className="absolute bottom-0 left-0 h-[4px] w-full bg-[#ed7200]" />
          </div>
        </div>

        {/* ================================================= */}
        {/*                   CENTER IMAGE                    */}
        {/* ================================================= */}

        <div
          ref={centerImageRef}
          className="relative z-20 mx-auto mt-6 w-full max-w-[260px] sm:max-w-[320px] md:max-w-[340px] lg:mt-8 lg:max-w-[370px]"
        >
          <div className="relative">
            <div className="absolute -inset-[8px] rounded-[24px] bg-[#d7e9ce] blur-md sm:-inset-[10px] sm:rounded-[28px] sm:blur-lg" />
            <div className="relative overflow-hidden rounded-[20px] border-[3px] border-white bg-white shadow-[0_18px_30px_rgba(19,37,31,0.2)] sm:rounded-[22px] sm:border-[4px] sm:shadow-[0_26px_45px_rgba(19,37,31,0.2)]">
              <Image
                src="/herosection/girl.png"
                alt="Bright Academy student"
                width={700}
                height={700}
                className="h-[230px] w-full object-cover sm:h-[280px] md:h-[310px] lg:h-[325px]"
              />
            </div>
          </div>

          {/* Left Branch */}
          <div
            ref={(el) => (branchesRef.current[0] = el)}
            className="absolute -left-7 bottom-[-5px] hidden text-2xl sm:-left-10 sm:text-3xl lg:block lg:text-4xl"
          >
            🌿
          </div>

          {/* Right Branch */}
          <div
            ref={(el) => (branchesRef.current[1] = el)}
            className="absolute -right-7 bottom-[-5px] hidden rotate-[-10deg] text-2xl sm:-right-10 sm:text-3xl lg:block lg:text-4xl"
          >
            🌿
          </div>
        </div>

        {/* ================================================= */}
        {/*                   RIGHT IMAGE                     */}
        {/* ================================================= */}

        <div
          ref={rightImageRef}
          className="absolute right-[2%] top-[290px] z-20 hidden md:block lg:right-[8%] lg:top-[280px]"
        >
          <div className="relative">
            <div className="absolute -inset-[8px] rounded-[40%] bg-[#f9d8a9] blur-md sm:-inset-[10px]" />
            <div
              className="
                relative flex h-[170px] w-[190px]
                items-center justify-center
                overflow-hidden
                rounded-t-[50%]
                rounded-b-[45%]
                border-[3px] border-[#397558]
                bg-white
                shadow-[0_18px_28px_rgba(57,117,88,0.16)]
                sm:h-[190px] sm:w-[210px]
                lg:h-[220px] lg:w-[250px]
                lg:border-[4px]
                lg:shadow-[0_24px_38px_rgba(57,117,88,0.16)]
              "
            >
              <Image
                src="/herosection/woman-looking-into-tablet-student-boy.jpg"
                alt="Students learning"
                width={600}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Orange Dots */}
            <span className="absolute -left-3 top-[50%] h-3 w-3 rounded-full border border-black bg-[#ed7200] shadow-[0_0_0_2px_rgba(237,114,0,0.18)] lg:-left-4 lg:h-4 lg:w-4 lg:border-2 lg:shadow-[0_0_0_3px_rgba(237,114,0,0.18)]" />

            <span className="absolute -right-3 top-[45%] h-3 w-3 rounded-full border border-black bg-[#ed7200] shadow-[0_0_0_2px_rgba(237,114,0,0.18)] lg:-right-4 lg:h-4 lg:w-4 lg:border-2 lg:shadow-[0_0_0_3px_rgba(237,114,0,0.18)]" />
          </div>
        </div>

        {/* ================================================= */}
        {/*               DECORATIVE ELEMENTS                 */}
        {/* ================================================= */}

        <div ref={decorativeElementsRef}>
          {/* Left Stars */}
          <div className="absolute left-[5%] top-[270px] z-30 hidden text-2xl lg:block">
            ⭐
          </div>

          <div className="absolute left-[4%] top-[315px] z-30 hidden text-xl lg:block">
            ⭐
          </div>

          {/* Left Book */}
          <div className="absolute left-[24%] top-[350px] z-30 hidden text-3xl lg:block">
            📖
          </div>

          {/* Right Book */}
          <div className="absolute right-[8%] top-[215px] z-30 hidden rotate-[-8deg] text-3xl lg:block">
            📖
          </div>
        </div>

        {/* ================= BOTTOM CTA ================= */}

        <div className="relative z-30 flex justify-center py-6 sm:py-8 lg:absolute lg:bottom-3 lg:right-10 lg:py-0">
          <button className="group rounded-full border border-[#dfe9d7] bg-white/90 px-5 py-2.5 text-xs font-semibold text-[#11251d] shadow-[0_8px_0_rgba(17,37,29,0.08),0_16px_28px_rgba(17,37,29,0.09)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_10px_0_rgba(17,37,29,0.08),0_18px_32px_rgba(17,37,29,0.12)] active:scale-95">
            <span className="inline-block transition-transform group-hover:scale-110">
              Start Learning Today 🌱
            </span>
          </button>
        </div>
      </section>
    </main>
  );
}
