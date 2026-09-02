import Image from "next/image";
import { siteConfig } from "@/config/site";

export type LogoVariant =
  | "dark"
  | "light"
  | "white"
  | "dark-with-name"
  | "light-with-name"
  | "white-with-name";

export function LogoMark({
  size = 28,
  variant,
  shellColor,
  className = "",
}: {
  size?: number;
  variant?: LogoVariant;
  shellColor?: string;
  className?: string;
}) {
  let selectedVariant = variant || "dark";
  if (!variant && shellColor) {
    if (
      shellColor.toLowerCase() === "#ffffff" ||
      shellColor.toLowerCase() === "white" ||
      shellColor.toLowerCase() === "var(--paper)"
    ) {
      selectedVariant = "light";
    }
  }

  let src = "/logo/dark-grey-green-icon.png";
  let alt = `${siteConfig.name} Icon`;

  switch (selectedVariant) {
    case "light":
      src = "/logo/white-green-icon.png";
      break;
    case "white":
      src = "/logo/all-white-icon.png";
      break;
    case "dark-with-name":
      src = "/logo/dark-grey-with-name.png";
      alt = `${siteConfig.name} Logo`;
      break;
    case "light-with-name":
      src = "/logo/white-green-with-name.png";
      alt = `${siteConfig.name} Logo`;
      break;
    case "white-with-name":
      src = "/logo/all-white-with-name.png";
      alt = `${siteConfig.name} Logo`;
      break;
    default:
      src = "/logo/dark-grey-green-icon.png";
      break;
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`inline-block object-contain ${className}`}
      style={{ width: size, height: size }}
      priority
    />
  );
}
