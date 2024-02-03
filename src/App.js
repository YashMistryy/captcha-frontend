import "./App.css";
import ResponsiveAppBar from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import PlansPage from "./pages/PlansPage";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
import { MarketingPage } from "./pages/Marketing";
import SelectPlan from "./pages/SelectPlan";
import { TestComponent } from "./components/TestComponent";
import ResponsiveAppBar2 from "./components/Header2";
import UserProfile from "./pages/UserProfile";
import { UserContextProvider } from "./Contexts/UserContext";
import { PlanWaitPage, LimitCrossWaitPage } from "./pages/WaitingPages";
function App() {

 
  return (
    <div className="App">
      <UserContextProvider>
        <ResponsiveAppBar2 />
        <Routes>
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/" element={<MarketingPage />} />
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/test" element={<TestComponent />} />
          <Route path="/test" element={<TestComponent />} />
          <Route path="/wait-for-activation" element={<PlanWaitPage />} />
          <Route path="/wait-for-limit" element={<LimitCrossWaitPage />} />
          <Route path="/select-plan/:paramValue" element={<SelectPlan />} />
        </Routes>
        <Footer />
      </UserContextProvider>
    </div>
  );
}

export default App;
