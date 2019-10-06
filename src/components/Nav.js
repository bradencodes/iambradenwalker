import React from 'react'

const Nav = ({ ratio }) => {
  return (
    <div id='navContainer' className={ratio.isWide ? 'sideNav' : 'topNav'}>
      
    </div>
  )
}

export default Nav
