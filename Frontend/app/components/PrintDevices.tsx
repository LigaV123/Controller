import React, { useState } from 'react'
import Device from './Device';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import DevicePrintType from '../types/devicePrintType';
import { handleSettingsClick } from '../buttonHandlers/settingsButton';
import { handleControlClick } from '../buttonHandlers/controlButton';
import { handleArrowClick } from '../buttonHandlers/detailsButton';
import Dropdown from './Dropdown';

/* styles */
const content = 'group flex flex-row w-full h-auto rounded-md border-[1px] py-3 pr-2 pl-5 gap-4 bg-white border-another-light-gray mb-1';

const buttonBox = 'h-9 rounded-md py-2 px-4 gap-2 bg-light-gray opacity-0 group-hover:opacity-100 transition-opacity mb-2';
const buttonValue = 'h-5 font-medium text-sm tracking-[-0.2px] text-center text-dark-blue';

const PrintDevices = ({ devicesList, setDevicesList, setRefreshData, devices }: DevicePrintType) => {
    const [expandedDeviceId, setExpandedDeviceId] = useState<number | null>(null);
    const [expandedSettings, setExpandedSettings] = useState<number | null>(null);

    return (
        <div>
            {devicesList.map(({id, name, model, status, conversationStatus}) => (
                <div key={id}
                    className={content}>
                    
                    <Device 
                        id={id} 
                        name={name} 
                        model={model} 
                        status={status} 
                        conversationStatus={conversationStatus}
                    />

                    <div>
                        <div className='w-[212px] h-9 gap-1 bg-white'>

                            <button 
                                onClick={() => handleSettingsClick(id, setExpandedDeviceId, setExpandedSettings)} 
                                className={`${buttonBox} w-[87px] mr-1`}>
                                <p className={`${buttonValue} w-[55px]`}>
                                    Settings
                                </p>
                            </button>

                            <button 
                                onClick={() => handleControlClick(id, status, name, model, conversationStatus,
                                    setDevicesList, setExpandedSettings, setRefreshData, devices)}
                                className={`${buttonBox} w-[81px]`}>
                                <p className={`${buttonValue} w-[49px]`}>
                                    Control
                                </p>
                            </button>

                            <button 
                                onClick={() => handleArrowClick(id, setExpandedDeviceId, setExpandedSettings)}
                                className='w-9 h-9 rounded-md bg-white'>
                                <FontAwesomeIcon 
                                    className='text-[#9DA0AF]'
                                    size='xs'
                                    icon={faAngleRight}
                                /> 
                            </button>
                        </div>
                        
                        <Dropdown
                            id={id}
                            name={name}
                            model={model}
                            status={status}
                            conversationStatus={conversationStatus}
                            expandedDeviceId={expandedDeviceId}
                            expandedSettings={expandedSettings}
                            devices={devices}
                            setDevicesList={setDevicesList}
                            setRefreshData={setRefreshData}
                        />
                    </div>
                </div>  
            ))}
        </div>
    )
}

export default PrintDevices;