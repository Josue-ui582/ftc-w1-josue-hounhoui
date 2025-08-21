import Image from "next/image";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import LogoSection from "../components/LogoSection";
import FeatureSection from "../components/FeatureSection";
import CardSection from "../components/CardSection";
import CollabSection from "../components/CollabSection";
import CheckIn from "../components/CheckIn";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <LogoSection />
      <FeatureSection />
      <CardSection />
      <CollabSection />
      <CheckIn />
      <Footer />
    </>
  );
}
