import React from 'react';
import DeviceType from '../types/deviceType';

const label = "w-full h-4 font-normal text-xs tracking-[-0.2px] text-medium-gray";
const value = "w-full h-[22px] font-medium text-sm/[22px] tracking-[-0.2px] text-dark-blue";

const Devices = ({ name, model, status, conversationStatus } : DeviceType) => {
    return (
    <div className='flex flex-row w-[874px] h-[38px] gap-4'>

        <div className='flex flex-row w-[250px] h-[38px] gap-3'>
            <div className='flex justify-center items-center w-3'>
               <div className={`w-2 h-2 rounded-full ${status.toLowerCase() === 'on' ? "bg-green-600" : "bg-[#B8143D]"}`}></div> 
            </div>
            <div className='w-[232px] h-[38px]'>
                <p className={value}>
                    {name}
                </p>
                <p className={label}>
                    Connection: <span className='font-medium'>{status.toLowerCase() === 'on' ? '100' : '0'}%</span>
                </p>
            </div>
        </div>

        <div className='w-[140px] h-[38px]'>
            <p className={`${label} opacity-70`} >
                Model
            </p>
            <p className={value}>
                {model}
            </p>
        </div>

        <div className='w-[452px] h-[38px]'>
            <p className={`${label} opacity-70`}>
                Con-stat
            </p>
            <p className={value}>
                {conversationStatus !== '0' ? 
                conversationStatus + '/' + conversationStatus 
                : '0'} messages over 28 days
            </p>
        </div>
    </div>
  )
}

export default Devices