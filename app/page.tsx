import Navigation from "./components/Navigation";
import CursorRing from "./components/CursorRing";
import RiverPath from "./components/RiverPath";
import Hero from "./sections/Hero";
import Education from "./sections/Education";
import NowBuilding from "./sections/NowBuilding";
import Slate from "./sections/Slate";
import Coursework from "./sections/Coursework";
import Receipts from "./sections/Receipts";
import MindMarginTease from "./sections/MindMarginTease";
import GetInTouch from "./sections/GetInTouch";

export default function Home() {
  return (
    <main className="bg-ink text-bone">
      <CursorRing />
      <Navigation variant="home" />
      <RiverPath />

      <Hero />
      <Education />
      <NowBuilding />
      <Slate />
      <Coursework />
      <Receipts />
      <MindMarginTease />
      <GetInTouch />
    </main>
  );
}
