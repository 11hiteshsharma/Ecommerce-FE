import React from 'react'
import StickyTop from './StickyTop'
import Nav from './Nav'

const Navbar = () => {
  return (
    <div className='z-10'>
      <StickyTop />
      <Nav/>
    </div>
  )
}

export default Navbar