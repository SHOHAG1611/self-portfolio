import React from 'react';
import firstImg from '../Screenshot (6).png'
import secondImg from '../Screenshot (9).png'
import tirdImg from '../Screenshot (10).png'
// import './MyProjects.css'

const MyProjects = () => {
    const handleClick = () => {
        window.open("https://trucks-inventories.web.app/home");
    };
    const tutorCenter = () => {
        window.open("https://independent-service-prov-d3468.web.app");
    };
    const koliCenter = () => {
        window.open("https://elastic-stonebraker-aa8b07.netlify.app");
    };
    return (
        <div className='text-center'>
            <h1 className='text-center my-5 mx-auto text-3xl'>Here is my Some Projects</h1>
            <progress class="progress w-56" style={{backgroundColor:'white'}}></progress>
            <div className='grid sm:grid-cols-1 mx-auto lg:grid-cols-3 gap-8 text-center mt-12 mb-12 project-img'>

                <div className='card w-96 shadow-xl'>
                    <figure class="px-10 pt-10">
                        <img src={firstImg} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <button onClick={handleClick} class="btn btn-outline btn-secondary">Truck Inventories
                    </button>
                    <h1>This website made for a War house where clint stock their trucks and also if need they delete from one item or more also add a new truck in war house</h1>
                </div>
                <div className='card w-96 shadow-xl'>
                    <figure class="px-10 pt-10">
                        <img src={secondImg} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <button onClick={tutorCenter} class="btn btn-outline btn-secondary">Digital Tutor Center</button>
                    <h1>This website made for a War house where clint stock their trucks and also if need they delete from one item or more also add a new truck in war house</h1>
                </div>
                <div className='card w-96 shadow-xl'>
                    <figure class="px-10 pt-10">
                        <img src={tirdImg} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <button onClick={koliCenter} class="btn btn-outline btn-secondary">Event Center</button>
                    <h1>This website made for a War house where clint stock their trucks and also if need they delete from one item or more also add a new truck in war house</h1>
                </div>

            </div>
        </div>
    );
};

export default MyProjects;