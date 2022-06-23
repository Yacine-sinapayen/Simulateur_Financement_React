import React from 'react'
import LeftPart from '../Components/LeftPart';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import useDimension from '../hook/useDimension';


export default function Salarie() {

  const navigate = useNavigate();

  const goOpcoDpc = () => {
    navigate('/opcodpc');
  }

  const goOpco = () => {
    navigate('/opco');
  }

  const browserWidth = useDimension();


  return (

    <div className={browserWidth < 821 ? 'flex column respon iphoneXR iphone-12-pro pixel5 galaxyS8 galaxyS20 surfaceDuo galaxyA5' : 'flex row minh100vh surfacePro7'}>
      <LeftPart />

      {/* La balise "motion.div" est considérée comme une div */}
      <motion.div
        className=' w100p flex column center-content self-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}>

        <div className="center-content flex column">

          <h1 className='text-center mrg-10'> Vous êtes salarié.e dans un</h1>

          <div className="flex wrap maxw640 center-content">
            <button className='btn center-content  mrg-10 w300' onClick={goOpcoDpc}>Centre de soin conventionné</button>
            <button className='btn center-content  mrg-10 w300' onClick={goOpcoDpc}>Service de santé des armées</button>
            <button className='btn center-content  mrg-10 w300' onClick={goOpco}>Centre de soin NON conventionné</button>
            <button className='btn center-content  mrg-10 w300' onClick={goOpco}>Service hospitalier</button>
          </div>

        </div>
      </motion.div>
    </div>
  )
}
