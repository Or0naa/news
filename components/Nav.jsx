import NavLink from './NavLink'
import Search from './Search'

export default function Nav() {

   return (
      <div dir="auto" className='bg-theme-accent text-primary-50 p-4 flex gap-4 sticky top-0 left-0 w-full z-10'>
         <NavLink href='/'>בית</NavLink>
         <NavLink href='/about'>אודות</NavLink>
         <NavLink href='/contact'>צור קשר</NavLink>
         <NavLink href='/articles'>כל הכתבות</NavLink>
         <NavLink href='/search'>חיפוש</NavLink>
         <NavLink href='/flash'>מבזקים</NavLink>
         
         
         {/* <Search/> */}
      </div>
   )
}
