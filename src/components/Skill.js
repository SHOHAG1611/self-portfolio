import React from 'react';

const Skill = ({ skill }) => {
    const { name, img, body } = skill
    return (
        <div class="card w-96 shadow-xl mx-auto">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{body}</p>
            </div>
        </div>
    );
};

export default Skill;