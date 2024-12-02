import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";
import "./index.css";
import "./global.css";

export function render() {
  return (
    <StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </StrictMode>
  );
}

if (typeof document !== "undefined") {
  const rootElement = document.getElementById("root");

  createRoot(rootElement).render(render());
}
