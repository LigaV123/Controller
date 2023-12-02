export const handleArrowClick = (
    id: number,
    setExpandedDeviceId: React.Dispatch<React.SetStateAction<number | null>>,
    setExpandedSettings: React.Dispatch<React.SetStateAction<number | null>>
    ) => {
    setExpandedSettings(null);
    setExpandedDeviceId((prevId) => prevId === id ? null : id);
};