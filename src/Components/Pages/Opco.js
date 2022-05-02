import React from 'react';
import OpcoCard from '../OpcoCard';
import LeftPart from '../LeftPart/LeftPart';
import { motion } from 'framer-motion';

import useDimension from '../hook/useDimension';



export default function Opco() {

  const browserWidth = useDimension();

  return (
    <div className={ browserWidth < 700 ? 'flex column' : 'flex row'}>
      <LeftPart />

      {/* La balise "motion.div" est considérée comme une div */}
      <motion.div
        className='right-part-responsive w100p h100vh flex column center-content'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}>
        <h1 className='text-center mrg-10'>Mon financement</h1>
        <OpcoCard />
      </motion.div>
    </div>
  )
}
