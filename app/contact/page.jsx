import Link from 'next/link'
import React from 'react'

export default function Contact() {
    return (
        <div className="flex flex-col items-center gap-4">
            <Link href="tel:+9720542495211">📲 לטלפון:</Link>
            <Link href="mailto:or0naa@gmail.com">📧 לחץ לשליחת אימייל</Link>

        </div>
    )
}
