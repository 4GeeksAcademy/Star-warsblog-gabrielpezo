import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./views/home";
import { People } from "./views/demoPeople";
import { Vehicle } from "./views/demoVehicle";
import { Planet } from "./views/demoPlanet";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demoPeople/people/:id" element={<People />} />
            <Route path="/demoVehicle/vehicles/:id" element={<Vehicle />} />
            <Route path="/demoPlanet/planets/:id" element={<Planet />} />
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
