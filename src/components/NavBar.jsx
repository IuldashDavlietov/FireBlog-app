import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import { NavLink } from "react-router";

export default function NavBar() {
  const { user, logout } = useAuth()
  const [linkMenu, setLinkMenu] = useState(false);

  const toggleMenu = () => {
    setLinkMenu((prev) => !prev)
  }

  const handleLogout = async () => {
    try {
      setLinkMenu(false);
      await logout()
    } catch (error) {
      console.error('Logout error', error)
    }

  }

  return (
    <nav className="flex justify-between items-center px-8 py-4 rounded-2xl">
      <div className=" flex justify-between items-center gap-4">
        <NavLink to='/'> Dashboard</NavLink>
      </div>

      <div className="relative">
        <button onClick={toggleMenu}> 👤 </button>
        {linkMenu && (
          <div
            className="
            absolute right-0 mt-3 w-48
            bg-white dark:bg-zinc-900
            border border-slate-200 dark:border-white/10
            rounded-2xl shadow-2xl p-2
            flex flex-col gap-1 z-50"
          >
            {user ? (
                <button
                  onClick={handleLogout}
                  className="
                  w-full text-left px-4 py-2.5
                  text-sm font-medium text-red-500
                  hover:bg-red-500/10 rounded-xl
                  transition-colors cursor-pointer">Logout</button>
            ) : (
              <>
                <NavLink
                  to="/register"
                  onClick={() => setLinkMenu(false)}
                  className="
                    w-full text-left px-4 py-2.5
                    text-sm font-medium
                    text-slate-700 dark:text-zinc-200
                    hover:bg-slate-100 dark:hover:bg-white/5
                    rounded-xl transition-colors"> Register </NavLink>

                <NavLink
                  to="/login"
                  onClick={() => setLinkMenu(false)}
                  className="
                    w-full text-left px-4 py-2.5
                    text-sm font-medium
                    text-slate-700 dark:text-zinc-200
                    hover:bg-slate-100 dark:hover:bg-white/5
                    rounded-xl transition-colors" > Login
</NavLink>
              </>
            )}
          </div>
        )}
      </div>
    </nav >
  )
}
