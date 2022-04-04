import React, { useEffect, useState } from 'react';
import CustomerReview from '../CustomerReview/CustomerReview';

const Review = () => {
     const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('review.json')
        .then(res => res.json())
        .then(data => setReviews(data))

    }, [])
    
 
    return (
        <div>
            <h1>Customer Reviews: {reviews.length}</h1>
            <div className='grid grid-cols-2 gap-8 m-8 shadow-lg shadow-blue-500/50'>
                {
                    reviews.map(review => <CustomerReview key={review.position}
                        review={review}>
            
                        </CustomerReview>)
                }
                </div>
        </div>
    );
};

export default Review;