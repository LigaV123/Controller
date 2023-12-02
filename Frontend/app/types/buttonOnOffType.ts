import DeviceType from "./deviceType";

type ButtonOnOffType = {
    devices: DeviceType[];
    setStatus: React.Dispatch<React.SetStateAction<'on' | 'off' | 'all'>>;
}

export default ButtonOnOffType;