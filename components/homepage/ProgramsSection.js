"use client";

import {
  ArrowRight,
  Atom,
  Code2,
  Sigma,
} from "lucide-react";

const programs = [
  {
    title: "Mathematics",
    description:
      "Build strong foundations in numbers, arithmetic, and problem solving.",
    image: "/images/math.svg",
    icon: <Sigma size={40} strokeWidth={1.7} />,
    color: "blue",
    rotate: "-rotate-[2deg]",
  },
  {
    title: "Science",
    description:
      "Explore the world through experiments, discovery, and curiosity.",
    image: "/images/science.svg",
    icon: <Atom size={40} strokeWidth={1.7} />,
    color: "green",
    rotate: "rotate-[-1deg]",
  },
  {
    title: "English",
    description:
      "Strengthen reading, writing, grammar, and communication with confidence.",
    image: "/images/english.svg",
    icon: (
      <span className="text-[25px] font-extrabold leading-none">EN</span>
    ),
    color: "pink",
    rotate: "rotate-[2deg]",
  },
  {
    title: "Coding",
    description:
      "Learn Scratch, Python, web development, and AI through fun projects.",
    image: "/images/coding.svg",
    icon: <Code2 size={40} strokeWidth={2} />,
    color: "orange",
    rotate: "rotate-[3deg]",
  },
];

const colorStyles = {
  blue: {
    card: "bg-[#dcecf8]",
    icon: "text-[#55a8ed]",
    underline: "bg-[#55a8ed]",
    dot: "bg-[#55a8ed]",
  },
  green: {
    card: "bg-[#eff5c9]",
    icon: "text-[#789d21]",
    underline: "bg-[#789d21]",
    dot: "bg-[#789d21]",
  },
  pink: {
    card: "bg-[#f9dff0]",
    icon: "text-[#e85d91]",
    underline: "bg-[#e85d91]",
    dot: "bg-[#e85d91]",
  },
  orange: {
    card: "bg-[#fde2ca]",
    icon: "text-[#f87519]",
    underline: "bg-[#f87519]",
    dot: "bg-[#f87519]",
  },
};

