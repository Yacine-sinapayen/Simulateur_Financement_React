import React from 'react'
import LeftPart from '../LeftPart/LeftPart';

export default function Etudiant() {
  return (
    <>
      <div className='flex row'>
        <LeftPart />
        <div className="w100p flex column center-content">
          <h1>Vous êtes Étudiant.e</h1>
          <div>
            <p>
              Etudiant.e : pas de prise en charge, vous pouvez bénéficier d’une remise étudiant au moment de votre inscription.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
