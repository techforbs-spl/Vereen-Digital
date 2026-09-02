import Image from "next/image";
import { siteConfig } from "@/config/site";

export type LogoVariant =
  | "dark"
  | "light"
  | "white"
  | "full"
  | "full-light"
  | "dark-with-name"
  | "light-with-name"
  | "white-with-name";

export function LogoMark({
  size = 32,
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

  let src = "/logo/vereen-icon.png";
  let alt = `${siteConfig.name} Logo`;

  switch (selectedVariant) {
    case "light":
    case "white":
      src = "/logo/vereen-icon.png";
      break;
    case "full":
    case "dark-with-name":
      src = "/logo/vereen-full-logo.png";
      break;
    case "full-light":
    case "light-with-name":
    case "white-with-name":
      src = "/logo/vereen-full-logo-light.png";
      break;
    default:
      src = "/logo/vereen-icon.png";
      break;
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`inline-block object-contain ${className}`}
      style={{ width: "auto", height: size }}
      priority
    />
  );
}

export default LogoMark;
