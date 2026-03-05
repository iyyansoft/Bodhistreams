import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./pages/Home";
import './styles/global.css';

import SoftwareDevelopment from "./pages/it-services/SoftwareDevelopment";
import ITConsulting from "./pages/it-services/ITConsulting";
import DigitalTransformation from "./pages/it-services/DigitalTransformation";
import ManagedSupport from "./pages/it-services/ManagedSupport";



import ITHardware from "./pages/hardware/ITHardware";
import Networking from "./pages/hardware/Networking";
import ElectronicProducts from "./pages/hardware/ElectronicProducts";
import HardwareSupport from "./pages/hardware/HardwareSupport";


import EventDiscovery from "./pages/event/EventDiscovery";
import EventTech from "./pages/event/EventTech";
import LiveEvents from "./pages/event/LiveEvents";
import Ticketing from "./pages/event/Ticketing";






function App() {
  return (
    <Router>
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/software-development" element={<SoftwareDevelopment />} />
          <Route path="/it-consulting" element={<ITConsulting />} />
          <Route path="/digital-transformation" element={<DigitalTransformation />} />
          <Route path="/managed-support" element={<ManagedSupport />} />



          <Route path="/hardware-trading" element={<ITHardware />} />
          <Route path="/networking" element={<Networking />} />
          <Route path="/electronic-products" element={<ElectronicProducts />} />
          <Route path="/hardware-support" element={<HardwareSupport />} />



          <Route path="/event-discovery" element={<EventDiscovery />} />
          <Route path="/event-tech" element={<EventTech />} />
          <Route path="/live-events" element={<LiveEvents />} />
          <Route path="/ticketing" element={<Ticketing />} />



        </Routes>
      </AnimatePresence>

      <Footer />
    </Router>
  );
}

export default App;
