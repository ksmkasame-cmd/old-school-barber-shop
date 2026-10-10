import Header from "./components/Header";
import Hero from "./components/Hero";
import Concept from "./components/Concept";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Concept />
        <Services />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
