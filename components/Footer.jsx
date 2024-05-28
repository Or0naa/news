import React from 'react'
import Image from 'next/image'

export default async function Footer() {

  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Jerusalem&aqi=yes`);
  const data = await res.json();


  const date = new Date().toLocaleDateString('he-IL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  // console.log(data)

  return (
    <div dir="rtl" className="flex items-center justify-center gap-4 bg-theme-bg p-4">
      <div className='flex gap-1'>
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Copyright.svg/1200px-Copyright.svg.png" width="20" height="20" alt="" />
        <div>כל הזכויות שמורות</div>

        <div className='flex gap-3'> תאריך {date}</div>
        <div className='flex gap-3'>
          <span>מזג האויר: {data.current.temp_c} °</span>
        </div>
      </div>
    </div>
  )
}
