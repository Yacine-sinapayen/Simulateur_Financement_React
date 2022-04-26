import React from 'react';
import './LeftPart.css';

import Logo2 from '../../assets/Logo2.svg';


export default function LeftPart() {
    return (
        <div className='left-part flex column dark-bg'>
            <img  className='flex1 center-content' src={Logo2} alt="" />
        </div>
    )
}
