import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Dasboard from "./Dasboard.tsx";
import Devices from "./Devices.tsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Navigate to="/dashboard" />} />
          <Route path="dashboard" element={<Dasboard />} />
          <Route path="devices" element={<Devices />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
