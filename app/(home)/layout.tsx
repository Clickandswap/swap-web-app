import React from 'react'

function HomeLayout({ children }: {children: React.ReactNode})  {
  return (

      <div className="flex flex-1 flex-col overflow-hidden">
        {/* <Navbar /> */}
        <nav>This is the navbar</nav>
        <main className="flex-1 overflow-y-auto bg-background p-6">
          {children}
        </main>
    </div>
  )
}

export default HomeLayout;