import { pad, projects } from "../data/projects";
import SmartImage from "../components/SmartImage";
import { projectHref } from "../lib/router";

const skills = [
  {
    title: "UX research",
    text: "Research with healthcare professionals to understand real-world workflows and needs.",
  },
  {
    title: "UX/UI design",
    text: "User-centered interfaces and UI systems, from wireframes through to polished screens.",
  },
  {
    title: "Responsive web & mobile layouts",
    text: "Responsive websites, e-commerce experiences and mobile apps.",
  },
  {
    title: "Prototyping",
    text: "Interactive prototypes and wireframes that make ideas testable early.",
  },
  {
    title: "Cross-functional IT collaboration",
    text: "Balancing user needs, system constraints and implementation feasibility together with IT.",
  },
  {
    title: "AI-assisted workflows",
    text: "Figma Make and AI-assisted coding to turn ideas into functional web prototypes.",
  },
];

export default function Home() {
  const [feature, ...rest] = projects;

  return (
    <main>
      {/* Intro */}
      <section className="mx-auto max-w-[1400px] px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mute">Senior UX/UI · Product Designer</p>
        <h1 className="mt-6 max-w-[16ch] font-display text-[clamp(3.5rem,11vw,10.5rem)] leading-[0.9] tracking-[-0.02em]">
          Digital products, made <em className="text-accent">clear.</em>
        </h1>

        <div className="mt-14 grid gap-10 border-t border-line pt-8 md:grid-cols-12">
          <p className="max-w-xl text-lg leading-relaxed md:col-span-6 md:col-start-1 md:text-xl">
            Senior UI/UX Designer with 15 years of experience in digital design, specializing in user-centered UI,
            responsive web/mobile experiences, and interactive prototyping.
          </p>
          <p className="max-w-md leading-relaxed text-mute md:col-span-4 md:col-start-8">
            Recently expanded into AI-assisted design and rapid prototyping, using Figma Make and AI-assisted coding to
            turn ideas into functional web prototypes.
          </p>
        </div>
      </section>

      {/* Selected work */}
      <section id="work" className="mx-auto max-w-[1400px] scroll-mt-16 px-6 md:px-10">
        <div className="flex items-baseline justify-between border-t border-ink pt-4">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em]">Selected work</h2>
          <span className="text-xs tabular-nums text-mute">01 — {pad(projects.length)}</span>
        </div>

        <div className="mt-10 grid gap-x-8 gap-y-16 md:grid-cols-2 md:gap-y-24">
          {/* Featured */}
          <a href={projectHref(feature.slug)} className="group block md:col-span-2">
            <SmartImage
              file={feature.cover}
              width={1800}
              eager
              alt={feature.title}
              className="aspect-[16/8] w-full bg-soft object-cover transition-opacity group-hover:opacity-90"
            />
            <div className="mt-5 grid gap-2 md:grid-cols-12 md:gap-8">
              <p className="text-sm tabular-nums text-mute md:col-span-1">01</p>
              <h3 className="font-display text-4xl leading-none md:col-span-6 md:text-6xl">
                {feature.title} <span className="text-accent">↗</span>
              </h3>
              <p className="text-[15px] text-mute md:col-span-5">
                {feature.category}
                <br />
                {feature.tags.join(" · ")} · {feature.year}
              </p>
            </div>
          </a>

          {rest.map((p, i) => (
            <a
              key={p.slug}
              href={projectHref(p.slug)}
              className={`group block ${i % 2 === 1 ? "md:mt-28" : ""}`}
            >
              <SmartImage
                file={p.cover}
                width={1100}
                alt={p.title}
                className="aspect-[4/3] w-full bg-soft object-cover transition-opacity group-hover:opacity-90"
              />
              <div className="mt-5 flex items-start justify-between gap-6">
                <div>
                  <p className="text-sm tabular-nums text-mute">{pad(i + 2)}</p>
                  <h3 className="mt-1 font-display text-3xl leading-tight md:text-4xl">{p.title}</h3>
                  <p className="mt-2 text-[15px] text-mute">
                    {p.category} · {p.year}
                  </p>
                </div>
                <span className="pt-6 text-2xl text-accent">↗</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Key skills */}
      <section className="mx-auto mt-32 max-w-[1400px] px-6 md:mt-44 md:px-10">
        <div className="grid gap-10 border-t border-ink pt-4 md:grid-cols-12">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] md:col-span-3">Key skills</h2>
          <ul className="md:col-span-9">
            {skills.map((s, i) => (
              <li
                key={s.title}
                className="grid gap-2 border-b border-line py-6 first:pt-0 md:grid-cols-9 md:gap-8"
              >
                <span className="text-sm tabular-nums text-mute md:col-span-1">{pad(i + 1)}</span>
                <h3 className="font-display text-3xl leading-tight md:col-span-4 md:text-4xl">{s.title}</h3>
                <p className="leading-relaxed text-mute md:col-span-4">{s.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
