import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Components/Pages/Home/Home';
import Praticien from './Components/Pages/Status/Praticien/Praticien';
import Salarie from './Components/Pages/Status/Salarie/Salarie';
import Etudiant from './Components/Pages/Status/Etudiant/Etudiant';

import FifAchat from './Components/Pages/FifAchat/FifAchat';
import FifDpcAchat from './Components/Pages/FifDpcAchat/FifDpcAchat';
import OpcoDpc from './Components/Pages/OpcoDpc/OpcoDpc';
import Opco from './/Components/Pages/Opco/Opco';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/praticien" element={<Praticien />} />
        <Route path="/salarie" element={<Salarie />} />
        <Route path="/etudiant" element={<Etudiant />} />

        <Route path="fifachat" element={<FifAchat />} />
        <Route path="fifdpcachat" element={<FifDpcAchat />} />
        <Route path="opcodpc" element={<OpcoDpc />} />
        <Route path="opco" element={<Opco />} />
      </Routes>
    </div>
  );
}

export default App;
