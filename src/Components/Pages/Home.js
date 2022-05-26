import React from 'react';
import { useNavigate } from 'react-router-dom';
import LeftPart from '../LeftPart/LeftPart';
import { motion } from 'framer-motion';

import useDimension from '../hook/useDimension';

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

    const browserWidth = useDimension();
    
    return (
        <div className={ browserWidth < 821  ? 'flex column' : 'flex row surfacePro7-home minh100vh'}>

            <LeftPart />

            <motion.div
                className='w100p flex column center-content'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
            
                <div className='center-content flex column '>

                    <h1 className='text-center mrg-10'>Bienvenue sur votre simulateur de financement ! </h1>

                    <h1 className='text-center mrg-10'>Vous êtes ?</h1>

                    <div className={ browserWidth < 821  ? 'flex column': 'flex wrap center-content'}>
                        <button className=' btn center-content mrg-10' onClick={goPraticien}>Praticien.ne libéral</button>
                        <button className=' btn center-content mrg-10' onClick={goSalarie}>Salarié.e </button>
                        <button className='btn center-content mrg-10 ' onClick={goEtudiant}>Étudiant.e</button>
                    </div>
                </div>

            </motion.div>
        </div>


    )
}
