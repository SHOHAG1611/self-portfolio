import React, { useEffect, useState } from 'react';
import Skill from './Skill';

const Skills = () => {
    const [skills, setSkills] = useState([])
    useEffect(() => {
        fetch('skills.json')
            .then(res => res.json())
            .then(data => setSkills(data))
    }, [])
    return (
        <div className='grid sm:grid-cols-1 mx-auto lg:grid-cols-3 gap-8 text-center mt-12 mb-12'>
            {
                skills.map(skill => <Skill key={skill._id} skill={skill}></Skill>)
            }
        </div>
    )
};

export default Skills;