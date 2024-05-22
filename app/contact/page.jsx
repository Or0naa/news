import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import WhatsAppButtonGreenSmall from '/public/WhatsAppButtonGreenSmall.png'

export default function Contact() {
    return (
        <div className="flex flex-col items-center gap-4">
            <Link href="tel:+9720542495211" target='_blank'>📲 לטלפון לאור-נא:</Link>
            <Link href="mailto:or0naa@gmail.com" target='_blank'>📧 לחץ לשליחת אימייל לאור-נא</Link>
            <Link href="https://wa.me/0542495211" target='_blank'>  <Image width='15px' height='10px' alt=''  src={WhatsAppButtonGreenSmall}  >
                </Image ></Link>  
            <Link href="tel:+9720503210090" target='_blank'>📲 לטלפון לאלירז:</Link>
            <Link href="mailto:elish7@gmail.com" target='_blank'>📧 לחץ לשליחת אימייל לאלירז</Link>
      <Link   href="https://wa.me/0503210090" target='_blank'>   <Image width='15px' height='10px' alt='' src={WhatsAppButtonGreenSmall}  >
                </Image ></Link>

        </div>
    )
}
