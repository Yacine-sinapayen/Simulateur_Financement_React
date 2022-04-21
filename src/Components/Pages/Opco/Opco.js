import React from 'react';
import OpcoCard from '../../Cards/OpcoCard';
import LeftPart from '../../LeftPart/LeftPart'

export default function Opco() {
  return (
    <div className='flex row'>
      <LeftPart />
      <div className='flex column center-content w100p'>
        <h1 className='text-center'>Mon financement</h1>
          <OpcoCard />
      </div>
    </div>
  )
}
