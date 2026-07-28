import Navbar from "../components/common/Navbar2";
import OurStrategy from "../components/BusinessPlan/OurStrategy";
import WhyReal from "../components/BusinessPlan/WhyReal"
import HowMllf from "../components/BusinessPlan/HowMllf"
import Howwe from "../components/BusinessPlan/Howwe"
import Governance from "../components/BusinessPlan/Governance";
import CTA from "../components/BusinessPlan/CTA"
import Footer from "../components/common/Footer"
const BusinessPlan = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <main>
        <OurStrategy />
        <WhyReal />
        <HowMllf />
        <Howwe />
        <Governance />
        <CTA />
        <Footer />
      </main>
    </div>
  );
};

export default BusinessPlan;