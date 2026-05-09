import Navigation from "@/app/components/Navigation";
import CursorRing from "@/app/components/CursorRing";
import MultiScriptHero from "@/app/components/MultiScriptHero";
import Writings from "./components/Writings";
import BrokenGrid from "./components/BrokenGrid";
import MediaLiterature from "./components/MediaLiterature";
import InterestCloud from "./components/InterestCloud";
import { personalPage } from "@/lib/content";

// Mind & Margin (per brief §12). Path stays /personal for routing; UI calls it
// Mind & Margin everywhere. Multi-script hero, then Writings, Photography
// (broken-grid), Media & Literature with Voices/Books toggle, and the
// Interests cloud.

export default function PersonalPage() {
  return (
    <main className="bg-ink text-bone min-h-screen">
      <CursorRing />
      <Navigation variant="sub" />

      <section className="container-custom pt-32 md:pt-40 pb-16">
        <MultiScriptHero
          greetings={personalPage.greetings}
          verbsLine={personalPage.verbsLine}
          closingLine={personalPage.closingLine}
        />
      </section>

      <div className="container-custom space-y-24 md:space-y-32 pb-32">
        <Writings />
        <BrokenGrid />
        <MediaLiterature />
        <InterestCloud />
      </div>
    </main>
  );
}
