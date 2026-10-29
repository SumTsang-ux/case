import { RESUME_URL } from "../lib/images";

/**
 * The ONE place contact details live on the whole site.
 * Rendered on the About page only (see App.tsx) — not on Work or case study pages.
 */
export default function Footer() {
  return (
    <footer id="contact" className="mt-32 border-t border-ink bg-white">
      <div className="mx-auto max-w-[1400px] px-6 pb-10 pt-16 md:px-10 md:pt-24">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mute">Contact</p>
        <h2 className="mt-5 max-w-4xl font-display text-[clamp(2.75rem,8vw,7rem)] leading-[0.95] tracking-tight">
          Let’s create something <em className="text-accent">amazing</em> together.
        </h2>

        <dl className="mt-14 grid gap-10 border-t border-line pt-8 sm:grid-cols-3">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-mute">Email</dt>
            <dd className="mt-3 text-lg">
              <a href="mailto:sumtsang@gmail.com" className="link-line">
                sumtsang@gmail.com
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-mute">Phone</dt>
            <dd className="mt-3 text-lg">
              <a href="tel:+85291335505" className="link-line">
                (852) 9133 5505
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-mute">Resume</dt>
            <dd className="mt-3 text-lg">
              <a href={RESUME_URL} target="_blank" rel="noreferrer" className="link-line">
                Download PDF ↗
              </a>
            </dd>
          </div>
        </dl>

        <p className="mt-20 text-sm text-mute">© {new Date().getFullYear()} Sum Tsang</p>
      </div>
    </footer>
  );
}
