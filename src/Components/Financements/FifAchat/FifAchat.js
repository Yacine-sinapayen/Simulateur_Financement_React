import React from 'react'
import Fifpl from '../Cards/Fifpl'
import Achat from '../Cards/Achat'


export default function FifAchat() {
  return (
      <div className='light-bg flex wrap center'>
        <h1 className='text-center'>Mes possibilités de financements</h1>
        <div className='flex wrap center'>
          <Fifpl />
          <Achat />
        </div>
      </div>
  )
}
