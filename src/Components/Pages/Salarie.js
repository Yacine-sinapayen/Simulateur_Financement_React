import React from 'react'
import LeftPart from '../LeftPart/LeftPart';
import { useNavigate } from 'react-router-dom'

export default function Salarie() {

  const navigate = useNavigate();

  const goOpcoDpc = () => {
    navigate('/opcodpc');
  }

  const goOpco = () => {
    navigate('/opco');
  }

  return (

    <div className='flex row'>
      <LeftPart />
      <div className='w100p flex column center-content'>

        <h1> Vous êtes salarié.e</h1>

        <div className="flex">
          <button className='mrg-10 btn center-content' onClick={goOpcoDpc}>Centre de soin conventionné ?</button>
          <button className='mrg-10 btn center-content' onClick={goOpcoDpc}>Service de santé des armées ?</button>
          <button className='mrg-10 btn center-content' onClick={goOpco}>Centre de soin NON conventionné ?</button>
          <button className='mrg-10 btn center-content' onClick={goOpco}>Praticien hospitalier ?</button>
        </div>

      </div>
    </div>
  )
}
