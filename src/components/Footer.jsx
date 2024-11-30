import React from 'react'
import Image from 'next/image';

const Footer = () => {
  return (
      <div className='w-full bg-blackish mt-20 py-5'>						
        <div className=" text-gray-400">
          <div className="grid space-y-5 md:grid-cols-3 pl-5">
            
            {/* Address start */}
            <div className='text-left sm:text-center text-[12px] sm:text-[14px]'>
              <p><b>Address:</b><br/>
                <i>Neuron Academy<br/>
                6th floor, Fortune Shopping Mall, <br/>
                Dhaka-1217.</i></p>
            </div>
            {/* Address end */}

            {/* Contact start */}
            <div className='text-left sm:text-center text-[12px] sm:text-[14px]'>
              <p><b>Contact:</b><br/>
                Email: <i>ibrahim2013khan@gmail.com</i><br/>
                Phone: 01742 095 986.<br/>
              </p>
            </div>
            {/* Contact end */}

            {/* Logo start */}
            {/* Facebook */}
            <div className='flex space-x-5 sm:place-items-center sm:justify-center'>   
              <a href="https://www.facebook.com/neuronacademy0" target="_blank">
                <Image 
                  className='header_top__icon_wrapper'
                  src="/logo/fb.png" 
                  alt="facebook page" 
                  width={30} 
                  height={30}
                />
              </a>

                {/* Youtube */}
              <a href="https://www.youtube.com/@BioSprayPlusColostrumLiquid/featured" target="_blank">
                <Image 
                  className='header_top__icon_wrapper'
                  src="/logo/youtube.png" 
                  alt="Youtube Channel" 
                  width={30}
                  height={30}
                />
              </a>
                
                {/* Linkedin */}
              <a href="/">
                <Image 
                  className='header_top__icon_wrapper'
                  src="/logo/linkedin.png" 
                  alt="Linkedin" 
                  width={30}
                  height={30}
                />
              </a>
            </div>
            {/* Logo End */}

          </div>
        </div>       
      </div>
  )
}

export default Footer;
