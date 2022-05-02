import React from 'react'
import LeftPart from '../LeftPart/LeftPart';
import { motion } from 'framer-motion'

export default function Etudiant() {

  const learnyLib = () => {
    window.open('https://www.learnylib.com/', '_blank');
  }
  return (
    <>
      <div className='flex'>
        <LeftPart />

        <motion.div
          className='w100p h100vh center-content flex column'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h1 className='text-center'>Vous êtes Étudiant.e</h1>
          <div className='flex wrap w75p center-content'>
            <p className='text-center mrg-b10'>
              Etudiant.e : pas de prise en charge, vous pouvez bénéficier d’une remise étudiant au moment de votre inscription.
            </p>
            <button className="center-content" onClick={learnyLib}>Choisir ma formation</button>
          </div>
        </motion.div>
      </div>
    </>
  )
}
