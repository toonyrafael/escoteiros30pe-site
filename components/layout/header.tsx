"use client"

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { useState, useEffect } from "react";


export default function Header() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const pathname = usePathname();

  const linkClass = (href: string) =>
  `no-underline font-sans font-bold text-[14px] tracking-[1px] pb-1.5 border-b-2 transition-colors hover:text-main hover:border-b-main ${
      pathname === href
      ? "text-main border-b-main"
      : "text-white border-transparent"
  }`;

  const clearBar = () => `${scrollY < 150 ? 'translate-y-0' : '-translate-y-full'}`;


  return (
      <header className={`
        fixed bg-black/60 backdrop-blur-md border-b border-white/10 w-full flex px-10 py-2 box-border 
        z-1000 justify-center items-center border-solid transition-transform duration-1200
        ${clearBar()}
      `}>
        <nav>
          <ul className="flex justify-center items-center gap-7.5">
            <li><Link href='/inicio'><Image className="transition-transform cursor-pointer hover:scale-115 hover:brightness-115 active:scale-95 w-auto h-auto duration-350" src={`/logo.png`} width={50} height={50} alt="Logo do grupo escoteiro mathias de alburguerque" /></Link></li>
            <li><Link href='/inicio#ramos' className={linkClass('/inicio')}>INÍCIO</Link></li>
            <li><Link href='/grupo/' className={linkClass('/grupo')}>O GRUPO</Link></li>
            <li><Link href='/atividades/' className={linkClass('/atividades')}>ATIVIDADES</Link></li>
            <li><Link href='/galeria/' className={linkClass('/galeria')}>GALERIA</Link></li>
            <li><Link href='/quero-ser-escoteiro/' className={linkClass('/quero-ser-escoteiro')}>QUERO SER ESCOTEIRO DO 30º</Link></li>
            <li><Link href='/downloads/' className={linkClass('/downloads')}>DOWNLOADS</Link></li>
            <li><Link href='/contato/' className={linkClass('/contato')}>CONTATO</Link></li>
          </ul>
        </nav>
      </header>
  );
}