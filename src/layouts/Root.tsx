import { Outlet } from "react-router-dom"

export function Root() {
  return (
    <div className="min-h-screen grid place-items-center bg-[#292929] font-app">
      <Outlet />
    </div>
  )
}
