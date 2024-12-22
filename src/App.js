import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import StudentForm from "./pages/Student";
import Home from "./pages/Home";
// import dotenv from "dotenv"
// dotenv.config();
function App() {
  return (
    <Router>
      <div className="text-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<StudentForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
