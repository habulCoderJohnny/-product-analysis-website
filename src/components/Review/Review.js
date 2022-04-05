import React from 'react';
import CustomerReview from '../CustomerReview/CustomerReview';
import useReview from '../Home/Hook/useReview';

const Review = () => {
     const [reviews, setReviews] = useReview();
 
    return (
        <div>

            <div className='grid grid-cols-2 gap-8 my-20 mx-20 shadow-blue-500/50'>
                {
                    reviews.slice(0, 6).map(review => <CustomerReview key={review.position}
                        review={review}>
            
                        </CustomerReview>)
                }
                </div>
        </div>
    );
};

export default Review;