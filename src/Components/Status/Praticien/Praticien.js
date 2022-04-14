import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Praticen() {

  const navigate = useNavigate();

  const goFifAchat = () => {
    navigate('/fifachat');
  }

  const goFifDpcAchat = () => {
    navigate('/fifdpcachat');
  }

  return (
    <div className='main-content flex column center-content'>

      <h1>Où pratiquez-vous ?</h1>

      <div className='flex'>
        <button className='mrg-10 btn center-content' onClick={goFifDpcAchat}> Département Outre-Mer (DOM)</button>
        <button className='mrg-10 btn center-content' onClick={goFifDpcAchat}>En france métropolitaine ?</button>
        <button className='mrg-10 btn center-content' onClick={goFifAchat}>Territoire Outre-Mer (TOM)</button>
      </div>

    </div>
  )
}
