import React from 'react'
import arrow from '../../../assets/arrow.svg'

export default function Opco() {
    return (
        <>
            <div className="block-cards">
                <h2 className="text-center bold">OPCO</h2>

                <div className="main mrg-b10 flex column h150">
                    <div className="flex row top">
                        <img className="pdg-t10 w20 mrg-r5" src={arrow} alt="" />
                        <span className="pdg-t8">L'OPCO : Organisme de prise en charge des formations professionelles pour les employés.</span>
                    </div>
                    <div className="flex row top">
                        <img className="pdg-t10 w20 mrg-r5" src={arrow} alt="" />
                        <p>Votre employeur doit être adhérent à l’OPCO, rapprochez-vous de lui pour connaitre vos droits.</p>
                    </div>
                    <div className="flex row top">
                        <img className="pdg-t10 w20 mrg-r5" src={arrow} alt="" />
                        <p>Jusqu’à 6 mois pour envoyer la demande de remboursement après achat de la formation..</p>
                    </div>
                </div>
                
                <div className="flex row center">
                    <a className="btn blue-bg" href="https://www.learnylib.com/" target="_blank" rel="noopener noreferrer">Choisir ma formation</a>
                </div>
            </div>
        </>
    )
}
