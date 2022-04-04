import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CustomerReview = (props) => {
    const {profile, name, content, rating} = props.review
    return (
        <div className='border-2 border-red-500 rounded p-3 text-white bg-cyan-500 shadow-lg shadow-cyan-500/50'>
            <img className='w-10 rounded-full align-middle m-auto' src={profile} alt="" srcset="" />
            <h3 className='text-black font-mono'>{name}</h3> 
            <p className=''>{content}</p> 
            <p className='text-yellow-500 font-bold'>Ratings: {rating}  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon></p>     
            

        </div>
    );
};

export default CustomerReview;