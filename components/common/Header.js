import Image from "next/image";

export default function Header() {
  return (
    <header className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-3 lg:px-10">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/herosection/logo.png"
          alt="Bright Academy"
          width={160}
          height={45}
          className="h-22 w-auto"
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden items-center gap-9 lg:flex">
        <a
          href="#"
          className="relative text-[15px] font-medium text-[#ef7200]
            after:absolute after:-bottom-2 after:left-0 after:h-[2px]
            after:w-full after:bg-[#ef7200]"
        >
          Home
        </a>

        <a
          href="#"
          className="text-[15px] font-medium transition hover:text-[#ef7200]"
        >
          About Us
        </a>

        <a
          href="#"
          className="text-[15px] font-medium transition hover:text-[#ef7200]"
        >
          Courses
        </a>

        <a
          href="#"
          className="text-[15px] font-medium transition hover:text-[#ef7200]"
        >
          Results
        </a>

        <a
          href="#"
          className="text-[15px] font-medium transition hover:text-[#ef7200]"
        >
          Faculty
        </a>

        <a
          href="#"
          className="text-[15px] font-medium transition hover:text-[#ef7200]"
        >
          Contact
        </a>
      </nav>

      {/* Right Side */}
      <div className="hidden items-center gap-4 lg:flex">
        <button className="rounded-full bg-[#062c22] px-7 py-3 text-[15px] font-semibold text-white transition hover:bg-[#104638]">
          Book a Free Demo 🌱
        </button>
      </div>

      {/* Mobile */}
      <button className="text-2xl lg:hidden" aria-label="Open menu">
        ☰
      </button>
    </header>
  );
}
