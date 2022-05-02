import React from 'react'
import Fifpl from '../Fifpl'
import Achat from '../Achat'
import LeftPart from '../LeftPart/LeftPart'

import { motion } from 'framer-motion';

import useDimension from '../hook/useDimension';

export default function FifAchat() {

  const browserWidth = useDimension();

  return (
    <div className={ browserWidth < 700 ? 'flex column' : 'flex row' }>
      <LeftPart />
      <motion.div
        className=' right-part-responsive h100vh  center-content flex column'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1 className='text-center'>Mes possibilités de financements</h1>
        <div className='flex wrap center'>
          <Fifpl />
          <Achat />
        </div>
      </motion.div>
    </div>
  )
}
