import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import AtWorkGallery from "@/components/AtWorkGallery";
import ExperienceServices from "@/components/ExperienceServices";
import Trust from "@/components/Trust";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation Header */}
      <Header />

      <main className="flex-grow pb-16 md:pb-20">
        {/* Hero Section */}
        <Hero />

        {/* About Biography Section */}
        <About />

        {/* At Work Photo Gallery */}
        <AtWorkGallery />

        {/* Experience and Services Grid Section */}
        <ExperienceServices />

        {/* Patient Trust Section & Core Values Banner */}
        <Trust />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
