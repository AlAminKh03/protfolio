import React from 'react';
import { Link } from 'react-router-dom';

const Projects = ({ project }) => {
    const { _id, img1, description, name } = project
    return (


        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure><img className='w-full' src={img1} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">
                    {name}
                </h2>
                <p className='font-medium'>{description}</p>
                <div className="card-actions justify-end">

                    <button className='text-black group border-2 border-orange-300 px-3 py-1 my-2 flex items-center hover:bg-orange-500 hover:border-orange-500 rounded-lg font-semibold'>
                        <Link to={`projects/${_id}`}>Details</Link>
                    </button>
                </div>
            </div>
        </div>


    );
};

export default Projects;