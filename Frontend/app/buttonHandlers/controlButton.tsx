import DeviceType from "../types/deviceType";

export const handleControlClick = async (
    id: number,
    currentStatus: string,
    currentName: string,
    currentModel: string,
    currentConversationStatus: string,
    setDevicesList: React.Dispatch<React.SetStateAction<DeviceType[]>>,
    setExpandedSettings: React.Dispatch<React.SetStateAction<number | null>>,
    setRefreshData: React.Dispatch<React.SetStateAction<boolean>>,
    devices: DeviceType[]
) => {
    try {
        const newStatus = currentStatus.toLowerCase() === 'on' ? 'off' : 'on';
        const apiUrl = `${process.env.NEXT_PUBLIC_DEVICES_URL}/${id}`;

        const res = await fetch(apiUrl, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id,
                name: currentName,
                model: currentModel,
                status: newStatus,
                conversationStatus: currentConversationStatus,
            }),
        });

        setDevicesList(devices.map(device => (device.id === id ? { ...device, status: newStatus } : device)));
        setExpandedSettings(null);
        setRefreshData(true);
    } catch (error) {
        console.error(`Error updating device status: ${error}`);
    }
};