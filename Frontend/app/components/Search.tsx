import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import SearchType from '../types/searchType';

const Search = ({setSearchWord}: SearchType) => {
  return (
    <div className='w-[300px] h-9 rounded-md py-[9px] pr-4 pl-3 gap-2.5 bg-light-gray'>
        <div className='flex items-center h-[18px] gap-2'>
            <FontAwesomeIcon
                className='w-4 h-4 text-[#9DA0AF]'
                icon={faMagnifyingGlass}
            />
            <input
                className='w-[248px] h-[18px] font-normal text-sm/[18px] tracking-[-0.2px] text-medium-gray bg-light-gray'
                name='search'
                type="text"
                placeholder='Quick search...'
                onChange={(e) => setSearchWord(e.target.value)}
            />
        </div>
    </div>
  )
}

export default Search