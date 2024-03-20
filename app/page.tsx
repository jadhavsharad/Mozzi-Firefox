'use client'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Register from "@/components/Register";
import Schedule from "@/components/Schedule";
import Ticket from "@/components/Tickets";
import './locomotive.css'
import { useEffect } from "react";

function Home() {

  useEffect(() => {
    let scroll: import("locomotive-scroll");
    import("locomotive-scroll").then((locomotiveModule) => {
      scroll = new locomotiveModule.default();
    });

    // cleanup phase
    return () => {
      if (scroll) scroll.destroy();
    };
  });

  return (
    <main className="bg-zinc-950 min-h-svh p-4" data-scroll-container >
      <Header />
      <section data-scroll-section>
        <Hero />
      </section>
      <section data-scroll-section>
        <Schedule />
      </section>
      <section data-scroll-section>
        <Ticket />
      </section>
      <section data-scroll-section>
        <Register />
      </section>
      <section data-scroll-section>
        <Footer />
      </section>
    </main>
  );
}
export default Home