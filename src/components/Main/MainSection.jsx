import { Landing } from "../Article/Landing";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import LikePage from "../Utilities/LikePage";
import { Navbar } from "../Navbar/Navbar";
import { UserContext } from "../../App";
import React, { useContext } from "react";

export const MainSection = () => {
  const user = useContext(UserContext);
  return (
    <>
      <Header />
      <Navbar />
      <LikePage />
      <main className="flex-shrink-0">
        <div className="container">
          <p>{`Welcome ${user}`}</p>
          <Landing />
        </div>
      </main>
      <Footer />
    </>
  );
};
