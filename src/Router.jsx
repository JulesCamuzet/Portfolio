import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ControlPannel from "./pages/ControlPannel";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/control-pannel" element={<ControlPannel />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;