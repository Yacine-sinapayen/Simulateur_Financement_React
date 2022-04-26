import React from 'react'
import arrow from '../assets/arrow.svg'
import timer from '../assets/timer.svg'

export default function Dpc() {

    const learnyLib = () => {
        window.open('https://www.learnylib.com/', '_blank');
    }

    return (
        <>
            <div className="block-cards flex column center-content">

                <h2 className="text-center bold">DPC</h2>

                <div className='center-content'>
                    <div className="price flex row">
                        <img className="w20" src={timer} alt="" />
                        <p>14h/an de crédit DPC</p>
                    </div>
                </div>

                <div
                    // className={ usePathname ? "mrg-b82" : "main mrg-b10 flex column"}
                    className="main mrg-b10 flex column"
                >
                    <div className="flex row top">
                        <img className="pdg-t10 w20 mrg-r5" src={arrow} alt="" />
                        <p>Financement de la formation à 100% par l’ANDPC.</p>
                    </div>
                    <div className="flex row top">
                        <img className="pdg-t10 w20 mrg-r5" src={arrow} alt="" />
                        <p>Indemnité de l’ANDPC par formation suivie.</p>
                    </div>
                    <div className="flex row top">
                        <img className="pdg-t10 w20 mrg-r5" src={arrow} alt="" />
                        <p>Nécessite la création d’un compte DPC. </p>
                    </div>
                </div>

                <button className="center-content" onClick={learnyLib}>Choisir ma formation</button>

            </div>
        </>
    )
}
