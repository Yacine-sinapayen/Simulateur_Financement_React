import React from 'react'
import arrow from '../../../assets/arrow.svg'
import flag from '../../../assets/flag.svg'

export default function Fifpl() {
    return (
        <>
            <div className="block-cards">
                <h2 className="text-center bold">FIF-PL</h2>

                <div className='center-content'>
                    <div className="price flex row w80p">
                        <img className="w20" src={flag} alt="" />
                        <p>Jusqu’à 750€/an de prise en charge</p>
                    </div>

                </div>

                <div className="main mrg-b10 flex column h150">
                    <div className="flex row top">
                        <img className="pdg-t10 w20 mrg-r5 " src={arrow} alt="" />
                        <p>Remboursement a postériori après dépôt de votre demande de prise en charge sur votre compte FIFPL</p>
                    </div>
                </div>

                <div className="flex row center">
                    <a className="btn blue-bg" href="https://www.learnylib.com/" target="_blank" rel="noopener noreferrer">Choisir ma formation</a>
                </div>
            </div>
        </>
    )
}
