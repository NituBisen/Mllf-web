import Navbar2 from "../components/common/Navbar2";
import Aboutmllf from "../components/About/Aboutmllf"
import Whywe from "../components/About/Whywe"
import OurMission from "../components/About/OurMission"
import MeettheTeam from "../components/About/MeettheTeam"
import CTA from "../components/BusinessPlan/CTA"
import Footer from "../components/common/Footer";
export default function About() {
  return (
     <>
      <Navbar2 />
      <Aboutmllf />
      <Whywe />
      <OurMission />
      <MeettheTeam />
      <CTA />
      <Footer />
       </>
  );
}