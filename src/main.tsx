import { StrictMode, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from "react-dom/client";
import "./index.css";

import { routes } from "./routes/routes.tsx";
import SuspenseApp from "./components/suspense/SuspenseApp.tsx";



createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<SuspenseApp />}>
        <Routes>
          <Route>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={route.element}
              />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);
