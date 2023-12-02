import React, {useState} from 'react'
import DeviceType from '../types/deviceType';
import ButtonOnOffType from '../types/buttonOnOffType';

const buttonDesign = "flex justify-center items-center w-[98px] h-9 rounded-md py-1.5 pr-1.5 pl-4 gap-2.5 bg-white border-[1px] border-another-light-gray";
const buttonTextDesign = 'w-[42px] h-5 font-medium text-sm tracking-[-0.2px] text-center text-dark-blue';
const buttonLabelDesign = 'w-6 h-6 rounded-md py-1 px-2 gap-2.5 bg-light-gray';
const buttonLabelTextDesign = 'w-2 h-4 font-medium text-xs tracking-[-0.2px] text-medium-gray';

const clickedButtonDesign = "flex justify-center items-center w-[98px] h-9 rounded-md py-1.5 pr-1.5 pl-4 gap-2 bg-light-blue border-x-[1px] border-t-[1px] border-b-0";
const clickedButtonTextDesign = 'w-11 h-5 font-medium text-sm tracking-[-0.2px] text-center text-white';
const clickedButtonLabelDesign = 'w-6 h-6 rounded-md py-1 px-2 gap-2.5 bg-very-light-blue';
const clickedButtonLabelTextDesign = 'w-2 h-4 font-medium text-xs tracking-[-0.2px] text-smokey-blue';

const ButtonsOnOff = ({devices, setStatus} : ButtonOnOffType) => {
    const [clickedOnButton, setClickedOnButton] = useState<boolean>(false);
    const [clickedOffButton, setClickedOffButton] = useState<boolean>(false);

    const devicesOn: DeviceType[] = devices.filter(d => d.status.toLowerCase() === 'on');
    const devicesOff: DeviceType[] = devices.filter(d => d.status.toLowerCase() === 'off');

  return (
    <div className='flex flex-row w-[200px] h-9 gap-1'>
        <button onClick={() => {setStatus('on'); setClickedOnButton(true); setClickedOffButton(false)}} className={!clickedOnButton ? buttonDesign : clickedButtonDesign}>
            <div className={!clickedOnButton ? buttonTextDesign : clickedButtonTextDesign}>
                Online
            </div>
            <div className={!clickedOnButton ? buttonLabelDesign : clickedButtonLabelDesign}>
                <div className={!clickedOnButton ? buttonLabelTextDesign : clickedButtonLabelTextDesign}>
                    {devicesOn.length}
                </div>
            </div>
        </button>

        <button onClick={() => {setStatus('off'); setClickedOnButton(false); setClickedOffButton(true)}} className={!clickedOffButton ? buttonDesign : clickedButtonDesign}>
            <div className={!clickedOffButton ? buttonTextDesign : clickedButtonTextDesign}>
                Offline
            </div>
            <div className={!clickedOffButton ? buttonLabelDesign : clickedButtonLabelDesign}>
                <div className={!clickedOffButton ? buttonLabelTextDesign : clickedButtonLabelTextDesign}>
                    {devicesOff.length}
                </div>
            </div>
        </button>
    </div>  
  )
}

export default ButtonsOnOff

