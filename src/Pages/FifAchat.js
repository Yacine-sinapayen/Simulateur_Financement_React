import React from 'react'
import Fifpl from '../Components/Fifpl'
import Achat from '../Components/Achat'
import LeftPart from '../Components/LeftPart';

import { motion } from 'framer-motion';

import useDimension from '../hook/useDimension';

export default function FifAchat() {

  const browserWidth = useDimension();

  return (
    <div className={browserWidth < 821 ? 'flex column respon iphoneXR iphone-12-pro pixel5 galaxyS8 galaxyS20 surfaceDuo galaxyA5' : 'flex row minh100vh surfacePro7'}>
      <LeftPart />

      <motion.div
        className='w100p flex column center-content'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className='center-content flex column ipadAir ipadMini'>

          <h1 className='text-center mrg-10'>Mes possibilités de financements</h1>

          <div className='flex wrap center-content'>
            <Fifpl />
            <Achat />
          </div>
          
        </div>
      </motion.div>
    </div>
  )
}
