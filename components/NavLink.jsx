"use client"
import {theme} from '../tailwind.config'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLink = ({ href, children }) => {
   const path = usePathname()

   return (
      <Link href={href} className={`${path===href ? "text-theme-light":"text-theme-dark"}`}>
         {children}
      </Link>
   )
}

export default NavLink