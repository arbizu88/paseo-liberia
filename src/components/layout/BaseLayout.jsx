import React from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { MainSection } from "../Main/MainSection";
import LikePage from "../Utilities/LikePage";
import { Navbar } from "../Navbar/Navbar";

export const BaseLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <LikePage />

      <Footer />
    </>
  );
};
