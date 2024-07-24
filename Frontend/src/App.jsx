import {  Route, useLocation, createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet } from "react-router-dom"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Signup from "./pages/Signup/Signup"
import Gender from "./pages/Gender/Gender"
import Health from "./pages/Health/Health"
import { useEffect } from "react"
import { updateThemeColor } from "./utils/FilterThemeTag"
import Result from "./pages/Result/Result"
import Loader from "./pages/Loading/Loader"
import Loading from "./pages/Loading/Loading"
import Welcome from "./pages/Welcome/Welcome"
// import useConfirmExit from "./hooks/useConfirmExit"
// import ExitWindow from "./components/ExitWindow"

const themeColors = {
  '/': '#3a9eff',
  '/login': '#ffffff',
  '/home': '#ffffff',
  '/welcome': '#3a9eff',
  '/signup': '#ffffff',
  '/gender': '#ffffff',
  '/heart-health': '#63beb9',
  '/result': '#63beb9',
};

const ThemeUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const color = themeColors[location.pathname] || '#ffffff';
    updateThemeColor(color);
  }, [location]);

  return <Outlet />;
};

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<ThemeUpdater />}>
        <Route index element={<Loader />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/gender" element={<Gender />} />
        <Route path="/heart-health" element={<Health />} />
        <Route path="/result" element={<Result />} />
        <Route path="/test" element={<Loading />} />
      </Route>
  )
);

function App() {
  

  return (
    <>
      <RouterProvider router={router} />
    </>
    
  
  )
}

export default App
