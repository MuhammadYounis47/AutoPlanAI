import React from 'react'

const DashboardSetting = () => {
  return (
    <div>
       <h1 className="text-2xl font-bold mb-4">⚙️ Settings</h1>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Change Password</label>
          <input type="password" className="w-full border px-3 py-2 rounded" />
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Save
        </button>
      </form>
    </div>
  )
}

export default DashboardSetting
