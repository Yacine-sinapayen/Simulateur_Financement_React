import React from 'react';
import OpcoCard from '../OpcoCard';
import LeftPart from '../LeftPart/LeftPart';
import { motion } from 'framer-motion';

import useDimension from '../hook/useDimension';



export default function Opco() {

  const browserWidth = useDimension();

  return (
    <div className={browserWidth < 821 ? 'flex column respon iphoneXR iphone-12-pro pixel5 galaxyS8 galaxyS20 surfaceDuo galaxyA5' : 'flex row minh100vh surfacePro7'}>
      <LeftPart />

      {/* La balise "motion.div" est considérée comme une div */}
      <motion.div
        className='responsive-part-right w100p  flex column center-content'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}>
        <h1 className='text-center mrg-10'>Mon financement</h1>
        <OpcoCard />
      </motion.div>
    </div>
  )
}
