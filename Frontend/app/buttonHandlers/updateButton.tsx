import DeviceType from "../types/deviceType";

export const handleUpdateClick = async (
    id: number,
    currentStatus: string,
    newName: string,
    newModel: string,
    newConvStat: string,
    devices: DeviceType[],
    setDevicesList: React.Dispatch<React.SetStateAction<DeviceType[]>>,
    setRefreshData: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
    try {
        const apiUrl = `${process.env.NEXT_PUBLIC_DEVICES_URL}/${id}`;
        const res = await fetch(apiUrl, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id,
                name: newName !== '' ? newName : devices.find(device => device.id === id)?.name || '',
                model: newModel !== '' ? newModel : devices.find(device => device.id === id)?.model || '',
                status: currentStatus,
                conversationStatus: newConvStat !== '' ? newConvStat : devices.find(device => device.id === id)?.conversationStatus || '',
            }),
        });

        setDevicesList(devices.map(device => (device.id === id ?
            {
                ...device,
                name: newName !== '' ? newName : device.name,
                model: newModel !== '' ? newModel : device.model,
                conversationStatus: newConvStat !== '' ? newConvStat : device.conversationStatus
            } : device))
        );
        setRefreshData(true);
    } catch(error) {
        console.error(`Error updating device: ${error}`);
    }
};