import { Routes, Route, useLocation } from "react-router-dom"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Signup from "./pages/Signup/Signup"
import Gender from "./pages/Gender/Gender"
import Health from "./pages/Health/Health"
import { useEffect } from "react"
import { updateThemeColor } from "./utils/FilterThemeTag"

const themeColors = {
  '/': '#ffffff',
  '/home': '#ffffff',
  '/signup': '#ffffff',
  '/gender': '#ffffff',
  '/heart-health': '#63beb9',
};

const ThemeUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const color = themeColors[location.pathname] || '#ffffff';
    console.log(location.pathname);
    updateThemeColor(color);
  }, [location]);

  return null;
};

function App() {

  return (
    <>
      <ThemeUpdater />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/gender" element={<Gender />} />
        <Route path="/heart-health" element={<Health />} />
      </Routes>
    </>
  )
}

export default App
