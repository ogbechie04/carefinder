import Home from "./pages/homePage.tsx";
import HospitalPage from "./pages/hospitalPage.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "../src/pages/signUp.tsx";
import Login from "./pages/Login.tsx";
import AddHospitalPage from "./pages/addHospitalPage.tsx";

function App() {
  return (
    <>
       <Router>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/HospitalPage" element={<HospitalPage />} />
           <Route path="/signUp" element={<SignUp />} />
           <Route path="/login" element={<Login />} />
           <Route path="/addHospital" element={<AddHospitalPage />} />
         </Routes>
       </Router>
    </>
  );
}

export default App;
