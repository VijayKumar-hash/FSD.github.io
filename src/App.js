
// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DarkNavbar from "./Components/Darknav";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import PageNotFound from "./Components/PageNotFound";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
import PrivateRoute from "./Components/PrivateRoute";
import LandingPage from "./Components/LandingPage";
import DashboardComp from "./Components/DashboardCom";
import Fav from './Components/fav'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DarkNavbar />
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route exact path="/register" element={<Registration />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/services" element={<Services />}></Route>
          <Route
            exact
            path="/favorite"
            element={
              <PrivateRoute>
                <Fav />
              </PrivateRoute>
            }
          ></Route>
          <Route
            exact
            path="/dashboard"
            element={
              <PrivateRoute>
                <DashboardComp />
              </PrivateRoute>
            }
          ></Route>

      

          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
        {/* {sessionStorage.getItem("loggedin") &&  <Footer/> } */}
      </BrowserRouter>
    </div>
  );
}

export default App;
