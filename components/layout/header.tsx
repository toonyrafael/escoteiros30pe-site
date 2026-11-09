"use client"

import { cva } from "class-variance-authority";
import { useEffect, useState } from "react";
import HeaderLink from "@/components/headerLink";
import Icon from "@/components/icon";

const headerVariants = cva(`
  fixed w-full flex font-sans z-50 tracking-[1px] transition-transform duration-1200
  `, {
  variants: {
    style: {
      classic: `
        justify-start gap-10 px-10
      `,
      new: `
        bg-black/60 backdrop-blur-md border-b border-white/10 px-10 py-2 box-border
        justify-center items-center border-solid
      `,
    },
    scrollBehavior: {
      classic: ``,
      new: ``,
      alt: ``,
    },
    scrolled: {
      true: ``,
      false: ``,
    },
  },
  compoundVariants: [
    { scrollBehavior: "classic", scrolled: false, className: "bg-linear-180 from-black to-transparent py-4" },
    { scrollBehavior: "classic", scrolled: true, className: "bg-black-2 py-2" },

    { scrollBehavior: "new", scrolled: false, className: "translate-y-0" },
    { scrollBehavior: "new", scrolled: true, className: "-translate-y-full" },
  ],
  defaultVariants: {
    style: "classic",
    scrollBehavior: "classic"
  }
});

interface HeaderProps {
  style?: "classic" | "new"
  scrollBehavior?: "classic" | "new" | "alt"
  logoWidth?: number
  logoHeight?: number
  scrollLimit?: number
  logoScrollBehavior?: "classic" | "none"
}

export default function Header({
  style,
  scrollBehavior,
  logoScrollBehavior,
  logoHeight = 80,
  logoWidth = 65,
  scrollLimit = 150,
}: HeaderProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={headerVariants({ style: style, scrollBehavior: scrollBehavior, scrolled: scrollY >= scrollLimit })}>
      <nav>
        <ul className="flex justify-center items-center gap-9">
          <li><Icon image={'/logo.png'} href="/inicio" alt="Logo do grupo" height={logoHeight} width={logoWidth} isScrolled={scrollY >= scrollLimit} scrollBehavior={logoScrollBehavior} /></li>
          <li><HeaderLink href='/inicio'>INÍCIO</HeaderLink></li>
          <li><HeaderLink href='/grupo'>O GRUPO</HeaderLink></li>
          <li><HeaderLink href='/atividades'>ATIVIDADES</HeaderLink></li>
          <li><HeaderLink href='/galeria'>GALERIA</HeaderLink></li>
          <li><HeaderLink href='/quero-ser-escoteiro'>QUERO SER ESCOTEIRO DO 30º</HeaderLink></li>
          <li><HeaderLink href='/downloads'>DOWNLOADS</HeaderLink></li>
          <li><HeaderLink href='/contato'>CONTATO</HeaderLink></li>
        </ul>
      </nav>
    </header>
  );

}
