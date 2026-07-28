import Reveal from "../components/common/Reveal";
import Navbar from "../components/common/Navbar";
import S1Hero from "../components/home/S1_hero";
import S2Explore from "../components/home/S2_Explore";
import S3Institution from "../components/home/S3_Institutional";
import S4Purpose from "../components/home/S4_Purpose";
import S5Form from "../components/home/S5_From";
import Tokeno from "../components/home/Tokeno";
import S6Ecosystem from "../components/home/S6_Ecosystem";
import S7Luxury from "../components/home/S7_LuxuryReal";
import Footer from "../components/common/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden min-h-screen bg-black">
      <Navbar />

      <Reveal>
        <S1Hero />
      </Reveal>

      <Reveal delay={0.1}>
        <S2Explore />
      </Reveal>

      <Reveal delay={0.2}>
        <S3Institution />
      </Reveal>

      <Reveal delay={0.3}>
        <S4Purpose />
      </Reveal>

      <Reveal delay={0.4}>
        <S5Form />
      </Reveal>
       <Reveal delay={0.5}>
        <Tokeno />
      </Reveal>

      <Reveal delay={0.6}>
        <S6Ecosystem />
      </Reveal>

      <Reveal delay={0.7}>
        <S7Luxury />
      </Reveal>

      <Reveal delay={0.8}>
        <Footer />
      </Reveal>
    </main>
  );
}