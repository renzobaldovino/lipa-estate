import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import LipaMap from "./pages/LipaMap";
import UnderConstruction from "./pages/UnderConstruction";
import { MapProvider } from "react-map-gl";
import Property from "./pages/Property";

function App() {
  return (
    <MapProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/properties/:id" element={<Property />} />
          <Route path="lipa-city-map" element={<LipaMap />} />
          <Route path="vlog" element={<UnderConstruction />} />
        </Routes>
      </BrowserRouter>
    </MapProvider>
  );
}

export default App;
