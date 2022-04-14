import React from 'react';
import { useNavigate } from 'react-router-dom';
import LeftPart from '../LeftPart/LeftPart';

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
        <>
            <div className='flex row blue-bg'>
                <LeftPart />
                <div className='main-content flex column center-content green-bg'>
                    <h1>Vous êtes ?</h1>

                    <div className='flex'>
                        <button className='mrg-10 btn center-content' onClick={goPraticien}>Paticien.ne libéral</button>
                        <button className='mrg-10 btn center-content' onClick={goSalarie}>Salarié.e </button>
                        <button className='mrg-10 btn center-content' onClick={goEtudiant}>Étudiant.e</button>
                    </div>

                </div>

            </div>

        </>
    )
}
