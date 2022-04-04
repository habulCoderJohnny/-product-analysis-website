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
                {
                    reviews.map(review => <CustomerReview key={review.position}
                        review={review}>
            
                        </CustomerReview>)
                }
        </div>
    );
};

export default Review;