import React from 'react';

import Logo2 from '../../assets/Logo2.svg';
import useDimension from '../hook/useDimension';


export default function LeftPart() {

    return (
        <div className='header w700 flex column dark-bg' >
            <img  className='img-logo-r flex1 center-content' src={Logo2} alt="" />
        </div>
    )
}
