import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import Praticien from './Pages/Praticien';
import Salarie from './Pages/Salarie';
import Etudiant from './Pages/Etudiant';

import FifAchat from './Pages/FifAchat';
import FifDpcAchat from './Pages/FifDpcAchat';
import OpcoDpc from './Pages/OpcoDpc';
import Opco from './Pages/Opco';

import { AnimatePresence } from 'framer-motion';

export default function AnimateRoutes() {

    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes  location={location} key={location.pathname}>
                <Route exact path="/" element={<Home />} />

                <Route path="/praticien" element={<Praticien />} />
                <Route path="/salarie" element={<Salarie />} />
                <Route path="/etudiant" element={<Etudiant />} />

                <Route path="fifachat" element={<FifAchat />} />
                <Route path="fifdpcachat" element={<FifDpcAchat />} />
                <Route path="opcodpc" element={<OpcoDpc />} />
                <Route path="opco" element={<Opco />} />
            </Routes>
        </AnimatePresence>

    )
}
