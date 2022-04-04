import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <ul className='flex justify-center mt-4 border-b-2 border-rose-600 sticky top-0 '>
            
            <li className='-mb-px mr-1'><Link to="/" className='bg-blue-600 inline-block text-lime-300  border-l border-t border-r rounded-t py-2 px-4 hover:text-white font-semibold'>HOME</Link></li>

            <li className='mr-1'><Link to="/review" className='bg-blue-600 inline-block py-2 px-4 text-lime-300 hover:text-white font-semibold'>REVIEWS</Link></li>

            <li className='mr-1'><Link to="/dashboard" className='bg-blue-600 inline-block py-2 px-4 text-lime-300 hover:text-white font-semibold'>DASHBOARD</Link></li>

            <li className='mr-1'><Link to="/blog" className='bg-blue-600 inline-block py-2 px-4 text-lime-300 hover:text-white font-semibold'>BLOGS</Link></li>

            <li className='mr-1'><Link to="/about" className='bg-blue-600 inline-block py-2 px-4 text-lime-300 hover:text-white font-semibold'>ABOUT</Link></li>
        </ul>
      
    );
};

export default Header;