import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Real photograph rendered through next/image (optimized, no layout shift).
 * The parent sets the aspect ratio via className; the image fills and covers.
 */
export function Photo({
  src,
  alt,
  className,
  sizes = "(max-width: 1024px) 100vw, 50vw",
  priority = false,
  position = "center",
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  position?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden rounded-2xl", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
        style={{ objectPosition: position }}
      />
    </div>
  );
}
