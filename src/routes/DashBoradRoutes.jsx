import React from "react";

import { Routes, Route } from "react-router-dom";

import Menu from "../common/dashborad/Menu";
import Nav from "../common/dashborad/Nav";
import Footer from "../common/dashborad/Footer";

import "../assets/vendor/fonts/boxicons.css";
import "../assets/vendor/css/core.css";
import "../assets/vendor/css/theme-default.css";
import "../assets/css/demo.css";
import "../assets/css/custom.css";
import "../assets/vendor/fonts/boxicons.css";
import "react-perfect-scrollbar/dist/css/styles.css";

import TableController from "../containers/tables/TableController";
import DashboardController from "../containers/dashboard/DashboardController";
import IconsController from "../containers/box-icons/IconsController";
import CardController from "../containers/card/CardController";

function DashBoradRoutes() {
  return (
    <div className="layout-wrapper layout-content-navbar" >
      <div className="layout-container">
        <Menu />
        <div className="layout-page page-fix">
          <Nav />
          <div className="content-wrapper">
            <Routes>
              <Route path="/dashboard" element={<DashboardController />} />
              <Route path="/tables" element={<TableController />} />
              <Route path="/card" element={<CardController />} />
              <Route path="/icons" element={<IconsController />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default DashBoradRoutes;
