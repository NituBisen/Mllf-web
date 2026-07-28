import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BusinessPlan from "./pages/BusinessPlan";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import Tokenomics from "./pages/Tokenomics"
import ContactUs from "./pages/ContactUs"
import Presale from "./pages/Presale"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/business-plan" element={<BusinessPlan />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/about" element={<About />}/>
      <Route path="/tokenomics" element={<Tokenomics />}/>
      <Route path="/contactus" element={<ContactUs />}/>
      <Route path="/presale" element={<Presale />}/>
  
    </Routes>
  );
}

export default App;