function ProgramCard({ program }) {
  const styles = colorStyles[program.color];

  return (
    <div
      className={`
        group relative
        ${styles.card}
        ${program.rotate}
        w-full
        rounded-[28px]
        border border-white/80
        p-[22px]
        shadow-[0_20px_45px_rgba(40,35,20,0.08)]
        transition-all duration-500
        hover:-translate-y-3
        hover:rotate-0
        hover:shadow-[0_28px_55px_rgba(40,35,20,0.13)]
      `}
    >
      {/* Icon */}
      <div
        className={`
          mb-5 flex h-[72px] w-[72px]
          items-center justify-center
          rounded-[20px]
          border border-white
          bg-white/70
          shadow-[0_6px_15px_rgba(0,0,0,0.06)]
          ${styles.icon}
        `}
      >
        {program.icon}
      </div>

      {/* Title */}
      <h3 className="text-[30px] font-black tracking-[-1.5px] text-[#101d1b]">
        {program.title}
      </h3>

      {/* Small underline */}
      <div
        className={`mt-1.5 h-[4px] w-[42px] rounded-full ${styles.underline}`}
      />

      {/* Description */}
      <p className="mt-3 min-h-[76px] text-[17px] leading-[1.5] text-[#35413e]">
        {program.description}
      </p>

      {/* Image */}
      <div className="mt-4 overflow-hidden rounded-[20px] border-[3px] border-white/90">
        <img
          src={program.image}
          alt={program.title}
          className="h-[205px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Bottom dot */}
      <div
        className={`
          absolute -bottom-[11px] -right-[2px]
          h-[25px] w-[25px]
          rounded-full
          border-2 border-white
          ${styles.dot}
        `}
      />
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fcf5e9] text-[#0d1b19]">
      {/* ================= BACKGROUND DECORATIONS ================= */}

      {/* Top-left organic shape */}
      <div className="pointer-events-none absolute -left-12 -top-16 h-[190px] w-[290px] rounded-[40%_60%_65%_35%] bg-[#e6eacb]/70 blur-[1px]" />

      <div className="pointer-events-none absolute left-0 top-0 h-[45px] w-[100px] rounded-br-[100%] border-b-2 border-white/90" />

      {/* Top dots */}
      <div className="absolute left-[170px] top-2 grid grid-cols-5 gap-[13px] opacity-50">
        {Array.from({ length: 15 }).map((_, i) => (
          <span
            key={i}
            className="h-[6px] w-[6px] rounded-full bg-[#d8c79e]"
          />
        ))}
      </div>

      {/* Bottom left leaves */}
      <div className="pointer-events-none absolute -bottom-10 -left-5 opacity-55">
        <div className="h-[130px] w-[55px] rotate-[25deg] rounded-[100%_0_100%_0] bg-[#aebf8b]" />
        <div className="absolute bottom-1 left-12 h-[100px] w-[45px] rotate-[65deg] rounded-[100%_0_100%_0] bg-[#b9ca91]" />
        <div className="absolute bottom-0 left-[75px] h-[70px] w-[35px] rotate-[85deg] rounded-[100%_0_100%_0] bg-[#9fb578]" />
      </div>

      {/* Bottom right soft shape */}
      <div className="pointer-events-none absolute -bottom-28 -right-16 h-[230px] w-[300px] rounded-[50%] bg-[#f5e4c9]" />

      {/* Bottom right dots */}
      <div className="absolute bottom-5 right-6 grid grid-cols-5 gap-[12px] opacity-50">
        {Array.from({ length: 15 }).map((_, i) => (
          <span
            key={i}
            className="h-[5px] w-[5px] rounded-full bg-[#d8c79e]"
          />
        ))}
      </div>

      {/* ================= CONTENT ================= */}

      <section className="relative mx-auto max-w-[1440px] px-6 pb-24 pt-24 sm:px-10 lg:px-14 lg:pt-32">
        {/* Header */}
        <div className="relative flex items-start justify-between gap-8">
          <div>
            <h1 className="text-[clamp(58px,7vw,108px)] font-black leading-[0.9] tracking-[-5px]">
              Pick a{" "}
              <span className="relative inline-block font-serif font-medium italic tracking-[-5px] text-[#347651]">
                program

                {/* Hand drawn underline */}
                <span className="absolute -bottom-[17px] left-[6%] h-[5px] w-[94%] rotate-[-2deg] rounded-[50%] bg-[#f47718]" />

                <span className="absolute -bottom-[7px] left-[12%] h-[3px] w-[82%] rotate-[1deg] rounded-[50%] bg-[#f47718]" />

                {/* Orange marks */}
                <span className="absolute -right-[10px] -top-[18px] h-[20px] w-[5px] rotate-[18deg] rounded-full bg-[#f47718]" />
                <span className="absolute -right-[27px] -top-[4px] h-[5px] w-[20px] rotate-[-42deg] rounded-full bg-[#f47718]" />
                <span className="absolute -right-[18px] top-[15px] h-[4px] w-[18px] rotate-[5deg] rounded-full bg-[#f47718]" />
              </span>
            </h1>

            <p className="mt-10 max-w-[570px] text-[20px] leading-[1.7] text-[#172320]">
              Choose the right path for your child and unlock
              <br className="hidden sm:block" />
              skills for a brighter future.
            </p>
          </div>

          {/* Button */}
          <button
            className="
              mt-2 flex shrink-0 items-center gap-6
              rounded-full
              bg-[#ff7416]
              px-10 py-5
              text-[18px] font-bold text-white
              shadow-[0_12px_25px_rgba(255,116,22,0.2)]
              transition-all duration-300
              hover:scale-105
              hover:bg-[#f66a0d]
            "
          >
            All programs
            <ArrowRight size={28} strokeWidth={2} />
          </button>
        </div>

        {/* Orange arrow doodle */}
        <div className="absolute right-16 top-[250px] hidden h-[100px] w-[100px] lg:block">
          <div className="absolute right-3 top-0 h-[60px] w-[40px] rounded-full border-r border-dashed border-[#ff7416]" />
          <div className="absolute right-[36px] top-[57px] h-[40px] w-[45px] rounded-bl-full border-b border-dashed border-[#ff7416]" />

          <div className="absolute bottom-0 left-1 h-[18px] w-[18px] rotate-45 border-b border-l border-[#ff7416]" />
        </div>

        {/* ================= CARDS ================= */}

        <div className="relative mt-24 grid grid-cols-1 items-start gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {/* Math */}
          <div className="relative mt-10 lg:mt-12">
            {/* Blue doodle */}
            <div className="absolute -left-8 -top-7 hidden h-14 w-14 lg:block">
              <span className="absolute left-4 top-2 h-[4px] w-[28px] rotate-[20deg] rounded-full bg-[#55a8ed]" />
              <span className="absolute left-1 top-5 h-[4px] w-[25px] rotate-[15deg] rounded-full bg-[#55a8ed]" />
              <span className="absolute left-7 top-8 h-[4px] w-[22px] rotate-[-18deg] rounded-full bg-[#55a8ed]" />
            </div>

            <ProgramCard program={programs[0]} />
          </div>

          {/* Science */}
          <div className="relative">
            {/* dashed circle */}
            <div className="pointer-events-none absolute -left-[90px] top-[45px] h-[90px] w-[180px] rounded-full border border-dashed border-[#789d21]" />

            <ProgramCard program={programs[1]} />
          </div>

          {/* English */}
          <div className="relative mt-6 lg:mt-16">
            <ProgramCard program={programs[2]} />

            {/* Pink dashed curve */}
            <div className="pointer-events-none absolute -bottom-5 left-[20px] h-[75px] w-[170px] rounded-full border-b border-dashed border-[#e85d91]" />
          </div>

          {/* Coding */}
          <div className="relative mt-2 lg:mt-7">
            <ProgramCard program={programs[3]} />

            {/* Orange doodle */}
            <div className="absolute -bottom-7 -right-5 hidden lg:block">
              <span className="absolute right-8 h-[25px] w-[5px] rotate-[12deg] rounded-full bg-[#ff7416]" />
              <span className="absolute right-0 top-2 h-[5px] w-[25px] rotate-[-25deg] rounded-full bg-[#ff7416]" />
              <span className="absolute right-[-8px] top-7 h-[5px] w-[25px] rotate-[-8deg] rounded-full bg-[#ff7416]" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}