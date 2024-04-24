import React from 'react'
// import BarCharts from '../MyComponents/BarCharts';
import Bar from "../scenes/bar";
import Pie from '../scenes/pie';
import Line from '../scenes/line';
import Dashboard from '../scenes/dashboard';

import '/Users/kaustubhsagale/Desktop/carproject/src/styles/LoginPage.css'; // Import the CSS file


import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Topbar from "/Users/kaustubhsagale/Desktop/carproject/src/scenes/global/Topbar.jsx";
import Sidebar from "/Users/kaustubhsagale/Desktop/carproject/src/scenes/global/Sidebar.jsx";
import dashboard from "/Users/kaustubhsagale/Desktop/carproject/src/scenes/dashboard/index.jsx";
import Team from "/Users/kaustubhsagale/Desktop/carproject/src/scenes/team/index.jsx";
import Invoices from "/Users/kaustubhsagale/Desktop/carproject/src/scenes/invoices/index.jsx";
import Contacts from "/Users/kaustubhsagale/Desktop/carproject/src/scenes/contacts/index.jsx";
import bar from "/Users/kaustubhsagale/Desktop/carproject/src/scenes/bar/index.jsx";
import Form from "/Users/kaustubhsagale/Desktop/carproject/src/scenes/form/index.jsx";
import line from "/Users/kaustubhsagale/Desktop/carproject/src/scenes/line/index.jsx";
import pie from "/Users/kaustubhsagale/Desktop/carproject/src/scenes/pie/index.jsx";
import FAQ from "/Users/kaustubhsagale/Desktop/carproject/src/scenes/faq/index.jsx";
import Geography from "/Users/kaustubhsagale/Desktop/carproject/src/scenes/geography/index.jsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "/Users/kaustubhsagale/Desktop/carproject/src/theme.jsx";
import Calendar from "/Users/kaustubhsagale/Desktop/carproject/src/scenes/calendar/calendar.jsx";
const WelcomePage = ({ username }) => {
    const [theme, colorMode] = useMode();
    const [isSidebar, setIsSidebar] = useState(true);
    const nevigate= useNavigate();
// const WelcomePage = ({ username }) => {
  return (
    <div>
<ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
    </div>
  );
};

export default WelcomePage;
