"use client";

import React from "react";
import {
  ArrowRight,
  Users,
  BookOpen,
  Target,
  Send,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: (
      <>
        Personalized
        <br className="hidden sm:inline" /> Mentorship
      </>
    ),
    description: (
      <>
        1-on-1 guidance
        <br className="hidden sm:inline" /> tailored for you
      </>
    ),
    iconBg: "bg-[#dce3c9]",
  },
  {
    icon: BookOpen,
    title: (
      <>
        Learn at Your
        <br className="hidden sm:inline" /> Own Pace
      </>
    ),
    description: (
      <>
        Flexible learning
        <br className="hidden sm:inline" /> that fits your schedule
      </>
    ),
    iconBg: "bg-[#f8d9c5]",
  },
  {
    icon: Target,
    title: (
      <>
        Achieve Your
        <br className="hidden sm:inline" /> Goals
      </>
    ),
    description: (
      <>
        Build skills and
        <br className="hidden sm:inline" /> grow with confidence
      </>
    ),
    iconBg: "bg-[#dce3c9]",
  },
];

export default function CTASection() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[900px] overflow-hidden bg-[#f4eddf] px-4 sm:px-6 py-12 sm:py-16 md:py-24">
      {/* Background decorative shapes */}
      <div className="absolute -left-20 top-[145px] h-[220px] w-[260px] sm:h-[330px] sm:w-[400px] rounded-[45%] bg-[#d9dac3] opacity-60 sm:opacity-100 pointer-events-none" />

      <div className="absolute -right-28 top-[245px] h-[200px] w-[220px] sm:h-[310px] sm:w-[330px] rounded-[45%] bg-[#f6cdb6] opacity-60 sm:opacity-100 pointer-events-none" />

      <div className="absolute -right-16 bottom-0 h-[180px] w-[260px] sm:h-[270px] sm:w-[420px] rounded-[50%] bg-[#f4cdb8] opacity-60 sm:opacity-100 pointer-events-none" />

      <div className="absolute left-[10%] sm:left-[27%] top-[120px] sm:top-[240px] h-5 w-5 sm:h-7 sm:w-7 rotate-12 rounded-full border-[3px] sm:border-[5px] border-[#ed6b20] pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center">
        {/* Top badge */}
        <div className="mb-6 sm:mb-7 flex items-center gap-2.5 sm:gap-3 rounded-full bg-white px-4 sm:px-6 py-2.5 sm:py-3 shadow-sm">
          <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-[#ef6b20]" />
          <span className="text-[13px] sm:text-[15px] font-medium tracking-tight text-[#172d25]">
            Free Intro Session
          </span>
        </div>

        {/* Heading */}
        <div className="relative text-center w-full max-w-[760px]">
          <h2 className="text-[32px] sm:text-[48px] md:text-[70px] font-black leading-[1.15] tracking-[-1px] sm:tracking-[-2px] md:tracking-[-2.5px] text-[#0d0d0d]">
            Take the first step
            <br />
            towards your
            <br />
            <span className="relative inline-block text-[#6b9680]">
              better future
              {/* Orange underline */}
              <span className="absolute -bottom-1.5 sm:-bottom-3 left-[6%] h-[3px] sm:h-[5px] w-[92%] -rotate-[1deg] rounded-full bg-[#ed641d]" />
              <span className="absolute -bottom-3 sm:-bottom-5 left-[13%] h-[1.5px] sm:h-[2px] w-[78%] rotate-[1deg] rounded-full bg-[#ed641d]" />
            </span>
          </h2>

          {/* Paper plane */}
          <div className="absolute -right-8 sm:-right-16 md:-right-28 -top-6 sm:-top-8 md:-top-9 hidden sm:block rotate-[-12deg]">
            <Send
              size={58}
              strokeWidth={1.5}
              className="w-8 h-8 sm:w-11 sm:h-11 md:w-[58px] md:h-[58px] fill-[#ed641d] text-[#ed641d]"
            />
          </div>

          {/* Decorative dots */}
          <div className="absolute -left-4 sm:-left-8 md:-left-12 top-[40px] sm:top-[60px] md:top-[75px] hidden sm:block">
            <Sparkles
              size={35}
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-[35px] md:h-[35px] text-[#ed641d]"
              strokeWidth={2}
            />
          </div>
        </div>

        {/* Description */}
        <p className="mt-6 sm:mt-8 md:mt-10 max-w-[550px] text-center text-[15px] sm:text-[17px] font-normal leading-[1.6] sm:leading-[1.65] tracking-[-0.2px] text-[#4a5854] px-2">
          Get expert guidance, learn at your pace,
          <br className="hidden sm:inline" /> and achieve your goals with
          confidence.
        </p>

        {/* Features */}
        <div className="mt-8 sm:mt-10 md:mt-12 flex w-full max-w-[680px] flex-col md:flex-row gap-6 md:gap-0">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <React.Fragment key={index}>
                <div className="flex flex-1 items-start gap-4 px-2 sm:px-5 py-2 md:py-0">
                  <div
                    className={`flex h-[48px] w-[48px] sm:h-[55px] sm:w-[55px] shrink-0 items-center justify-center rounded-full ${feature.iconBg}`}
                  >
                    <Icon
                      size={29}
                      strokeWidth={1.8}
                      className="w-6 h-6 sm:w-[29px] sm:h-[29px] text-[#263a31]"
                    />
                  </div>

                  <div>
                    <h3 className="text-[14px] sm:text-[15px] font-bold leading-[1.4] tracking-[-0.2px] text-[#1a1a1a]">
                      {feature.title}
                    </h3>

                    <p className="mt-1.5 sm:mt-3 text-[12px] sm:text-[13px] font-normal leading-[1.5] tracking-[-0.1px] text-[#5a625e]">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {index !== features.length - 1 && (
                  <>
                    {/* Divider for desktop */}
                    <div className="hidden h-[100px] w-px bg-[#d0cbbb] md:block" />
                    {/* Divider for mobile */}
                    <div className="block h-px w-full bg-[#d0cbbb]/60 md:hidden" />
                  </>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Buttons */}
        <div className="mt-8 sm:mt-10 md:mt-12 flex w-full sm:w-auto flex-col items-center gap-4 sm:gap-5 sm:flex-row px-4 sm:px-0">
          <button
            className="
              group flex h-[56px] sm:h-[64px] w-full sm:w-auto sm:min-w-[300px]
              items-center justify-center gap-4 sm:gap-7
              rounded-full
              bg-[#ed641d]
              px-6 sm:px-9
              text-[15px] sm:text-[16px]
              font-semibold
              tracking-[-0.2px]
              text-white
              shadow-[0_3px_0_#b94e18]
              transition-all
              hover:-translate-y-1
              hover:shadow-[0_6px_0_#b94e18]
              active:translate-y-0
            "
          >
            Claim your free session
            <ArrowRight
              size={22}
              className="w-5 h-5 sm:w-[22px] sm:h-[22px] transition-transform group-hover:translate-x-1"
            />
          </button>

          <button
            className="
              flex h-[56px] sm:h-[64px] w-full sm:w-auto sm:min-w-[225px]
              items-center justify-center
              rounded-full
              border-2
              border-[#263d34]
              bg-transparent
              px-6 sm:px-8
              text-[15px] sm:text-[16px]
              font-semibold
              tracking-[-0.2px]
              text-[#263d34]
              transition-all
              hover:bg-[#263d34]
              hover:text-white
            "
          >
            Talk to an advisor
          </button>
        </div>
      </div>

      {/* LEFT STUDENT IMAGE - UNCHANGED FOR LG */}
      <div className="absolute bottom-[60px] left-[-20px] z-20 hidden w-[600px] lg:block">
        <img
          src="/herosection/cta girl .png"
          alt="Student learning"
          className="w-full object-contain"
        />
      </div>

      {/* RIGHT STUDENT IMAGE - UNCHANGED FOR LG */}
      <div className="absolute bottom-[60px] right-[-20px] z-20 hidden w-[600px] lg:block">
        <img
          src="/herosection/Cta boy.png"
          alt="Student learning"
          className="w-full object-contain"
        />
      </div>
    </section>
  );
}
