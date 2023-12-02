import React, {useState} from 'react';
import DropdownType from '../types/dropdownType';
import { handleDeleteClick } from '../buttonHandlers/deleteButton';
import { handleUpdateClick } from '../buttonHandlers/updateButton';

const dropdownText = 'w-full h-4 font-normal text-xs tracking-[-0.2px] text-medium-gray';
const dropdownInput = 'w-[212px] h-[18px] font-normal text-sm/[18px] tracking-[-0.2px] text-dark-blue';
const dropdownCaption = 'w-full h-6 font-medium text-base tracking-[-0.2px] text-dark-blue';

const Dropdown = ({expandedDeviceId, expandedSettings, id, name, model, status,
  conversationStatus, devices, setDevicesList, setRefreshData}: DropdownType) => {
  const [newName, setNewName] = useState<string>('');
  const [newModel, setNewModel] = useState<string>('');
  const [newConvStat, setNewConvStat] = useState<string>('');

  return (
    <div className=' flex justify-between w-full'>
        {expandedDeviceId === id && (
            <div className='flex flex-col gap-1'>
                <h2 className={dropdownCaption}>Device Details</h2>
                <p className={dropdownText}>Device id: {id}</p>
                <p className={dropdownText}>Name: {name}</p>
                <p className={dropdownText}>Model: {model}</p>
                <p className={dropdownText}>Status: {status.toUpperCase()}</p>
                <p className={dropdownText}>Conversation Status: {conversationStatus}</p>
            </div>   
        )}
                            
        {expandedSettings === id && (
            <div className='flex flex-col gap-1'>
                <h2 className={dropdownCaption}>Device Settings</h2>
                <div className='flex flex-col gap-0'>
                    <p className={dropdownText}>New Name:</p>
                    <input 
                        className={dropdownInput}
                        type="text"
                        placeholder={ name }
                        value={ newName }
                        onChange={(e) => setNewName(e.target.value)}
                    />    
                </div>

                <div className='flex flex-col gap-0'>
                    <p className={dropdownText}>New Model:</p> 
                        <input 
                            className={dropdownInput}
                            type="text"
                            placeholder={ model }
                            value={ newModel }
                            onChange={(e) => setNewModel(e.target.value)}
                        />    
                </div>

                <div className='flex flex-col gap-0'>
                    <p className={dropdownText}>New Conversation Status:</p>
                    <input 
                        className={dropdownInput}
                        type="text"
                        placeholder={ conversationStatus }
                        value={ newConvStat }
                        onChange={(e) => setNewConvStat(e.target.value)}
                    />
                </div>

                <div className='flex gap-2.5'>
                    <button 
                        onClick={() => handleUpdateClick(id, status, newName, newModel,
                            newConvStat, devices, setDevicesList, setRefreshData)}
                        className="w-[98px] h-9 rounded-md py-2 px-4 gap-2 bg-light-blue">
                        <p className='h-5 font-medium text-sm tracking-[-0.2px] text-center text-dark-blue'>
                            Update
                        </p>
                    </button>

                    <button 
                        onClick={() => handleDeleteClick(id, setDevicesList, setRefreshData)}
                        className="w-[98px] h-9 rounded-md py-2 px-4 gap-2 bg-[#c71f49]">
                        <p className='h-5 font-medium text-sm tracking-[-0.2px] text-center text-dark-blue'>
                            Delete
                        </p>
                    </button>
                </div>
            </div>
        )}
    </div>
  )
}

export default Dropdown