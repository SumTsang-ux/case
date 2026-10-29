import type { Route } from "../lib/router";

const link = "text-[15px] font-medium transition-colors hover:text-accent";

export default function Header({ route }: { route: Route }) {
  const onWork = route.name === "home" || route.name === "work" || route.name === "project";
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:px-10">
        <a href="#/" className="text-[17px] font-semibold tracking-tight">
          Sum Tsang
        </a>
        <nav className="flex items-center gap-8" aria-label="Main">
          <a href="#/work" className={`${link} ${onWork ? "text-ink" : "text-mute"}`}>
            Work
          </a>
          <a href="#/about" className={`${link} ${route.name === "about" ? "text-ink" : "text-mute"}`}>
            About
          </a>
        </nav>
      </div>
    </header>
  );
}
