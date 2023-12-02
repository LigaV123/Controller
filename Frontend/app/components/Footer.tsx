import React from 'react'

const Footer = () => {
  return (
    <footer className='absolute bottom-0 left-0 h-[54px] gap-2.5 py-4 px-[135px]'>
      <div className='h-[22px] gap-2.5 font-normal text-sm/[22px] tracking-[-0.2px] text-medium-gray'>
         © {new Date().getFullYear()} TestApp. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer