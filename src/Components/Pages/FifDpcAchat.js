import React from 'react'
import Fifpl from '../Fifpl'
import Dpc from '../Dpc'
import Achat from '../Achat'
import { motion } from 'framer-motion'

import useDimension from '../hook/useDimension';


import LeftPart from '../LeftPart/LeftPart'

export default function FifDpcAchat() {

  const browserWidth = useDimension();

  return (
    <div  className={ browserWidth < 700 ? 'flex column' : 'flex row'}>
      <LeftPart />

      <motion.div
        className='right-part-responsive w100p h100vh center-content flex column'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
  
        <h1 className='text-center'>Mes possibilités de financements</h1>
        <div className='flex wrap center'>
          <Dpc />
          <Achat />
          <Fifpl />
        </div>
      </motion.div>
    </div>
  )
}
