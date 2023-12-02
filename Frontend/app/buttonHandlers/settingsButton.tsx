export const handleSettingsClick = (
    id: number,
    setExpandedDeviceId: React.Dispatch<React.SetStateAction<number | null>>,
    setExpandedSettings: React.Dispatch<React.SetStateAction<number | null>>
    ) => {
    setExpandedDeviceId(null);
    setExpandedSettings((prevId) => prevId === id ? null : id);
};