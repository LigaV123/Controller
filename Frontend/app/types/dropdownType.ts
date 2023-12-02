import DeviceType from "./deviceType";

type DropdownType = {
    id: number;
    name: string;
    model: string;
    status: 'on' | 'off';
    conversationStatus: string;
    expandedDeviceId: number | null;
    expandedSettings: number | null;
    devices: DeviceType[];
    setDevicesList: React.Dispatch<React.SetStateAction<DeviceType[]>>,
    setRefreshData: React.Dispatch<React.SetStateAction<boolean>>
}

export default DropdownType;