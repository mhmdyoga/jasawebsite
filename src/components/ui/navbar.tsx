import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed md:w-[450px] w-60 top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 rounded-full px-6 py-3 shadow-lg">
         <h2 className='text-white md:text-xl text-lg font-bold flex items-center justify-center'>Jasawebsite.dev</h2>
      </div>
    </nav>
  )
}

export default Navbar