import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo/logo.png'



const Navbar = () => {


    const menuItem = <>

        <li><Link to='/home' className='pl-4'>Home </Link></li>
        <li><Link to='/blogs' className='pl-4'>About</Link></li>
        <li><Link to='/reviews' className='pl-4'>Workshop</Link></li>
        <li><Link to='/addServices' className='pl-4'>Connect</Link></li>


    </>


    return (
        <div>
            <div className="navbar bg-white py-3 mb-3 flex justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItem}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">
                        <img src={logo} alt="" height={40} width={60} />
                        <i className='ml-3 text-lg leading-5 font-bold'>MARKOM <br /> AGENCY</i></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItem}
                    </ul>
                </div>
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="flex-none">
                    <button className="btn btn-square btn-ghost">
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-5 h-5'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                        >
                            <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z' />
                        </svg>
                    </button>
                </div>


            </div>

        </div>
    );
};

export default Navbar;