import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Praticien from './Components/Status/Praticien/Praticien';
import Salarie from './Components/Status/Salarie/Salarie';
import Etudiant from './Components/Status/Etudiant/Etudiant';

import FifAchat from './Components/Financements/FifAchat/FifAchat';
import FifDpcAchat from './Components/Financements/FifDpcAchat/FifDpcAchat';
import OpcoDpc from './Components/Financements/OpcoDpc/OpcoDpc';
import Opco from './/Components/Financements/Opco/Opco';

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
