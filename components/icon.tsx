import { cva } from "class-variance-authority";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const IconVariants = cva(
  "transition-all duration-400 cursor-pointer hover:scale-115 hover:brightness-115 active:scale-95",
  {
    variants: {
      scrollBehavior: {
        classic: ``,
        none: ``,
      },
      scrolled: {
        true: ``,
        false: ``,
      },
    },
    compoundVariants: [
      { scrollBehavior: "classic", scrolled: false, className: "w-[65px] h-auto" },
      { scrollBehavior: "classic", scrolled: true, className: "w-[40px] h-auto" },
    ],
    defaultVariants: {
      scrolled: false,
      scrollBehavior: "classic"
    },
  }
);

interface IconProps {
  isScrolled: boolean;
  scrollBehavior?: "classic" | "none"
  image: string | StaticImageData;
  alt: string;
  href: string;
  width: number;
  height: number;
}

export default function Icon({
  scrollBehavior,
  isScrolled,
  width,
  height,
  href,
  image,
  alt
}: IconProps) {
  return (
    <Link href={href}>
      <Image
        className={IconVariants({ scrolled: isScrolled, scrollBehavior: scrollBehavior })}
        src={image}
        width={width}
        height={height}
        alt={alt}
      />
    </Link>
  );
}