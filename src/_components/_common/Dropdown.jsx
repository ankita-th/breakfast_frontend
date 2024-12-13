import React from 'react'

function Dropdown() {
  return (
    <div className="relative font-[sans-serif] w-max mx-auto">
      <button type="button" id="dropdownToggle"
        className="px-5 py-2.5 rounded text-white text-sm font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">
        Dropdown menu
        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-white inline ml-3" viewBox="0 0 24 24">
          <path fill-rule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clip-rule="evenodd" data-original="#000000" />
        </svg>
      </button>

      <ul id="dropdownMenu" className='absolute block shadow-lg bg-white py-2 z-[1000] min-w-full w-max rounded max-h-96 overflow-auto'>
        <li className='py-2.5 px-5 hover:bg-blue-50 text-black text-sm cursor-pointer'>Dropdown option</li>
        <li className='py-2.5 px-5 hover:bg-blue-50 text-black text-sm cursor-pointer'>Cloth set</li>
        <li className='py-2.5 px-5 hover:bg-blue-50 text-black text-sm cursor-pointer'>Sales details</li>
        <li className='py-2.5 px-5 hover:bg-blue-50 text-black text-sm cursor-pointer'>Marketing</li>
      </ul>
    </div>
  )
}

export default Dropdown
