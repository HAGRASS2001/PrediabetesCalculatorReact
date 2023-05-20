import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/UI/layout/Layout";
import AuthContextProvider from './components/Auth/AuthProvider';
import Login from "./pages/LoginPage";
import AdminRegistrationPage from "./pages/AdminRegistrationPage";
import DoctorRegistration from "./pages/DoctorRegistration";
import ViewDoctorsPage from "./pages/ViewDoctors";
import UpdateDoctorPage from "./pages/UpdateDoctorPage";
import UpdateAdminPage from "./pages/UpdateAdminAccPage";
import ViewComplaintsPage from "./pages/ViewComplaintsPage";
import ForgetPassword from "./components/Admin/ForgetPassword";
import TermsofService from "./pages/TermsofService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import HomePage from "./pages/HomePage";
import ViewUserInfo from "./components/Complaint/ViewUserInfo";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/Home" element={<HomePage />} />
            <Route path="/login" element={
              <div className="flex justify-center">
                <Login />
              </div>
            } />
            <Route path="/" element={
              <div className="flex justify-center">
                <Login />
              </div>
            } />
            <Route path="/ForgetPassword" element={
              <div className="flex justify-center">
                <ForgetPassword />
              </div>
            } />
            <Route path="/adminRegistration" element={
              <div className="flex justify-center">
                <AdminRegistrationPage />
              </div>
            } />
            <Route path="/DoctorRegistration" element={
              <div className="flex justify-center">
                <DoctorRegistration />
              </div>
            } />
            <Route path="/DisplayDoctors" element={
              <div className="flex justify-center">
                <ViewDoctorsPage />
              </div>
            } />
            <Route path="/UpdateDoctor/:doctorID" element={
              <div className="flex justify-center">
                <UpdateDoctorPage />
              </div>
            } />
            <Route path="/UpdateAdmin" element={
              <div className="flex justify-center">
                <UpdateAdminPage />
              </div>
            } />
            <Route path="/ViewComplaints" element={
              <div className="flex justify-center">
                <ViewComplaintsPage />
              </div>
            } />
            <Route path="/TermsofService" element={
              <div className="flex justify-center">
                <TermsofService />
              </div>
            } />
            <Route path="/PrivacyPolicy" element={
              <div className="flex justify-center">
                <PrivacyPolicy />
              </div>
            } />
            <Route path="/ViewUserInfo/:userID" element={
              <div className="flex justify-center">
                <ViewUserInfo />
              </div>
            } />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
