import { useEffect, useRef, useState } from "react";
import SmartImage from "./SmartImage";

export interface LightboxItem {
  file: string;
  caption?: string;
  group: string;
}

interface Props {
  items: LightboxItem[];
  index: number;
  onClose: () => void;
  onChange: (i: number) => void;
}

export default function Lightbox({ items, index, onClose, onChange }: Props) {
  const item = items[index];
  const scroller = useRef<HTMLDivElement>(null);
  const [tall, setTall] = useState(false);
  const count = items.length;

  const go = (d: number) => onChange((index + d + count) % count);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChange((index + 1) % count);
      if (e.key === "ArrowLeft") onChange((index - 1 + count) % count);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [index, count, onClose, onChange]);

  useEffect(() => {
    scroller.current?.scrollTo({ top: 0 });
  }, [index]);

  const btn =
    "flex h-11 w-11 items-center justify-center border border-line bg-white text-xl transition-colors hover:border-ink";

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white" role="dialog" aria-modal="true" aria-label="Image viewer">
      <div className="flex items-center justify-between border-b border-line px-5 py-3 md:px-8">
        <p className="text-sm">
          <span className="font-medium">{item.group}</span>
          <span className="ml-3 text-mute">
            {index + 1} / {count}
          </span>
        </p>
        <button type="button" onClick={onClose} className="text-sm font-medium hover:text-accent">
          Close ✕
        </button>
      </div>

      <div ref={scroller} className="relative flex-1 overflow-auto bg-soft">
        <div className="flex min-h-full items-center justify-center p-4 md:p-10">
          <SmartImage
            key={item.file}
            file={item.file}
            width={2200}
            alt={item.caption || item.group}
            eager
            onLoad={(e) => setTall(e.currentTarget.naturalHeight / e.currentTarget.naturalWidth > 1.25)}
            className={
              tall
                ? "h-auto w-full max-w-[1000px] bg-white shadow-sm"
                : "max-h-[calc(100vh-190px)] w-auto max-w-full bg-white object-contain shadow-sm"
            }
          />
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 border-t border-line px-5 py-3 md:px-8">
        <p className="min-w-0 truncate text-sm text-mute">{item.caption}</p>
        <div className="flex shrink-0 gap-2">
          <button type="button" onClick={() => go(-1)} className={btn} aria-label="Previous image">
            ←
          </button>
          <button type="button" onClick={() => go(1)} className={btn} aria-label="Next image">
            →
          </button>
        </div>
      </div>
    </div>
  );
}
