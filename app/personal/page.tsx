import Navigation from "@/app/components/Navigation";

export default function PersonalPage() {
  return (
    <main className="bg-ink text-bone min-h-screen">
      <Navigation variant="sub" />
      <section className="container-custom pt-40 pb-32">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-bone-mute">
          Mind &amp; Margin —
        </p>
        <p className="font-display text-2xl text-bone-dim mt-4 max-w-xl">
          Reassembling. Writings, photography, and the longer reading list will
          return shortly.
        </p>
      </section>
    </main>
  );
}
