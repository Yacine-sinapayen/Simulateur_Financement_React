import React from 'react'
import Fifpl from '../../Cards/Fifpl'
import Achat from '../../Cards/Achat'
import LeftPart from '../../LeftPart/LeftPart'


export default function FifAchat() {
  return (
    <div className='flex row'>
      <LeftPart />
      <div className='flex wrap column center-content w100p'>
        <h1 className=''>Mes possibilités de financements</h1>
        <div className='flex row center'>
          <Fifpl />
          <Achat />
        </div>
      </div>
    </div>
  )
}
