"use client";

import Image from "next/image";
import { useState } from "react";

interface BeforeAfterImageProps {
  src: string;
  alt: string;
  type: "before" | "after";
}

export default function BeforeAfterImage({
  src,
  alt,
  type,
}: BeforeAfterImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`aspect-video rounded-lg border flex items-center justify-center ${
          type === "before"
            ? "bg-slate-200 border-slate-300"
            : "bg-sky-200 border-sky-300"
        }`}
      >
        <span
          className={`font-medium ${
            type === "before" ? "text-slate-500" : "text-sky-700"
          }`}
        >
          {type === "before" ? "Before" : "After"}
        </span>
      </div>
    );
  }

  return (
    <div className="aspect-video rounded-lg border overflow-hidden relative bg-slate-200 border-slate-300">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        onError={() => setHasError(true)}
      />
    </div>
  );
}

