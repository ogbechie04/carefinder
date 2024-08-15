import Home from "./pages/homePage.tsx";
import HospitalPage from "./pages/hospitalPage.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "../src/pages/signUp.tsx";
import Login from "./pages/Login.tsx";
import AddHospitalPage from "./pages/addHospitalPage.tsx";
import ErrorFallback from "./components/errorFallback.tsx";
import { ErrorBoundary } from "react-error-boundary";
import NotFound from "./pages/notFound.tsx";

function App() {
  return (
    <>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          // Reset the state of your app so the error doesn't happen again
          window.location.reload();
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hospitals" element={<HospitalPage />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/addHospital" element={<AddHospitalPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ErrorBoundary>
    </>
  );
}

export default App;
