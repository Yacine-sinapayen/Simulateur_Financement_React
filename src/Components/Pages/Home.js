import React from 'react';
import { useNavigate } from 'react-router-dom';
import LeftPart from '../LeftPart/LeftPart';
import { motion } from 'framer-motion';

export default function Home() {

    const navigate = useNavigate();

    const goPraticien = () => {
        navigate('/praticien');
    }
    const goSalarie = () => {
        navigate('/salarie');
    }
    const goEtudiant = () => {
        navigate('/etudiant');
    }
    return (
        <div className='flex row'>
            <LeftPart />
            <motion.div
                className='w100p flex column center-content'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <h1>Bienvenue sur votre simulateur de financement ! </h1>
                <h1>Vous êtes ?</h1>

                <div className='flex'>
                    <button className='mrg-10 btn center-content' onClick={goPraticien}>Paticien.ne libéral</button>
                    <button className='mrg-10 btn center-content' onClick={goSalarie}>Salarié.e </button>
                    <button className='mrg-10 btn center-content' onClick={goEtudiant}>Étudiant.e</button>
                </div>

            </motion.div>
        </div>


    )
}
