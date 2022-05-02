import React from 'react'
import arrow from '../assets/arrow.svg'

export default function Achat() {

    const learnyLib = () => {
        window.open('https://www.learnylib.com/', '_blank');
    }

    return (
        <>
            <div className=" block-cards block-cards-responsive flex column center-content">

                <h2 className="text-center bold">Achat Direct</h2>

                <div className="main mrg-b15 flex column center-content">
                    <div className="flex row top">
                        <img className="pdg-t10 w20 mrg-r5" src={arrow} alt="" />
                        <p>En tant que libéral, vous pouvez faire passer votre inscription en frais professionnels (frais à déduire de votre déclaration de revenus).</p>
                    </div>
                    <div className="flex row top">
                        <img className="pdg-t10 w20 mrg-r5" src={arrow} alt="" />
                        <p>Ces frais peuvent faire l’objet d’un crédit d’impôt (à valider avec votre comptable).</p>
                    </div>
                </div>

                <button className="center-content" onClick={learnyLib}>Choisir ma formation</button>

            </div>
        </>
    )
}
