import React from 'react'
import Dpc from '../Dpc';
import OpcoCard from '../OpcoCard';
import LeftPart from '../LeftPart/LeftPart'

export default function OpcoDpc() {
  return (
    <div className='flex row'>
      <LeftPart />
      <div className='flex wrap column center-content w100p'>
        <h1 className='text-center'>Mes possibilités de financements</h1>
        <div className='flex wrap center'>
          <OpcoCard />
          <Dpc />
        </div>
      </div>
    </div>
  )
}
