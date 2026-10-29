import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import CaseStudy from "./pages/CaseStudy";
import { getProject } from "./data/projects";
import { routeKey, useRoute } from "./lib/router";

export default function App() {
  const route = useRoute();
  const key = routeKey(route);

  // Scroll handling + document title per page
  useEffect(() => {
    if (route.name === "work") {
      requestAnimationFrame(() => document.getElementById("work")?.scrollIntoView());
    } else {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }

    const base = "Sum Tsang — Senior UX/UI & Product Designer";
    if (route.name === "about") document.title = `About — ${base}`;
    else if (route.name === "project") {
      const p = getProject(route.slug);
      document.title = p ? `${p.title} — Sum Tsang` : base;
    } else document.title = base;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  let page: React.ReactNode;
  if (route.name === "home" || route.name === "work") page = <Home />;
  else if (route.name === "about") page = <About />;
  else if (route.name === "project" && getProject(route.slug)) page = <CaseStudy key={route.slug} slug={route.slug} />;
  else
    page = (
      <main className="mx-auto max-w-[1400px] px-6 pt-24 md:px-10">
        <h1 className="font-display text-7xl">Page not found</h1>
        <a href="#/" className="link-line mt-8 inline-block text-lg">
          ← Back to work
        </a>
      </main>
    );

  return (
    <div className="min-h-screen bg-white">
      <Header route={route} />
      {page}
      {/* Contact lives on the About page only */}
      {route.name === "about" && <Footer />}
    </div>
  );
}
