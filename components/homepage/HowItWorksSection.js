"use client";

import React from "react";
import Reveal from "../common/Reveal";

const processSteps = [
  {
    id: "01",
    title: "Choose Your Program",
    highlight: "— start here",
    description:
      "Explore our courses and choose the right program based on your academic goals and career plans.",
    badge: "bg-[#d8eafa] border-[#8db8dd] text-[#486579]",
    shadow: "shadow-[4px_5px_0px_#7da8cc]",
    rotate: "-rotate-[1deg]",
  },
  {
    id: "02",
    title: "Enroll & Get Started",
    highlight: "— within 48 hours",
    description:
      "Complete your enrollment and get instant access to classes, study materials, and your personal dashboard.",
    badge: "bg-[#dce99a] border-[#aebe61] text-[#68752d]",
    shadow: "shadow-[4px_5px_0px_#aebd62]",
    rotate: "rotate-[0.8deg]",
  },
  {
    id: "03",
    title: "Learn & Practice",
    highlight: "— ongoing",
    description:
      "Learn from experienced educators, attend interactive classes, practice regularly, and track your progress.",
    badge: "bg-[#f2c8dc] border-[#d69abb] text-[#8a5470]",
    shadow: "shadow-[4px_5px_0px_#d29ab7]",
    rotate: "-rotate-[0.7deg]",
  },
  {
    id: "04",
    title: "Achieve Your Goals",
    highlight: "— keep growing",
    description:
      "Build confidence, improve your performance, clear your exams, and take the next step toward your career.",
    badge: "bg-[#e5d5f2] border-[#b99bd0] text-[#73588a]",
    shadow: "shadow-[4px_5px_0px_#b89bcf]",
    rotate: "rotate-[1deg]",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-[#f7f3e9] px-5 py-16 md:px-10 lg:px-20">
      {/* Background Decorations */}
      <div className="absolute -left-32 top-40 h-72 w-72 rounded-full bg-[#dcebdc]/40 blur-3xl" />
      <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-[#eadcf1]/40 blur-3xl" />
      <Reveal>

      {/* Header */}
      <div className="relative mx-auto mb-14 max-w-3xl text-center">
        <div className="mb-4 inline-flex items-center rounded-full bg-[#e8e1f2] px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-[#665277]">
          ✦ Our Learning Process
        </div>

        <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-[#183b35] md:text-5xl lg:text-6xl">
          Your Journey to{" "}
          <span className="relative inline-block text-[#387364]">
            Success
            <svg
              className="absolute -bottom-2 left-0 h-3 w-full text-[#e98b52]"
              viewBox="0 0 100 12"
              preserveAspectRatio="none"
            >
              <path
                d="M2,9 Q50,1 98,9"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-[#66716b] md:text-base">
          From choosing the right course to achieving your goals, we make
          learning simple, structured, and effective.
        </p>
      </div>

      {/* Main Content */}
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Image */}
        <div className="relative hidden lg:block">
          <div className="absolute -bottom-4 -left-4 h-full w-full rounded-[28px] border-2 border-[#e7b889]" />

          <div className="relative h-[500px] overflow-hidden rounded-[28px]">
            <img
              src="/herosection/teacher-stundet.jpg"
              alt="Students learning together"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#173c36]/70 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">
                Learn • Practice • Grow
              </p>

              <h3 className="max-w-md text-2xl font-bold">
                Learn with confidence. Achieve with purpose.
              </h3>
            </div>

            <div className="absolute right-5 top-5 rounded-xl bg-white px-4 py-3 shadow-lg">
              <div className="text-xl font-extrabold text-[#387364]">
                10K+
              </div>
              <div className="text-[10px] font-medium text-gray-500">
                Happy Students
              </div>
            </div>
          </div>
        </div>

        {/* Process Cards */}
        <div className="relative mx-auto w-full max-w-2xl">
          <div className="space-y-5">
            {processSteps.map((step) => (
              <div
                key={step.id}
                className={`group relative flex min-h-[132px] items-start gap-5 rounded-[20px] border border-[#d9d9d2] bg-[#fffefa] px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:rotate-0 hover:shadow-[6px_8px_0px_rgba(30,60,50,0.08)] md:min-h-[140px] md:px-7 ${step.rotate}`}
              >
                {/* Number Badge */}
                <div
                  className={`relative mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-[11px] border text-sm font-semibold ${step.badge} ${step.shadow} transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-[-3deg]`}
                >
                  {step.id}
                </div>

                {/* Card Content */}
                <div className="min-w-0 pt-0.5">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <h3 className="text-[20px] font-bold leading-tight tracking-[-0.02em] text-[#193a34] md:text-[22px]">
                      {step.title}
                    </h3>

                    <span className="text-[13px] italic text-[#69746e] md:text-sm">
                      {step.highlight}
                    </span>
                  </div>

                  <p className="mt-2 max-w-xl text-[13px] leading-[1.55] text-[#68736d] md:text-[14px]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="relative mx-auto mt-16 max-w-6xl overflow-hidden rounded-[24px] bg-[#173c36] px-6 py-8 md:px-10">
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/5" />
        <div className="absolute -bottom-20 left-1/3 h-52 w-52 rounded-full bg-orange-500/10" />

        <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <div className="mb-2 text-xs font-bold uppercase tracking-wider text-orange-300">
              Start Today
            </div>

            <h3 className="text-2xl font-extrabold text-white md:text-3xl">
              Ready to Start Your{" "}
              <span className="text-orange-400">Learning Journey?</span>
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-300">
              Join thousands of students and take the first step toward
              achieving your academic and career goals.
            </p>
          </div>

          <button className="group flex shrink-0 items-center gap-3 rounded-full bg-orange-500 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-orange-600">
            Book a Free Demo
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>
    </Reveal>
  </section>
  );
}