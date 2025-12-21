import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Items from "./Items.jsx";
import Clock from "./Clock.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Items />
    <Clock />
  </StrictMode>
);
