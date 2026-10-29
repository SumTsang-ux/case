const expertise = ["Web design", "UX / Branding", "E-commerce", "Illustration"];

const approach = [
  "UX research",
  "UX/UI design",
  "Responsive web & mobile layouts",
  "Prototyping",
  "Cross-functional IT collaboration",
  "AI-assisted workflows",
];

const clients = [
  "Hospital Authority",
  "AEON Credit Service (Asia) Co., Ltd.",
  "Watsons Water",
  "St. Honore",
  "Bliss Concept",
  "Root Direct",
];

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-4 border-t border-line py-10 md:grid-cols-12 md:gap-10">
      <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-mute md:col-span-3">{label}</h2>
      <div className="md:col-span-9">{children}</div>
    </div>
  );
}

export default function About() {
  return (
    <main className="mx-auto max-w-[1400px] px-6 pt-16 md:px-10 md:pt-24">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mute">About</p>
      <h1 className="mt-6 max-w-5xl font-display text-[clamp(3rem,8.5vw,8rem)] leading-[0.92] tracking-[-0.02em]">
        Hello, I’m Sum Tsang — a designer who makes <em className="text-accent">complex things clear.</em>
      </h1>

      <div className="mt-20 border-b border-line">
        <Row label="Profile">
          <p className="max-w-3xl text-xl leading-relaxed md:text-2xl">
            Senior UI/UX Designer with 15 years of experience in digital design, specializing in user-centered UI,
            responsive web/mobile experiences, and interactive prototyping.
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-mute">
            Recently expanded into AI-assisted design and rapid prototyping, using Figma Make and AI-assisted coding to
            turn ideas into functional web prototypes. Currently exploring AI-assisted product prototyping and hands-on
            web workflows.
          </p>
        </Row>

        <Row label="Background">
          <p className="max-w-3xl text-lg leading-relaxed">
            Graduated from PolyU with a degree in Design. Early career included 6 years of solid experience in the
            digital media industry, responsible for graphic, UI &amp; UX design — especially designing websites, mobile
            apps, e-newsletters, promotion banners, animated e-cards and presentations — plus one year of experience
            working with a CMS.
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-mute">
            Familiar with the Adobe Creative Suite, which prepared me to meet the demands of the design field.
          </p>
        </Row>

        <Row label="What I do">
          <ul className="grid gap-x-10 sm:grid-cols-2">
            {approach.map((a, i) => (
              <li key={a} className="flex items-baseline gap-4 border-b border-line py-4 first:pt-0 sm:[&:nth-child(2)]:pt-0">
                <span className="text-sm tabular-nums text-mute">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display text-2xl md:text-3xl">{a}</span>
              </li>
            ))}
          </ul>
        </Row>

        <Row label="Expertise">
          <ul className="flex flex-wrap gap-3">
            {expertise.map((e) => (
              <li key={e} className="border border-ink px-4 py-2 text-[15px]">
                {e}
              </li>
            ))}
          </ul>
        </Row>

        <Row label="Selected clients">
          <ul className="grid gap-x-10 sm:grid-cols-2">
            {clients.map((c) => (
              <li key={c} className="border-b border-line py-3 text-lg">
                {c}
              </li>
            ))}
          </ul>
        </Row>
      </div>
    </main>
  );
}
