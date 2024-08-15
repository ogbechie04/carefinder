import Home from "./pages/home.tsx";
import HospitalPage from "./pages/hospitalPage.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "../src/pages/signUp.tsx";
import Login from "./pages/Login.tsx";

function App() {
  //  console.log(window.location.href)
  return (
    <>
       <Router>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/HospitalPage" element={<HospitalPage />} />
           <Route path="/signUp" element={<SignUp />} />
           <Route path="/login" element={<Login />} />
         </Routes>
       </Router>
    </>
  );
}

export default App;
