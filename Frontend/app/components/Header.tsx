'use client'
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faChessBoard, faFolderOpen, 
  faDesktop, faGear, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const name: string = "User Name";

const Head = () => {
  const pathName = usePathname();

  const getPageName = () => {
    if (pathName.length > 1){
      const firstLetter = pathName[1].toUpperCase();
      const remainigLetters = pathName.slice(2);
      return firstLetter + remainigLetters;
    }

    return null;
  };

  const controlColor = (path: string, element: 'value' | 'logo') => {
    var pageName = getPageName();
    var generalStyle = '';
    var color = '';

    if (pageName === null) {
      pageName = 'devices';
    };
    
    if (element === 'value'){
      generalStyle = "h-[22px] font-medium text-sm/[22px] tracking-[-0.2px] ";
      color = pageName.toLowerCase() === path.toLowerCase() ? 'text-white' : 'text-[#C5C7D3]';
    } else {
      color = pageName.toLowerCase() === path.toLowerCase() ? 'mr-1 text-light-blue' : 'mr-1 text-[#9DA0AF]';
    };

    return generalStyle + color;
  };

  return (
    <header className='w-full h-[169px] px-0 pt-0 pb-5 bg-dark-blue'>
      <div className='w-full h-[72px] border-b-[1px] py-4 px-5 gap-2.5 bg-dark-blue border-[#E2E3E91A]'>
        <div className='mx-auto flex flex-row w-[1170px] h-10'>

          <div className='w-[118px] h-10 pr-[52px] gap-2.5'>
            <div className='flex justify-center items-center w-14 h-11 border-2 border-light-blue rounded-md'>
              <FontAwesomeIcon icon={faLaptopCode} size="2xl" style={{color: "#fefefe",}} className='z-30'/>
              <div className='w-2.5 h-16 bg-dark-blue absolute mx-auto'></div>
            </div>
          </div>

          <div className='flex flex-row justify-between my-auto w-[534px] h-6 gap-8'>
            <div className='w-[104px] h-6'>
              <Link href="/dashboard" className={`w-[72px] ${controlColor('dashboard', 'value')}`}>
              <FontAwesomeIcon icon={faChessBoard} size='lg' className={controlColor('dashboard', 'logo')}/>
                Dashboard
              </Link>
            </div>
            <div className='w-[109px] h-6'>
              <Link href="/connectors" className={`w-[77px] ${controlColor('connectors', 'value')}`}>
              <FontAwesomeIcon icon={faFolderOpen} size='lg' className={controlColor('connectors', 'logo')}/>
                Connectors
              </Link>
            </div>
            <div className='w-[84px] h-6'>
              <Link href="/devices" className={`w-[84px] ${controlColor('devices', 'value')}`}>
              <FontAwesomeIcon icon={faDesktop} size='lg' className={controlColor('devices', 'logo')}/>
                Devices
              </Link>
            </div>
            <div className='w-[141px] h-6'>
              <Link href="/generalSettings" className={`w-[109px] ${controlColor('generalSettings', 'value')}`}>
              <FontAwesomeIcon icon={faGear} size='lg' className={controlColor('generalSettings', 'logo')}/>
                General Settings
              </Link>
            </div>
          </div>
          
          <div className='flex ml-96 w-[300px] h-8 gap-2'>
            <div className='flex justify-center items-center w-8 h-8 rounded-full bg-[#9FA6C1] bg-gradient-to-b from-[#CDD2E2]'>
              <p className='w-[22px] h-[17px] font-semibold text-sm/[16.94px] tracking-[-0.2px] text-center text-dark-blue'>
                {name.charAt(0)}
              </p>
            </div>
            <div className='my-auto w-24 h-[22px] gap-1'>
              <p className='w-full h-[22px] font-medium text-sm/[22px] tracking-[-0.2px] text-[#E2E3E9]'>
                {name}
                <FontAwesomeIcon icon={faChevronDown} size="2xs" className='w-2 h-1.5 pl-1'/>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex items-center w-[1170px] h-[57px] gap-3 m-auto'>
        <div className='flex flex-col w-16 h-[17px] gap-2'>
          <div className='w-16 h-[17px] font-medium text-sm/[16.94px] tracking-[-0.2px] text-[#C5C7D3]'>
            Home <span className='w-[6px] h-[17px] opacity-20'>/</span>
          </div>
          <div className='w-[1170px] h-[28px] font-medium text-xl tracking-[-0.3px] text-white'>
            {getPageName() === null ? 'Devices' : getPageName()}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Head