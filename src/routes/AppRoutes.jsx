import { Routes, Route } from "react-router-dom";

import Home from "../pages/HomePage";
import Login from "../pages/Login";
import PropertiesList from "../pages/PropertiesList/PropertiesList"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/propertieslist" element={<PropertiesList />} />

    </Routes>
  );
}

export default AppRoutes;