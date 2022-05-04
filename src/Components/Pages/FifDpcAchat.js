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
    <div className={browserWidth < 700 ? 'flex column ' : 'flex row'}>
      <LeftPart />

      <motion.div
        className='safari right-part-responsive w100p h100vh flex column center-content'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className='center-content flex column'>

          <h1 className='text-center mrg-10'>Mes possibilités de financements</h1>

          <div className='flex wrap center-content'>
            <Dpc />
            <Achat />
            <Fifpl />
          </div>

        </div>
      </motion.div>
    </div>
  )
}
