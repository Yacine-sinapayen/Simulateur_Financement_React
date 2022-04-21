import React from 'react'
import arrow from '../assets/arrow.svg'
import timer from '../assets/timer.svg'

export default function Dpc() {

    const learnyLib = () => {
        window.open('https://www.learnylib.com/', '_blank');
    }

    const dpcPath = '/opcodpc' === window.location.pathname;

    return (
        <>
            <div className="block-cards">

                <h2 className="text-center bold">DPC</h2>

                <div className='center-content'>
                    <div className="price flex row w50p">
                        <img className="w20" src={timer} alt="" />
                        <p>14h/an de crédit DPC</p>
                    </div>
                </div>

                <div className={dpcPath ? 'mrg-b80' : "main mrg-b10 flex column"}>
                    <div className="flex row">
                        <img className="w20 mrg-r5" src={arrow} alt="" />
                        <p>Financement de la formation à 100% par l’ANDPC.</p>
                    </div>
                    <div className="flex row">
                        <img className="w20 mrg-r5" src={arrow} alt="" />
                        <p>Indemnité de l’ANDPC par formation suivie.</p>
                    </div>
                    <div className="flex row">
                        <img className="w20 mrg-r5" src={arrow} alt="" />
                        <p>Nécessite la création d’un compte DPC. </p>
                    </div>
                </div>

                <div className='center-content'>
                    <button className="btn center-content" onClick={learnyLib}>Choisir ma formation</button>
                </div>
            </div>
        </>
    )
}
