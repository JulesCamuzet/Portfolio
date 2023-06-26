import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Router from "./Router";
import GlitchScreen from "./components/GlitchedScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }, [])

  if (loading) {
    return <GlitchScreen />;
  } else {
    return <Router />;
  }
}

export default App;
