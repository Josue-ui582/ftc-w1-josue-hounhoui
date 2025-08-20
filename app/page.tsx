import Image from "next/image";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import LogoSection from "../components/LogoSection";
import FeatureSection from "../components/FeatureSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <LogoSection />
      <FeatureSection />
    </>
  );
}
