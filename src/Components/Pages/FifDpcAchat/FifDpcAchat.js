import React from 'react'
import Fifpl from '../../Cards/Fifpl'
import Dpc from '../../Cards/Dpc'
import Achat from '../../Cards/Achat'

import LeftPart from '../../LeftPart/LeftPart'

export default function FifDpcAchat() {
  return (
    <div className='flex row'>
      <LeftPart />
      <div className='flex column center w100p'>
        <h1 className='text-center'>Mes possibilités de financements</h1>
        <div className='flex wrap center'>
          <Fifpl />
          <Dpc />
          <Achat />
        </div>
      </div>
    </div>
  )
}
