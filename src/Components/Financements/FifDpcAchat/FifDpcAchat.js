import React from 'react'
import Fifpl from '../Cards/Fifpl'
import Dpc from '../Cards/Dpc'
import Achat from '../Cards/Achat'

export default function FifDpcAchat() {
  return (
    <div className='flex wrap center'>
      <h1 className='text-center'>Mes possibilités de financements</h1>
      <div className='flex wrap center'>
        <Fifpl />
        <Dpc />
        <Achat />
      </div>
    </div>
  )
}
