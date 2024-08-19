"use client";
import React, {useEffect, useState} from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logo from '../image/logo.png'



function Page() {
    const[loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <div>
        <div className={loaded ? 'floating-btn-loaded' : 'floating-btn'}>
       <FloatingWhatsApp
        phoneNumber='2348103856846' // Required
        chatMessage='Hello, How can we help you?'
        accountName='TOSHCONSULT TECHNOLOGY INC' // Optional
        statusMessage='online' // Optional
        placeholder='Write here...' // Optional
        allowEsc={true} // Optional
        avatar= '/images/logo.png'
        // You can find the complete list of props in the README.md file
      />
      </div>
    </div>
  )
}

export default Page
