import { useState } from "react";
import { local, original, resized } from "../lib/images";

interface Props {
  file: string;
  width?: number;
  alt: string;
  className?: string;
  eager?: boolean;
  onLoad?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
}

/** Image that falls back from local img/ folder -> resized -> original -> a clean placeholder. */
export default function SmartImage({ file, width = 1200, alt, className = "", eager, onLoad }: Props) {
  const sources = [local(file), resized(file, width), original(file)];
  const [step, setStep] = useState(0);

  if (step >= sources.length) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-soft text-xs uppercase tracking-[0.18em] text-mute ${className}`}
        style={{ minHeight: 160 }}
      >
        Image placeholder
      </div>
    );
  }

  return (
    <img
      key={sources[step]}
      src={sources[step]}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onError={() => setStep((s) => s + 1)}
      onLoad={onLoad}
      className={className}
    />
  );
}
