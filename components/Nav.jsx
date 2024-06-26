import NavLink from './NavLink'
export default function Nav() {

   return (
      <div dir="auto" className='bg-theme-accent text-primary-50 p-4 flex gap-4 sticky top-0 left-0 w-full z-10'>
         <NavLink href='/'>בית</NavLink>
         <NavLink href='/about'>אודות</NavLink>
         <NavLink href='/contact'>צור קשר</NavLink>
         <NavLink href='/articles'>כל הכתבות</NavLink>
         <NavLink href='/search'>חיפוש</NavLink>
         <NavLink href='/flash'>מבזקים</NavLink>
         <div className='bg-theme-accent text-primary-50 gap-4 flex '>
         <NavLink href='/newArticle'>כתבה חדשה</NavLink>
         <NavLink href='/newFlash'>מבזק חדש</NavLink>
         </div>

      </div>
   )
}
