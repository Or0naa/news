import NavLink from './NavLink'
import Search from './Search'

export default function Nav() {

   return (
      <div className='bg-primary-900 text-primary-50 p-4 flex gap-4 fixed top-0 left-0 w-full z-10'>
         <NavLink href='/'>Home</NavLink>
         <NavLink href='/about'>About</NavLink>
         {/* <Search/> */}
      </div>
   )
}
