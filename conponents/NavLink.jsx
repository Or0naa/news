"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLink = ({ href, children }) => {
   const path = usePathname()

   return (
      <Link href={href} style={{ color: path === href ? 'black' : 'white' }}>
         {children}
      </Link>
   )
}

export default NavLink