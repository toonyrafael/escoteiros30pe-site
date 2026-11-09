"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cva } from "class-variance-authority";

const linkVariants = cva(
  `font-sans font-bold tracking-[1px] duration-200
  border-b-2 transition-colors hover:text-main hover:border-b-main`,
  {
    variants: {
      active: {
        true: "text-main border-b-main",
        false: "text-white border-transparent",
      },
      size: {
        sm: "text-[14px]",
        md: "text-[16px]",
        xl: "text-[18px]"
      },
      bold: {
        none: "",
        bold: "text-[700]",
        extra: "text-[800]"
      }
    },
    defaultVariants: {
      active: false,
      size: 'sm',
      bold: "extra"
    },
  }
);

interface HeaderLinkProps extends React.ComponentProps<typeof Link> {
  href: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "xl";
  bold?: "none" | "bold" | "extra";
}

export default function HeaderLink({
  href,
  children,
  size,
  bold,
  ...props
}: HeaderLinkProps) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link href={href} className={linkVariants({ active: isActive, size: size, bold: bold })} {...props}>
      {children}
    </Link>
  );
}