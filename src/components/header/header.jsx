import React from 'react'
import logo from '../../assets/logo.svg'
import Buttons from '../button/button'

const Header = () => {
  return (
    <div className="text-[#242D52] container mt-12">
      <div className='flex justify-between items-center'>
        <img src={logo} alt="logo" />

        <ul className='flex gap-4'>
          <li className='hover:text-slate-300'><a href="#">Pricing</a></li>
          <li className='hover:text-slate-300'><a href="#">Product</a></li>
          <li className='hover:text-slate-300'><a href="#">About Us</a></li>
          <li className='hover:text-slate-300'><a href="#">Careers</a></li>
          <li className='hover:text-slate-300'><a href="#">Community</a></li>
        </ul>

        <Buttons value={"Get Started"} />
      </div>
    </div>
  )
}

export default Header