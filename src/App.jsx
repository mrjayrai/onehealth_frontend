import React from "react";
import { Routes, Route} from "react-router-dom";
import HomePage from "components/log/Homepage";
import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import Intro_page from './Intro_page';
const App = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="rtl/*" element={<RtlLayout />} />
      {/* <Route path="/" element={<Navigate to="/admin" replace />} /> */}
      <Route path="/login" element={<HomePage/>} />
      <Route path="/" element={<Intro_page/>} />
    </Routes>
  );
};

export default App;
