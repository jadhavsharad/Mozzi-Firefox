'use client'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import './locomotive.css'
import useLocomotiveScroll from "./_locomotive";
import dynamic from "next/dynamic";

function Home() {

  const Hero = dynamic(() => import('@/components/Hero'), {loading: () => <p>Loading...</p>})
  const Register = dynamic(() => import('@/components/Register'))
  const Schedule = dynamic(() => import('@/components/Schedule'))
  const Ticket = dynamic(() => import('@/components/Tickets'))

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