import DeviceType from "./deviceType"

type DevicePrintType = {
    devicesList: DeviceType[];
    setDevicesList: React.Dispatch<React.SetStateAction<DeviceType[]>>;
    setRefreshData: React.Dispatch<React.SetStateAction<boolean>>;
    devices : DeviceType[];
}

export default DevicePrintType;