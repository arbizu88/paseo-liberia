import React, { useState } from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Navbar } from "../Navbar/Navbar";
import Info from "../UserInfo/Info";

export const ProfileSection = () => {
  // const [data, setData] = useState([]);
  // return <Activities data={data} setData={setData} />;
  return (
    <>
      <Header />
      <Navbar />
      <Info />
      <Footer />
    </>
  );
};
