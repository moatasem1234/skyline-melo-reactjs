import { StrictMode } from "react";
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import LoginPage from "./pages/login/LoginPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
=======
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./stores/reduxStore.tsx";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
>>>>>>> 6cd5641dbf4d8f73f06460dd42784f3620a304fa
  </StrictMode>
);
