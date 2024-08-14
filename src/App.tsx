import Home from "./pages/home.tsx";
import HospitalPage from "./pages/hospitalPage.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  console.log(window.location.href)
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HospitalPage" element={<HospitalPage />} />
      </Routes>
    </Router>
    // <ShareButton />
  )
}
export default App;
