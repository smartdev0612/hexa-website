import React, { useState } from "react";
import BoardMember from "./BoardMember";
import Contact from "./Contact";
import BuySection from "./BuySection";
import Ecosystems from "./Ecosystems";
import FAQPage from "./FAQPage";
import Footer from "./Footer";
import Header from "./Header";
import ModelLoginPopup from "./ModelLoginPopup";
import MvpPage from "./MvpPage";
import Platform from "./Platform";
import PressNews from "./PressNews";
import RegisterPopup from "./RegisterPopup";
import RoadMap from "./RoadMap";
import TeamPage from "./TeamPage";
import TokenSale from "./TokenSale";

function HomePage() {
  const [modelOpen, setModelopen] = useState(false)
  return (
    <React.Fragment>
      <RoadMap />
      <TeamPage />
      <Ecosystems />
      <Platform />
      <MvpPage />
      <BuySection />
      <PressNews />
      <FAQPage />
      <Contact />
    </React.Fragment>
  );
}

export default HomePage;
