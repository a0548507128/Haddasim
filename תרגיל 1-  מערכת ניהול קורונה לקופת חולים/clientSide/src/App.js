import "./App.css";
import Main from "./component/Main";
import OpenPage from "./component/OpenPage";
import Information from "./component/Information";
import AllMembers from "./component/AllMembers";
import MemberDetails from "./component/MemberDetails";
import NewMember from "./component/NewMember";
import NewCovidOfMember from "./component/NewCovidOfMember";
import NewVaccine from "./component/newVaccine";
import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom";




function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Routes>
          <Route
            element={
              <>
                <Main/>
                <Outlet />
              </>
            }
          >
            <Route path="/" element={<OpenPage />} />
            <Route path="/Information" element={<Information />} />
            <Route path="/AllMembers" element={<AllMembers />} />
            <Route path="/MemberDetails/:memberId" element={<MemberDetails />} />
            <Route path="/NewMember" element={<NewMember />} />
            <Route path="/NewCovidOfMember/:memberId" element={<NewCovidOfMember />} />
            <Route path="/:memberId/NewVaccine/:vaccineNum" element={<NewVaccine />} />
            <Route path="/MemberDetails/:memberId/addNewVaccine/:vaccineNum/:ifUpdate" element={<NewVaccine />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
