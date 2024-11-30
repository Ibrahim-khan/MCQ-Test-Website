import React from 'react';
import Image from 'next/image';

const page = () => {
  return (
    <div className='w-full h-auto bg-gray-100'>
      <div className='py-16'>
        <div className="grid space-y-16 md:space-x-5 md:px-5">
          
          <div className="w-full space-y-5">
            <div className="flex space-x-5 justify-center">
              <a href="/chairman.jpg" target="_blank" rel="noopener noreferrer">
                <Image
                  className = "border border-gray-500 cursor-pointer shadow-lg shadow-slate-300 rounded-lg transform transition duration-500 hover:scale-110"
                  src="/chairman.jpg"
                  width={200}
                  height={200}
                  alt="dp"
                />
              </a>
              <a href="/manager.jpg" target="_blank" rel="noopener noreferrer">
                <Image
                  className = "border border-gray-500 cursor-pointer shadow-lg shadow-slate-300 rounded-lg transform transition duration-500 hover:scale-110"
                  src="/manager.jpg"
                  width={200}
                  height={200}
                  alt="dp"
                />
              </a>
            </div>
            <div className="flex space-x-5 justify-center">
              <a href="/gallery/thysonmeet.jpeg" target="_blank" rel="noopener noreferrer">
                <Image
                  className = "border border-gray-500 cursor-pointer shadow-lg shadow-slate-300 rounded-lg transform transition duration-500 hover:scale-110"
                  src="/khan.jpg"
                  width={200}
                  height={200}
                  alt="dp"
                />
              </a>
              <a href="/general-manager.jpg" target="_blank" rel="noopener noreferrer">
                <Image
                  className = "border border-gray-500 cursor-pointer shadow-lg shadow-slate-300 rounded-lg transform transition duration-500 hover:scale-110"
                  src="/general-manager.jpg"
                  width={200}
                  height={200}
                  alt="dp"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
