import React  from 'react'
import Sidebar from '../components/Sidebar'

const Layout = ({ Children }) => {
  return (
    <div>
      <div>
        <Sidebar/>
        {Children}
      </div>
    </div>
  )
}

export default Layout
