import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import IndexHistory from "../pages/indexHistory";

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
        <Route
          path="/history/:id"
          element={
            <IndexHistory />
          }
        />
      </Routes>
    </BrowserRouter>
  )
};
export default AppRoute;
