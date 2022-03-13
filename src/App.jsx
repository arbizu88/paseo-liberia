import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ActivitiesSection } from "./components/Main/ActivitiesSection";
import { MainSection } from "./components/Main/MainSection";
import { ContactUsSection } from "./components/Main/ContactUsSection";
import { ProfileSection } from "./components/Main/ProfileSection";
import { Provider } from "react-redux";
import store from "./redux/store";

import React, { createContext, useState } from "react";

export const UserContext = createContext();

const App = () => {
  const [user, setUser] = useState("Carlos Hidalgo");

  return (
    <>
      <Provider store={store}>
        <UserContext.Provider value={user}>
          <Router>
            <Routes>
              <Route exact path="/" element={<MainSection />} />
              <Route path="/activities" element={<ActivitiesSection />} />
              <Route path="/contact" element={<ContactUsSection />} />
              <Route path="/profile" element={<ProfileSection />} />
            </Routes>
          </Router>
        </UserContext.Provider>
      </Provider>
    </>
  );
};

export default App;
