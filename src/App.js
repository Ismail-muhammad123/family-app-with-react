import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/home/Home";
import Blogs from "./components/blogs/Blogs";
import WhoWeAre from "./components/who-we-are/WhoWeAre";
import ContactUs from "./components/contact/ContactUs";
import RecorverAccount from "./components/recorver/RecorverAccount";
import Login from "./components/login/Login";
import SignUp from "./components/signUp/SignUp";
import Reports from "./components/reports/Reports";
import Dashboard from "./components/dashboard/Dashboard";
import AddFamily from "./components/addFamily/AddFamily";
import AddProject from "./components/addProject/AddProject";
import AddTrial from "./components/addTrial/AddTrial";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="who-we-are" element={<WhoWeAre />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="recover" element={<RecorverAccount />} />
          <Route path="login" element={<Login />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="logout" element={<Navigate to="/login" /> } />
          <Route path="reports" element={ <Reports /> } />
          <Route path="dashboard" element={ <Dashboard /> } />
          <Route path="add-family" element={ <AddFamily /> } />
          <Route path="add-project" element={ <AddProject /> } />
          <Route path="add-trial" element={ <AddTrial /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
