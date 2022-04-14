import React from 'react'
import arrow from '../../../assets/arrow.svg'

export default function Achat() {
    return (
        <>
            <div className="block-cards">
                <h2 className="text-center bold">Achat Direct</h2>

                <div className="main main-achat mrg-b10 flex column h150">
                    <div className="flex row top">
                        <img className="pdg-t10 w20 mrg-r5" src={arrow} alt="" />
                        <p>En tant que libéral, vous pouvez faire passer votre inscription en frais professionnels (frais à déduire de votre déclaration de revenus).</p>
                    </div>
                    <div className="flex row top">
                        <img className="pdg-t10 w20 mrg-r5" src={arrow} alt="" />
                        <p>Ces frais peuvent faire l’objet d’un crédit d’impôt (à valider avec votre comptable).</p>
                    </div>
                </div>

                <div className="flex row center">
                    <a className="btn blue-bg" href="https://www.learnylib.com/" target="_blank" rel="noopener noreferrer">Choisir ma formation</a>
                </div>
            </div>
        </>
    )
}
