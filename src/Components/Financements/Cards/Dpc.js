import React from 'react'
import arrow from '../../../assets/arrow.svg'
import timer from '../../../assets/timer.svg'

export default function Dpc() {
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


                <div className="main mrg-b10 flex column h150">
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

                <div className="flex row center">
                    <a className="btn blue-bg" href="https://www.learnylib.com/" target="_blank" rel="noopener noreferrer">Choisir ma formation</a>
                </div>
            </div>
        </>
    )
}
