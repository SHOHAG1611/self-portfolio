import React from 'react';

const Review = ({review}) => {
    const {name,img,star,body}=review
    return (
        <div class="card w-96 shadow-xl mx-auto">
            <figure class="px-10 pt-10">
                <img src={img} alt="review" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{body}</p>
                <p>Rating: {star} star</p>
            </div>
        </div>
    );
};

export default Review;