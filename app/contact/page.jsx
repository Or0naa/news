import Link from 'next/link'
import React from 'react'

export default function Contact() {
    return (
        <div className="flex flex-col items-center gap-4">
            <Link href="tel:+9720542495211">📲 לטלפון לאור-נא:</Link>
            <Link href="mailto:or0naa@gmail.com">📧 לחץ לשליחת אימייל לאור-נא</Link>
            <a aria-label="Chat on WhatsApp" href="https://wa.me/0542495211"><img alt="Chat on WhatsApp" src="WhatsAppButtonGreenLarge.svg" />‎
‎‏</a >
            <Link href="tel:+9720503210090">📲 לטלפון לאלירז:</Link>
            <Link href="mailto:elish7@gmail.com">📧 לחץ לשליחת אימייל לאלירז</Link>
            <a aria-label="Chat on WhatsApp" href="https://wa.me/0503210090"><img alt="Chat on WhatsApp" src="WhatsAppButtonGreenLarge.svg" />‎
‎‏</a >

        </div>
    )
}
