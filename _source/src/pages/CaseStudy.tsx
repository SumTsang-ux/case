import { useMemo, useState } from "react";
import { getProject, pad, projects, type Gallery as GalleryData } from "../data/projects";
import Gallery from "../components/Gallery";
import Lightbox, { type LightboxItem } from "../components/Lightbox";
import SectionNav, { type NavItem } from "../components/SectionNav";
import SmartImage from "../components/SmartImage";
import { projectHref } from "../lib/router";

function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-32 border-t border-ink pt-4 lg:scroll-mt-24">
      <div className="mb-10 flex items-baseline gap-4">
        <span className="text-xs tabular-nums text-mute">{pad(index)}</span>
        <h2 className="font-display text-5xl leading-none md:text-6xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="max-w-3xl">
      {items.map((t) => (
        <li key={t} className="flex gap-4 border-b border-line py-4 text-lg leading-relaxed first:pt-0">
          <span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export default function CaseStudy({ slug }: { slug: string }) {
  const project = getProject(slug);
  const [open, setOpen] = useState<number | null>(null);

  const { galleries, offsets, flat } = useMemo(() => {
    const list: GalleryData[] = [...(project?.process?.galleries ?? []), ...(project?.solution?.galleries ?? [])];
    const offs: number[] = [];
    const items: LightboxItem[] = [];
    list.forEach((g) => {
      offs.push(items.length);
      g.images.forEach((im) => items.push({ file: im.file, caption: im.caption, group: g.title }));
    });
    return { galleries: list, offsets: offs, flat: items };
  }, [project]);

  if (!project) return null;

  const p = project;
  const processCount = p.process?.galleries.length ?? 0;
  const render = (g: GalleryData, i: number) => (
    <Gallery key={g.title} gallery={g} offset={offsets[i]} onOpen={setOpen} />
  );

  const s = p.summary;
  const summaryRows: [string, string | undefined][] = [
    ["Role", s.role],
    ["Problem", s.problem],
    ["Process", s.process],
    ["Solution", s.solution],
    ["Outcome", s.outcome],
  ];

  // Build the left navigator from whichever sections have content
  const nav: NavItem[] = [{ id: "overview", label: "Overview" }];
  if (p.problem?.length) nav.push({ id: "problem", label: "Problem" });
  if (p.role?.length) nav.push({ id: "role", label: "Role" });
  if (p.process) nav.push({ id: "process", label: "Process" });
  if (p.solution) nav.push({ id: "solution", label: "Solution" });
  if (p.outcomes?.length) nav.push({ id: "outcomes", label: "Outcomes" });
  const n = (id: string) => nav.findIndex((x) => x.id === id) + 1;

  const idx = projects.findIndex((x) => x.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  const meta: [string, React.ReactNode][] = [
    ["Client", p.client],
    ["Date", p.year],
    [
      "Type of work",
      <ul key="t" className="space-y-1">
        {p.type.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>,
    ],
  ];
  if (p.links?.length)
    meta.push([
      "Links",
      <ul key="l" className="space-y-1">
        {p.links.map((l) => (
          <li key={l.url}>
            <a href={l.url} target="_blank" rel="noreferrer" className="link-line">
              {l.label} ↗
            </a>
          </li>
        ))}
      </ul>,
    ]);

  return (
    <main>
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Title block */}
        <div className="pt-10 md:pt-14">
          <a href="#/work" className="text-sm text-mute transition-colors hover:text-ink">
            ← All work
          </a>
          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.18em] text-mute">{p.category}</p>
          <h1 className="mt-5 max-w-5xl font-display text-[clamp(3rem,8vw,7.5rem)] leading-[0.92] tracking-[-0.02em]">
            {p.title}
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-mute md:text-xl">{p.intro}</p>
        </div>

        {/* Meta */}
        <dl className="mt-12 grid gap-8 border-t border-line pt-6 sm:grid-cols-2 lg:grid-cols-4">
          {meta.map(([k, v]) => (
            <div key={k}>
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-mute">{k}</dt>
              <dd className="mt-2 text-[15px] leading-snug">{v}</dd>
            </div>
          ))}
        </dl>

        {/* Hero */}
        <SmartImage
          file={p.cover}
          width={2000}
          eager
          alt={p.title}
          className="mt-12 aspect-[16/9] w-full bg-soft object-cover md:aspect-[16/8]"
        />

        {/* Body wrapper (also the sticky boundary for the mobile section bar) */}
        <div className="mt-2">
          <SectionNav items={nav} variant="mobile" />

        {/* Left navigator + content */}
        <div className="mt-12 grid gap-16 lg:mt-20 lg:grid-cols-[190px_minmax(0,1fr)] lg:gap-14 xl:gap-24">
          <SectionNav items={nav} variant="desktop" />

          <div className="space-y-24 md:space-y-32">
            <Section id="overview" index={1} title="Overview">
              <p className="mb-6 text-sm text-mute">The short version — readable in under a minute.</p>
              <dl>
                {summaryRows
                  .filter(([, v]) => v)
                  .map(([k, v]) => (
                    <div key={k} className="grid gap-1 border-t border-line py-5 md:grid-cols-[150px_1fr] md:gap-8">
                      <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-accent md:pt-1.5">{k}</dt>
                      <dd className="max-w-3xl text-lg leading-relaxed">{v}</dd>
                    </div>
                  ))}
              </dl>
            </Section>

            {p.problem?.length ? (
              <Section id="problem" index={n("problem")} title="Problem">
                <Bullets items={p.problem} />
              </Section>
            ) : null}

            {p.role?.length ? (
              <Section id="role" index={n("role")} title="My role">
                <Bullets items={p.role} />
              </Section>
            ) : null}

            {p.process ? (
              <Section id="process" index={n("process")} title="Process">
                {p.process.text?.length ? (
                  <div className="mb-14">
                    <Bullets items={p.process.text} />
                  </div>
                ) : null}
                {galleries.slice(0, processCount).map((g, i) => render(g, i))}
              </Section>
            ) : null}

            {p.solution ? (
              <Section id="solution" index={n("solution")} title="Solution">
                {p.solution.text?.length ? (
                  <div className="mb-14">
                    <Bullets items={p.solution.text} />
                  </div>
                ) : null}
                {galleries.slice(processCount).map((g, i) => render(g, i + processCount))}
              </Section>
            ) : null}

            {p.outcomes?.length ? (
              <Section id="outcomes" index={n("outcomes")} title="Outcomes">
                <Bullets items={p.outcomes} />
              </Section>
            ) : null}

            {/* Next project */}
            <div className="border-t border-ink pt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mute">Next project</p>
              <a
                href={projectHref(next.slug)}
                className="mt-6 block font-display text-4xl leading-tight transition-colors hover:text-accent md:text-6xl"
              >
                {next.title} ↗
              </a>
            </div>
          </div>
        </div>
        </div>
      </div>

      {open !== null && flat.length > 0 && (
        <Lightbox items={flat} index={open} onClose={() => setOpen(null)} onChange={setOpen} />
      )}
    </main>
  );
}
