import Navbar from "../components/common/Navbar2";
import OurStrategy from "../components/BusinessPlan/OurStrategy";
import WhyReal from "../components/BusinessPlan/WhyReal"

const BusinessPlan = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <main>
        <OurStrategy />
        <WhyReal />
      </main>
    </div>
  );
};

export default BusinessPlan;