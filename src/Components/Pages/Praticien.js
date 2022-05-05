import React from 'react'
import LeftPart from '../LeftPart/LeftPart';
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion';

import useDimension from '../hook/useDimension';


export default function Praticen() {

  const navigate = useNavigate();

  const goFifAchat = () => {
    navigate('/fifachat');
  }

  const goFifDpcAchat = () => {
    navigate('/fifdpcachat');
  }

  const browserWidth = useDimension();

  return (

    <div className={ browserWidth < 821  ? 'flex column' : 'flex row minh100vh surfacePro7-home' }>
      <LeftPart />

         {/* La balise "motion.div" est considérée comme une div */}
      <motion.div
        className='responsive-part-right w100p flex column center-content'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="center-content flex column">

          <h1 className='text-center mrg-10'>Où pratiquez-vous ?</h1>

          <div className={ browserWidth < 821  ? 'flex column': 'flex wrap center-content'}>
            <button className='btn center-content mrg-10' onClick={goFifDpcAchat}>En France métropolitaine</button>
            <button className='btn center-content mrg-10' onClick={goFifDpcAchat}> Département Outre-Mer (DOM)</button>
            <button className='btn center-content mrg-10' onClick={goFifAchat}>Territoire Outre-Mer (TOM)</button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
