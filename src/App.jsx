import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import Jobs from "./pages/Jobs";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
