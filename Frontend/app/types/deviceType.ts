type DeviceType = {
    id: number;
    name: string;
    model: string;
    status: 'on' | 'off';
    conversationStatus: string
}

export default DeviceType;