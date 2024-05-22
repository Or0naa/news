import React from 'react'
import Image from 'next/image'

export default function Footer() {




  const date = new Date().toLocaleDateString('he-IL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div dir="rtl" className="flex items-center justify-center gap-4 bg-theme-bg p-4">
      <div className='flex gap-1'>
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Copyright.svg/1200px-Copyright.svg.png" width="20" height="20" alt="" />
        <div>כל הזכויות שמורות</div>

        <div className='flex gap-3'>מזג האויר תאריך {date}</div>
      </div>
    </div>
  )
}
