import Navigation from "./components/Navigation";
import Hero from "./sections/Hero";
import Letter from "./sections/Letter";
import Investigation from "./sections/Investigation";
import Projects from "./sections/Projects";
import BeyondEngineering from "./sections/BeyondEngineering";
import Photography from "./sections/Photography";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <main className="bg-ink text-bone">
      <Navigation />
      <Hero />
      <Letter />
      <Investigation />
      <Projects />
      <BeyondEngineering />
      <Photography />
      <Contact />
    </main>
  );
}
