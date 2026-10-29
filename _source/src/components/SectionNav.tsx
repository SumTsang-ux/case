import { useEffect, useState } from "react";

export interface NavItem {
  id: string;
  label: string;
}

const jump = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

/**
 * Left mini-navigator for case studies.
 * Desktop: sticky vertical list on the left. Mobile/tablet: sticky horizontal bar under the header.
 */
export default function SectionNav({ items, variant }: { items: NavItem[]; variant: "desktop" | "mobile" }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const onScroll = () => {
      const line = window.innerHeight * 0.3;
      let current = items[0]?.id;
      for (const it of items) {
        const el = document.getElementById(it.id);
        if (el && el.getBoundingClientRect().top <= line) current = it.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [items]);

  if (variant === "desktop")
    return (
      <nav aria-label="Case study sections" className="sticky top-28 hidden self-start lg:block">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-mute">On this page</p>
        <ul className="space-y-1 border-l border-line">
          {items.map((it, i) => {
            const on = it.id === active;
            return (
              <li key={it.id}>
                <button
                  type="button"
                  onClick={() => jump(it.id)}
                  className={`-ml-px flex w-full items-center gap-3 border-l-2 py-2 pl-4 text-left text-[15px] transition-colors ${
                    on ? "border-accent font-semibold text-ink" : "border-transparent text-mute hover:text-ink"
                  }`}
                >
                  <span className="w-5 text-xs tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  {it.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    );

  return (
      <nav
        aria-label="Case study sections"
        className="sticky top-16 z-30 -mx-6 border-b border-line bg-white px-6 md:-mx-10 md:px-10 lg:hidden"
      >
        <ul className="no-scrollbar flex gap-6 overflow-x-auto">
          {items.map((it) => {
            const on = it.id === active;
            return (
              <li key={it.id} className="shrink-0">
                <button
                  type="button"
                  onClick={() => jump(it.id)}
                  className={`border-b-2 py-3.5 text-sm ${
                    on ? "border-accent font-semibold text-ink" : "border-transparent text-mute"
                  }`}
                >
                  {it.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
  );
}
