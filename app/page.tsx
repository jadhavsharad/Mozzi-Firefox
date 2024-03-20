'use client'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import './locomotive.css'
import useLocomotiveScroll from "@/utils/locomotive";
import Hero from "@/components/Hero";
import Schedule from "@/components/Schedule";
import Ticket from "@/components/Tickets";
import Register from "@/components/Register";


function Home() {

  useLocomotiveScroll()

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