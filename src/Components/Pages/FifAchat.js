import React from 'react'
import Fifpl from '../Fifpl'
import Achat from '../Achat'
import LeftPart from '../LeftPart/LeftPart'


export default function FifAchat() {
  return (
    <div className='flex'>
      <LeftPart />
      <div className='flex column center-content w100vh'>
        <h1 className='text-center'>Mes possibilités de financements</h1>
        <div className='flex wrap center'>
          <Fifpl />
          <Achat />
        </div>
      </div>
    </div>
  )
}
