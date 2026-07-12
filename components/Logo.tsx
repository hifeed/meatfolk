import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  href?: string;
  className?: string;
  iconSize?: number;
  textWidth?: number;
  textHeight?: number;
}

export function Logo({
  href,
  className,
  iconSize = 40,
  textWidth = 110,
  textHeight = 32,
}: LogoProps) {
  const content = (
    <span className={`flex items-center gap-2 ${className ?? ""}`}>
      <Image
        src="/14.png"
        alt="Meatfolk"
        width={iconSize}
        height={iconSize}
        className="object-contain"
        priority
      />
      <Image
        src="/15.png"
        alt="Meatfolk"
        width={textWidth}
        height={textHeight}
        className="object-contain"
        priority
      />
    </span>
  );

  if (href) {
    return (
      <Link href={href} aria-label="Meatfolk Home">
        {content}
      </Link>
    );
  }

  return content;
}