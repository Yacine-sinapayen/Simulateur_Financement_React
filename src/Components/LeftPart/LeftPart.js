import React from 'react';
import './LeftPart.css';

import LogoDpc from '../../assets/LogoDpc.png';
import LogoFifpl from '../../assets/LogoFifpl.png';
import LogoOpco from '../../assets/LogoOpco.png';
import LogoQualiopi from '../../assets/LogoQualiopi.png';
import Logo from '../../assets/Logo.svg';

import backHome from '../../assets/backHome.svg';
import Logo2 from '../../assets/Logo2.svg';


export default function LeftPart() {
    return (
        <div className='left-part flex column dark-bg'>
            <div className="flex row middle">
            <img className='w30' src={backHome} alt="" />
                <a className="white" href="https://www.learnylib.com/" target="_blank" rel="noopener noreferrer">Retour au site</a>
            </div>            
            <img  className='flex1 center-content' src={Logo2} alt="" />
            {/* <footer className='flex w100p space-around pdg-b10'>
                <img className='logo-orga' src={LogoDpc} alt="" />
                <img className='logo-orga' src={LogoFifpl} alt="" />
                <img className='logo-orga' src={LogoOpco} alt="" />
                <img className='logo-orga' src={LogoQualiopi} alt="" />
            </footer> */}
        </div>
    )
}
