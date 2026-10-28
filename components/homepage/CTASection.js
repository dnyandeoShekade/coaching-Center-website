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
        <br />
        Mentorship
      </>
    ),
    description: (
      <>
        1-on-1 guidance
        <br />
        tailored for you
      </>
    ),
    iconBg: "bg-[#dce3c9]",
  },
  {
    icon: BookOpen,
    title: (
      <>
        Learn at Your
        <br />
        Own Pace
      </>
    ),
    description: (
      <>
        Flexible learning
        <br />
        that fits your schedule
      </>
    ),
    iconBg: "bg-[#f8d9c5]",
  },
  {
    icon: Target,
    title: (
      <>
        Achieve Your
        <br />
        Goals
      </>
    ),
    description: (
      <>
        Build skills and
        <br />
        grow with confidence
      </>
    ),
    iconBg: "bg-[#dce3c9]",
  },
];

export default function CTASection() {
  return (
    <section className="relative min-h-[900px] overflow-hidden bg-[#f4eddf] px-6 py-16">

      {/* Background decorative shapes */}
      <div className="absolute -left-20 top-[145px] h-[330px] w-[400px] rounded-[45%] bg-[#d9dac3]" />

      <div className="absolute -right-28 top-[245px] h-[310px] w-[330px] rounded-[45%] bg-[#f6cdb6]" />

      <div className="absolute -right-16 bottom-0 h-[270px] w-[420px] rounded-[50%] bg-[#f4cdb8]" />

      <div className="absolute left-[27%] top-[240px] h-7 w-7 rotate-12 rounded-full border-[5px] border-[#ed6b20]" />

      {/* Main content */}
      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center">

        {/* Top badge */}
        <div className="mb-7 flex items-center gap-3 rounded-full bg-white px-6 py-3 shadow-sm">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ef6b20]" />

          <span className="text-[15px] font-medium tracking-tight text-[#172d25]">
            Free Intro Session
          </span>
        </div>

        {/* Heading */}
        <div className="relative text-center">

          <h2 className="max-w-[760px] text-[56px] font-black leading-[1.15] tracking-[-2px] text-[#0d0d0d] md:text-[70px] md:tracking-[-2.5px]">
            Take the first step
            <br />
            towards your
            <br />
            <span className="relative inline-block text-[#6b9680]">
              better future

              {/* Orange underline */}
              <span className="absolute -bottom-3 left-[6%] h-[5px] w-[92%] -rotate-[1deg] rounded-full bg-[#ed641d]" />

              <span className="absolute -bottom-5 left-[13%] h-[2px] w-[78%] rotate-[1deg] rounded-full bg-[#ed641d]" />
            </span>
          </h2>

          {/* Paper plane */}
          <div className="absolute -right-28 top-[-35px] hidden rotate-[-12deg] md:block">
            <Send
              size={58}
              strokeWidth={1.5}
              className="fill-[#ed641d] text-[#ed641d]"
            />
          </div>

          {/* Decorative dots */}
          <div className="absolute -left-12 top-[75px] hidden md:block">
            <Sparkles
              size={35}
              className="text-[#ed641d]"
              strokeWidth={2}
            />
          </div>
        </div>

        {/* Description */}
        <p className="mt-10 max-w-[550px] text-center text-[17px] font-normal leading-[1.65] tracking-[-0.2px] text-[#4a5854]">
          Get expert guidance, learn at your pace,
          <br />
          and achieve your goals with confidence.
        </p>

        {/* Features */}
        <div className="mt-12 flex w-full max-w-[680px] flex-col md:flex-row">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <React.Fragment key={index}>

                <div className="flex flex-1 items-start gap-4 px-5 py-5 md:py-0">

                  <div
                    className={`flex h-[55px] w-[55px] shrink-0 items-center justify-center rounded-full ${feature.iconBg}`}
                  >
                    <Icon
                      size={29}
                      strokeWidth={1.8}
                      className="text-[#263a31]"
                    />
                  </div>

                  <div>
                    <h3 className="text-[15px] font-bold leading-[1.4] tracking-[-0.2px] text-[#1a1a1a]">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-[13px] font-normal leading-[1.5] tracking-[-0.1px] text-[#5a625e]">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {index !== features.length - 1 && (
                  <div className="hidden h-[100px] w-px bg-[#d0cbbb] md:block" />
                )}

              </React.Fragment>
            );
          })}
        </div>

        {/* Buttons */}
        <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row">

          <button
            className="
              group flex h-[64px] min-w-[300px]
              items-center justify-center gap-7
              rounded-full
              bg-[#ed641d]
              px-9
              text-[16px]
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
              className="transition-transform group-hover:translate-x-1"
            />
          </button>

          <button
            className="
              flex h-[64px] min-w-[225px]
              items-center justify-center
              rounded-full
              border-2
              border-[#263d34]
              bg-transparent
              px-8
              text-[16px]
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

      {/* LEFT STUDENT IMAGE */}
      <div className="absolute bottom-[60px] left-[-20px] z-20 hidden w-[600px] lg:block">
        <img
          src="/herosection/cta girl .png"
          alt="Student learning"
          className="w-full object-contain"
        />
      </div>

      {/* RIGHT STUDENT IMAGE */}
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