import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full h-full min-h-full">
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
}
