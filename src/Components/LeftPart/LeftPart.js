import React from 'react';
import backHome from '../../assets/backHome.svg';
import LogoDpc from '../../assets/LogoDpc.png';
import LogoFifpl from '../../assets/LogoFifpl.png';
import LogoOpco from '../../assets/LogoOpco.png';
import LogoQualiopi from '../../assets/LogoQualiopi.png';


export default function LeftPart() {
    return (
        <div className='flex column w75p'>
            <div className="flex row center">
            <img src={backHome} alt="" />
                <a className="white" href="https://www.learnylib.com/" target="_blank" rel="noopener noreferrer">Learnylib</a>
            </div>            
            
            <div className=''>hello LeftPart</div>
            <footer className='flex row w100p red-bg space-between'>
                <img className='w100 h50' src={LogoDpc} alt="" />
                <img className='w100 h50' src={LogoFifpl} alt="" />
                <img className='w100 h50' src={LogoOpco} alt="" />
                <img className='w100 h50' src={LogoQualiopi} alt="" />
            </footer>
        </div>
    )
}
