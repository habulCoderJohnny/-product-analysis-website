import React from 'react';

const CustomerReview = (props) => {
    const {name,body,rating} = props.review
    return (
        <div>
            {name}
        </div>
    );
};

export default CustomerReview;