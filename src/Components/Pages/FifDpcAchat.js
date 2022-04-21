import React from 'react'
import Fifpl from '../Fifpl'
import Dpc from '../Dpc'
import Achat from '../Achat'
import { motion } from 'framer-motion'

import LeftPart from '../LeftPart/LeftPart'

export default function FifDpcAchat() {
  return (
    <motion.div className='flex row'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <LeftPart />
      <div className='flex column center w100p'>
        <h1 className='text-center'>Mes possibilités de financements</h1>
        <div className='flex wrap center'>
          <Fifpl />
          <Dpc />
          <Achat />
        </div>
      </div>
    </motion.div>
  )
}
