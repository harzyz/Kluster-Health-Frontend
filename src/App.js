import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PatientProfileCreate from "./pages/patientspages/PatientProfileCreate";
import Registerpage from "./pages/Registerpage";
import Dashboardpage from "./pages/doctorspages/Dashboardpage";
import PatientDashboardpage from "./pages/patientspages/PatientDashboardpage";
import PatientsOverview from "./pages/patientspages/PatientsOverview";
import PatientsSeeDoctorspage from "./pages/patientspages/PatientsSeeDoctorspage";
import Overviewpage from "./pages/doctorspages/Overviewpage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import DoctorsProfileCreate from "./pages/doctorspages/DoctorsProfileCreate";
import ReminderViewAll from "./pages/patientspages/ReminderViewAll";
import { AuthProvider } from "./context/AuthContext";
import MedicationViewAll from "./components/medication-view-all.component/medication-view-all";
// import Auth from './Auth';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Registerpage>
                  <Login />
                </Registerpage>
              }
            />
            <Route
              path="/signup"
              element={
                <Registerpage>
                  <Signup />
                </Registerpage>
              }
            />
            <Route path="/cprofile" element={<PatientProfileCreate />} />
            <Route path="/cdprofile" element={<DoctorsProfileCreate />} />
            <Route
              path="/ddashboard"
              element={
                <Dashboardpage>
                  <Overviewpage />
                </Dashboardpage>
              }
            />
            <Route
              path="/pdashboard"
              element={
                <PatientDashboardpage>
                  <PatientsOverview />
                </PatientDashboardpage>
              }
            />
            <Route
              path="/pdoctors"
              element={
                <PatientDashboardpage>
                  <PatientsSeeDoctorspage />
                </PatientDashboardpage>
              }
            />
            <Route
              path="/preminder"
              element={
                <PatientDashboardpage>
                  <ReminderViewAll />
                </PatientDashboardpage>
              }
            />
            <Route
              path="/pmedication"
              element={
                <PatientDashboardpage>
                  <MedicationViewAll />
                </PatientDashboardpage>
              }
            />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
