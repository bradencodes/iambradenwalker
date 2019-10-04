import React from 'react'

const Nav = ({ ratio }) => {
  return (
    <div id='navContainer' className={ratio > 1 ? 'sideNav' : 'topNav'}>
      
    </div>
  )
}

export default Nav
