'use client'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import PrintDevices from '../components/PrintDevices';
import ButtonsOnOff from '../components/ButtonsOnOff';
import Search from '../components/Search';
import DeviceType from '../types/deviceType';

const DevicesPage = () => {
  const [refreshData, setRefreshData] = useState<boolean>(false);
  const [devices, setDevices] = useState<DeviceType[]>([]);
  const [searchWord, setSearchWord] = useState<string>('');
  const [status, setStatus]  = useState<'on' | 'off' | 'all'>('all');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `${process.env.NEXT_PUBLIC_DEVICES_URL}`;
        const res = await fetch(apiUrl);
        const fetchedDevices: DeviceType[] = await res.json();

        setDevices(fetchedDevices);
      } catch (error) {
        console.error(`Error fetching data: ${error}`);
      }
    }

    if (!devices.length || refreshData) {
      fetchData();
      setRefreshData(false);
    }
  }, [devices, refreshData]);

  const devicesOn: DeviceType[] = devices.filter(d => d.status.toLowerCase() === 'on');
  const devicesOff: DeviceType[] = devices.filter(d => d.status.toLowerCase() === 'off');

  const handleFilter = () => {
    let filterDev: DeviceType[] = [];

    switch (status){
    case 'on':
        filterDev = devicesOn;
    break;
    case 'off':
        filterDev = devicesOff;
    break;
    default:
        filterDev = devices;
    break;
    }
  
    return filterDev.filter(device =>
        device.name.toLowerCase().includes(searchWord.toLowerCase()) ||
        device.model.toLowerCase().includes(searchWord.toLowerCase())
    )
  };

  const getDisplayedCount = () => handleFilter().length;

  return (
    <div>
      <div className='absolute z-0 top-[169px] w-full h-10 bg-dark-blue'></div>
      <div className='relative z-50 h-screen px-0 pt-0 pb-[174px]'>
        <Header />

        <div className='w-[1170px] mx-auto h-auto bg-white rounded-md border-[1px] border-[#26337326] shadow-contentBox'>
          <div className='flex flex-row justify-between px-0 py-5 w-full h-[76px]'>
            <div className='flex flex-row justify-between w-[1170px] h-9 px-5 py-0'>
              <ButtonsOnOff devices={devices} setStatus={setStatus}/>
              <Search setSearchWord={setSearchWord}/>
            </div>
          </div>

          <div className='w-full h-auto px-5 pt-0 pb-5 gap-1'>
              <PrintDevices 
                devicesList={handleFilter()}
                setDevicesList={setDevices}
                setRefreshData={setRefreshData}
                devices={devices}
              />
          </div>

          <div className='h-[46px] rounded-t-none rounded-b-md py-3 pr-3 pl-5 gap-5 bg-light-gray '>
            <div className='w-[1138px] h-[22px] font-normal text-sm/[22px] tracking-[-0.2px] text-medium-gray'>
              { `Shoving ${getDisplayedCount() > 0 ? 1 : 0} - ${getDisplayedCount()} of ${getDisplayedCount()} devices`}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default DevicesPage;