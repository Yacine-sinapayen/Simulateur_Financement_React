import React from 'react'
import Dpc from '../Cards/Dpc';
import OpcoCard from '../Cards/OpcoCard';

export default function OpcoDpc() {
  return (
    <div className='flex wrap center'>
      <h1 className='text-center'>Mes possibilités de financements</h1>
      <div className='flex wrap center'>
        <Dpc />
        <OpcoCard />
      </div>
    </div>
  )
}
