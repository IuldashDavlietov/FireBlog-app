
import { NavLink } from "react-router";


export default function NavBar() {

  return (
    <nav  className="
    flex justify-between items-center
    px-8 py-4 rounded-2xl
    border-b border-slate-200 dark:border-white/10
    transition-colors duration-300">
      <div>
      <NavLink to='/'> Dashboard</NavLink>
      <NavLink to='/new-blog'> New Blog</NavLink>
      <NavLink to='/about'> About</NavLink>
      </div>

      <div>
        <button> 👤</button>
      </div>
    </nav>
  )
}
