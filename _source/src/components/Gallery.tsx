import { useEffect, useRef, useState } from "react";
import type { Gallery as GalleryData, Img } from "../data/projects";
import SmartImage from "./SmartImage";

interface Props {
  gallery: GalleryData;
  /** index of this gallery's first image in the case study's full image list */
  offset: number;
  onOpen: (i: number) => void;
}

/* A single clickable image. One <button>, one <img> — no nested hover wrappers. */
function Tile({
  img,
  alt,
  onClick,
  imgClass,
  width = 1000,
}: {
  img: Img;
  alt: string;
  onClick: () => void;
  imgClass: string;
  width?: number;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="block w-full cursor-zoom-in overflow-hidden bg-soft transition-opacity hover:opacity-85"
      aria-label={`Open image: ${img.caption || alt}`}
    >
      <SmartImage file={img.file} width={width} alt={img.caption || alt} className={imgClass} />
    </button>
  );
}

function Caption({ text }: { text?: string }) {
  if (!text) return null;
  return <figcaption className="mt-3 text-sm text-mute">{text}</figcaption>;
}

function Video({ id, title }: { id: string; title: string }) {
  return (
    <div className="aspect-video w-full bg-soft">
      <iframe
        className="h-full w-full"
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

function Carousel({ gallery, offset, onOpen }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  const update = () => {
    const el = ref.current;
    if (!el) return;
    setEdge({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 8 });
  };
  useEffect(update, []);

  const move = (dir: number) => {
    const el = ref.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  const arrow =
    "flex h-11 w-11 items-center justify-center border border-line bg-white text-xl transition-colors hover:border-ink disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-line";

  return (
    <div>
      <div
        ref={ref}
        onScroll={update}
        className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 md:mx-0 md:px-0"
      >
        {gallery.images.map((img, i) => (
          <figure key={img.file} className="w-[78%] shrink-0 snap-start sm:w-[46%] xl:w-[36%]">
            <Tile
              img={img}
              alt={gallery.title}
              onClick={() => onOpen(offset + i)}
              width={800}
              imgClass="aspect-[4/5] w-full object-cover object-top"
            />
            <Caption text={`${String(i + 1).padStart(2, "0")} — ${img.caption ?? ""}`} />
          </figure>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-between">
        <p className="text-sm text-mute">{gallery.images.length} images</p>
        <div className="flex gap-2">
          <button type="button" className={arrow} onClick={() => move(-1)} disabled={edge.start} aria-label="Previous">
            ←
          </button>
          <button type="button" className={arrow} onClick={() => move(1)} disabled={edge.end} aria-label="Next">
            →
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Gallery(props: Props) {
  const { gallery, offset, onOpen } = props;
  const { layout, images, cols = 2 } = gallery;

  const gridCols = cols === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2";

  let body: React.ReactNode = null;

  if (layout === "carousel") {
    body = <Carousel {...props} />;
  } else if (layout === "full") {
    body = (
      <div className="space-y-8">
        {images.map((img, i) => (
          <figure key={img.file}>
            <Tile
              img={img}
              alt={gallery.title}
              width={1600}
              onClick={() => onOpen(offset + i)}
              imgClass="h-auto max-h-[760px] w-full object-contain"
            />
            <Caption text={img.caption} />
          </figure>
        ))}
      </div>
    );
  } else if (layout === "split") {
    body = (
      <div className="space-y-14">
        {gallery.video && (
          <figure>
            <Video id={gallery.video} title={gallery.title} />
          </figure>
        )}
        {images.map((img, i) => (
          <figure key={img.file} className="grid items-end gap-4 md:grid-cols-12 md:gap-10">
            <div className={`md:col-span-8 ${i % 2 ? "md:order-2" : ""}`}>
              <Tile
                img={img}
                alt={gallery.title}
                width={1400}
                onClick={() => onOpen(offset + i)}
                imgClass="h-auto max-h-[640px] w-full object-cover object-top"
              />
            </div>
            <figcaption className={`md:col-span-4 ${i % 2 ? "md:order-1" : ""}`}>
              <span className="font-display text-4xl text-accent">{String(offset + i + 1).padStart(2, "0")}</span>
              <span className="mt-2 block text-[15px] text-mute">{img.caption}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    );
  } else if (layout === "masonry") {
    body = (
      <div className="columns-1 gap-5 sm:columns-2">
        {images.map((img, i) => (
          <figure key={img.file} className="mb-5 break-inside-avoid">
            <Tile
              img={img}
              alt={gallery.title}
              onClick={() => onOpen(offset + i)}
              imgClass="h-auto w-full"
            />
            <Caption text={img.caption} />
          </figure>
        ))}
      </div>
    );
  } else {
    const aspect = layout === "grid-tall" ? "aspect-[3/4]" : "aspect-[4/3]";
    body = (
      <div className="space-y-8">
        {gallery.video && <Video id={gallery.video} title={gallery.title} />}
        <div className={`grid gap-x-5 gap-y-8 ${gridCols}`}>
          {images.map((img, i) => (
            <figure key={img.file}>
              <Tile
                img={img}
                alt={gallery.title}
                onClick={() => onOpen(offset + i)}
                imgClass={`${aspect} w-full object-cover object-top`}
              />
              <Caption text={img.caption} />
            </figure>
          ))}
        </div>
        {layout === "grid-tall" && <p className="text-sm text-mute">Tap an image to view the full-length screen.</p>}
      </div>
    );
  }

  return (
    <div className="mt-14 first:mt-0">
      <div className="mb-6 flex flex-wrap items-baseline gap-x-4 gap-y-1 border-t border-line pt-4">
        <h3 className="text-lg font-semibold tracking-tight">{gallery.title}</h3>
        {gallery.note && <p className="text-sm text-mute">{gallery.note}</p>}
      </div>
      {body}
      {layout === "carousel" && gallery.video && (
        <div className="mt-10">
          <Video id={gallery.video} title={gallery.title} />
        </div>
      )}
    </div>
  );
}
