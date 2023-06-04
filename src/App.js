import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Alger from "./pages/Alger";
import Blida from "./pages/Blida";
import Tizi from "./pages/Tizi";
import HomePage from "./pages/HomePage";
import Asr from "./pages/Asr";
import Algerpt from "./pages/Algerpt";
import Tizipt from "./pages/Tizipt";
import Mapp from "./pages/Mapp";


import { useEffect } from "react";


function App() {

  
  useEffect(() => {
    document.title = 'Weather and Prayer times!';
  }, []);

  return (
    <div className="App" >
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/alger" element={<Alger />} />
          <Route path="/blida" element={<Blida />} />
          <Route path="/tizi" element={<Tizi />} />
          <Route path="/asr" element={<Asr />} />
          <Route path="/algerpt" element={<Algerpt />} />
          <Route path="/tizipt" element={<Tizipt />} />
          <Route path="/mapp" element={<Mapp />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
