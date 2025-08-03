import { StrictMode } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { DoctorDetailsProvider } from "./context/DoctorDetailsContext.jsx";
import App from "./App.jsx";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <DoctorDetailsProvider>
        <ToastContainer/>
        <App />
      </DoctorDetailsProvider>
    </Router>
  </StrictMode>
);
