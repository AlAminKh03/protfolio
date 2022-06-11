import React, { useEffect, useState } from 'react';
import WorkImg from '../assets/workImg.jpeg';
import realEstate from '../assets/realestate.jpg';
import home from '../assets/home-tools.png'
import Projects from './Projects';

const Work = () => {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('https://nameless-bayou-10593.herokuapp.com/projects')
            .then(res => res.json())
            .then(data => {
                setProjects(data);
            })
    }, [])
    return (
        // <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        //     <div className='max-w-[1000px] mx-auto p-12 flex flex-col justify-center w-full h-full'>
        //         <div className='pb-8'>
        //             <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
        //                 Projects
        //             </p>
        //             <p className='py-6'>// Check out some of my recent work</p>
        //         </div>

        //         {/* Container */}
        //         <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

        //             {/* Grid Item */}
        //             <div>
        //                 <div
        //                     style={{ backgroundImage: `url(${home})` }}
        //                     className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
        //                 >
        //                     {/* Hover Effects */}
        //                     <div className='opacity-0 group-hover:opacity-100'>
        //                         <span className='text-xl font-bold text-black tracking-wider'>
        //                             Home tools
        //                         </span>
        //                         <div className='pt-8 text-center'>
        //                             <a href='https://home-tools-ee461.web.app/' target='_blank'>
        //                                 <button className='text-center rounded-lg px-2 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>
        //                                     Demo
        //                                 </button>
        //                             </a>
        //                             <a href='https://github.com/AlAminKh03/public-assignment-12' target='_blank'>
        //                                 <button className='text-center rounded px-2 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>
        //                                     Code
        //                                 </button>
        //                             </a>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className='grid justify-items-center my-3'>

        //                     <button className="btn btn-outline btn-primary py-0">Show Details</button>
        //                 </div>
        //             </div>
        //             <div>
        //                 <div
        //                     style={{ backgroundImage: `url(${realEstate})` }}
        //                     className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
        //                 >
        //                     {/* Hover Effects */}
        //                     <div className='opacity-0 group-hover:opacity-100'>
        //                         <span className='text-2xl font-bold text-white tracking-wider'>
        //                             React JS Application
        //                         </span>
        //                         <div className='pt-8 text-center'>
        //                             <a href='https://sports-gear-11.web.app/addproducts' target="_blank">
        //                                 <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
        //                                     Demo
        //                                 </button>
        //                             </a>
        //                             <a href='https://github.com/AlAminKh03/E-sports-client' target="_blank">
        //                                 <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
        //                                     Code
        //                                 </button>
        //                             </a>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className='grid justify-items-center my-3'>

        //                     <button className="btn btn-outline btn-primary py-0">Show Details</button>
        //                 </div>
        //             </div>
        //             {/* Grid Item */}
        //             <div>
        //                 <div
        //                     style={{ backgroundImage: `url(${WorkImg})` }}
        //                     className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
        //                 >
        //                     {/* Hover Effects */}
        //                     <div className='opacity-0 group-hover:opacity-100'>
        //                         <span className='text-2xl font-bold text-white tracking-wider'>
        //                             React JS Application
        //                         </span>
        //                         <div className='pt-8 text-center'>
        //                             <a href='https://sishir-bindu-travel.web.app/' target="_blank">
        //                                 <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
        //                                     Demo
        //                                 </button>
        //                             </a>
        //                             <a href='https://github.com/AlAminKh03/air-travel' target="_blank" >
        //                                 <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
        //                                     Code
        //                                 </button>
        //                             </a>
        //                         </div>
        //                     </div>

        //                 </div>
        //                 <div className='grid justify-items-center my-3'>

        //                     <button className="btn btn-outline btn-primary py-0">Show Details</button>
        //                 </div>
        //             </div>
        //         </div>
        //     </div >
        // </div >
        <section name='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-12 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-orange-600'>
                        Projects
                    </p>
                    <p className='text-white py-6'> Check out some of my recent work</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-5'>
                    {
                        projects.map(project => <Projects
                            key={project._id}
                            project={project}
                        />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Work;