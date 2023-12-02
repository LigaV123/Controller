import DeviceType from "../types/deviceType";

export const handleDeleteClick = async (
    id: number,
    setDevicesList: React.Dispatch<React.SetStateAction<DeviceType[]>>,
    setRefreshData: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
    try {
        const apiUrl = `${process.env.NEXT_PUBLIC_DEVICES_URL}/${id}`;
        const res = await fetch(apiUrl, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (res.ok) {
            setDevicesList(prevDevices => prevDevices.filter(device => device.id !== id));
            setRefreshData(true);
        } else {
            console.error(`Error deleting device: ${res.statusText}`);
        }

    } catch (error) {
        console.error(`Error deleting device: ${error}`);
    }
};