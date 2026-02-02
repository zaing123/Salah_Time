import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import SalahTimes from './pages/SalahTimes';
import LoginPage from "./pages/LoginPage";
import HijriDate from './pages/HijriDate';
import IslamicEventsList from './pages/IslamicEventsList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="salah-times" element={<SalahTimes />} />
          <Route path="about" element={<About />} />
          <Route path="/hijri-date" element={<HijriDate />} />
           <Route path="/events" element={<IslamicEventsList />} />
           <Route path="LoginPage" element={<LoginPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
