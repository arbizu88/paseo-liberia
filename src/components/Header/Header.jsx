import React from "react";

export const Header = () => {
  return (
    <header className="d-flex flex-wrap justify-content-center py-4 mb-4 border-bottom bg-white">
      <div className="row">
        <div className="col">
          <img
            className="img-fluid"
            src={process.env.PUBLIC_URL + "logo_liberia5.png"}
            alt="Liberia"
          />
        </div>
      </div>
    </header>
  );
};
