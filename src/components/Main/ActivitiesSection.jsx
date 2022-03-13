import React, { useState } from "react";
import { Activities } from "../Activities/Activities";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Navbar } from "../Navbar/Navbar";

export const ActivitiesSection = () => {
  // const [data, setData] = useState([]);
  // return <Activities data={data} setData={setData} />;
  return (
    <>
      <Header />
      <Navbar />
      <div className="container">
        <div className="row mb-3">
          ¿Qué actividades puedo realizar en Liberia?
          <hr />
          <Activities />
        </div>
      </div>

      <Footer />
    </>
  );
};
