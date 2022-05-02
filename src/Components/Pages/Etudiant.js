import React from 'react'
import LeftPart from '../LeftPart/LeftPart';
import { motion } from 'framer-motion'

import useDimension from '../hook/useDimension';


export default function Etudiant() {

  const learnyLib = () => {
    window.open('https://www.learnylib.com/', '_blank');
  }

  const browserWidth = useDimension();

  return (
    <div className={browserWidth < 700 ? 'flex column' : 'flex row'}>

      <LeftPart />

      <motion.div
        className='right-part-responsive w100p h100vh flex column center-content'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >

        <div className='center-content flex column'>

          <h1 className='text-center mrg-10'>Vous êtes Étudiant.e</h1>

          <div className='flex wrap center-content w75p '>
            <p className='text-center mrg-b10'>
              Etudiant.e : pas de prise en charge, vous pouvez bénéficier d’une remise étudiant au moment de votre inscription.
            </p>
            <button className="btn center-content mrg-10" onClick={learnyLib}>Choisir ma formation</button>

          </div>
        </div>
      </motion.div>
    </div>
  )
}
