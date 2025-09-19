import React from 'react'
import { Outlet,Link } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div className='flex min-h-screen'>
        {/* sidebar */}

        <aside className='w-64 bg-gray-800 text-white p-6'>
            <h2 className='font-semibold text-2xl mb-6'>Dashboard</h2>
            <nav className='flex flex-col space-y-4'>
                <Link to='Profile' className='hover:text-orange-400'>Profile</Link>
                <Link to='History' className='hover:text-orange-400'>History</Link>
                <Link to='Setting' className='hover:text-orange-400'>Setting</Link>
            </nav>

        </aside>

            <main className='flex-1 p-6 bg-gray-100'>
               
            </main>

    </div>
  )
}

export default DashboardLayout
