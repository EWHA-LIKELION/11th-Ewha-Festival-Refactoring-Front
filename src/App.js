import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import BoothListPage from "./pages/BoothListPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/boothlistpage" element={<BoothListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
