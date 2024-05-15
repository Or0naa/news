import NavLink from './NavLink'
import Search from './Search'

export default function Nav() {

   return (
      <div className='bg-primary-900 text-primary-50 p-4 flex gap-4'>
         <NavLink href='/'>Home</NavLink>
         <Search/>
      </div>
   )
}
