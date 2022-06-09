import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews,SetReviews]=useState([])
    useEffect(()=>{
        fetch('reviews.json')
        .then(res=>res.json())
        .then(data=>SetReviews(data))
    },[])
    return (
        <div className='grid sm:grid-cols-1 mx-auto lg:grid-cols-3 gap-8 text-center mt-12 mb-12'>
            {
                reviews.map(review=><Review key={review._id} review={review}></Review>)
            }
        </div>
    );
};

export default Reviews;