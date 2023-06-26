import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ControlPannel from "./pages/ControlPannel";
import GlitchScreen from "./components/GlitchedScreen";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/control-pannel" element={<ControlPannel />} />
        <Route path="/test" element={<GlitchScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;