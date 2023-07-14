import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard";


const AppRoute = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={<Dashboard />
          }
        />
      </Routes>
    </BrowserRouter>
  )
};
export default AppRoute;
