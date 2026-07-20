import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BusinessPlan from "./pages/BusinessPlan";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/business-plan" element={<BusinessPlan />} />
    </Routes>
  );
}

export default App;