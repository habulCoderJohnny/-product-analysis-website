import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    //NAV bar style & active link
    return (
        <ul className='flex justify-center mt-4 border-b-2 border-rose-600 bg-yellow-400 sticky top-0 '>
            
            <li className='-mb-px mr-1'><CustomLink  to="/" className='bg-blue-600 inline-block text-white  border-l border-t border-r rounded-t py-2 px-4  font-semibold'>HOME</CustomLink ></li>

            <li className='mr-1'><CustomLink  to="/reviews" className='bg-blue-600 inline-block py-2 px-4 text-white font-semibold'>REVIEWS</CustomLink ></li>

            <li className='mr-1'><CustomLink  to="/dashboard" className='bg-blue-600 inline-block py-2 px-4 text-white font-semibold'>DASHBOARD</CustomLink ></li>

            <li className='mr-1'><CustomLink  to="/blog" className='bg-blue-600 inline-block py-2 px-4 text-white font-semibold'>BLOGS</CustomLink ></li>

            <li className='mr-1'><CustomLink  to="/about" className='bg-blue-600 inline-block py-2 px-4 text-white font-semibold'>ABOUT</CustomLink ></li>
        </ul>
      
    );
};

export default Header;