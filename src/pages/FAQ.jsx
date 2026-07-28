import Navbar2 from "../components/common/Navbar2";
import Support from "../components/FAQ/Support";
import General from "../components/FAQ/General"
import Ctafaq from "../components/FAQ/Ctafaq"
import Footer from "../components/common/Footer";


export default function Faq() {
  return (
    <>
      <Navbar2 />
      <Support />
      <General />
      <Ctafaq />
      <Footer />
    </>
  );
}