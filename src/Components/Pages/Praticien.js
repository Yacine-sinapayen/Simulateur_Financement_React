import React from 'react'
import LeftPart from '../LeftPart/LeftPart';
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion';

export default function Praticen() {

  const navigate = useNavigate();

  const goFifAchat = () => {
    navigate('/fifachat');
  }

  const goFifDpcAchat = () => {
    navigate('/fifdpcachat');
  }

  return (

    <motion.div
      className='flex row'

      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    
      >

      <LeftPart />
      <div className='w100p flex column center-content'>

        <h1>Où pratiquez-vous ?</h1>

        <div className='flex'>
          <button className='mrg-10 btn center-content' onClick={goFifDpcAchat}> Département Outre-Mer (DOM)</button>
          <button className='mrg-10 btn center-content' onClick={goFifDpcAchat}>En france métropolitaine ?</button>
          <button className='mrg-10 btn center-content' onClick={goFifAchat}>Territoire Outre-Mer (TOM)</button>
        </div>

      </div>
    </motion.div>
  )
}
