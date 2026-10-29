import { useEffect, useState } from "react";

export type Route =
  | { name: "home" }
  | { name: "work" }
  | { name: "about" }
  | { name: "project"; slug: string }
  | { name: "notfound" };

export const parseHash = (hash: string): Route => {
  const path = hash.replace(/^#/, "").replace(/^\/+|\/+$/g, "");
  if (path === "") return { name: "home" };
  if (path === "work") return { name: "work" };
  if (path === "about") return { name: "about" };
  const m = path.match(/^work\/([^/]+)$/);
  if (m) return { name: "project", slug: m[1] };
  return { name: "notfound" };
};

export function useRoute(): Route {
  const [hash, setHash] = useState(() => window.location.hash);
  useEffect(() => {
    const on = () => setHash(window.location.hash);
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  return parseHash(hash);
}

export const routeKey = (r: Route) => (r.name === "project" ? `project:${r.slug}` : r.name);
export const projectHref = (slug: string) => `#/work/${slug}`;
