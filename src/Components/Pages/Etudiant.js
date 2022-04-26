import React from 'react'
import LeftPart from '../LeftPart/LeftPart';

export default function Etudiant() {
  return (
    <>
      <div className='flex'>
        <LeftPart />
        <div className="w100p flex column center-content">
          <h1 className='text-center'>Vous êtes Étudiant.e</h1>
          <div>
            <p className='text-center'>
              Etudiant.e : pas de prise en charge, vous pouvez bénéficier d’une remise étudiant au moment de votre inscription.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
