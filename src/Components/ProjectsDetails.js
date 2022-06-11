import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const [projectDetail, setProjectDetail] = useState({})
    const [projects, setProject] = useState([])
    const { name, img1, img2, img3, point1, point2, point3, point4, point5, clientCode, srverCode, liveWebsite } = projectDetail
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://nameless-bayou-10593.herokuapp.com/projects/${id}`)
            .then(res => res.json())
            .then(data => {
                setProjectDetail(data);
            })
    }, [id])
    useEffect(() => {
        const singlePorject = projects?.find((pd) => pd.id === id);
        setProject(singlePorject);
    }, [projects, id]);
    return (
        <div>
            <section className='bg-white'>
                <h2 className='text-center text-4xl font-bold underline underline-offset-8 decoration-orange-600 text-orange-600 pt-20 pb-8'>Project Details</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 px-5' >
                    <img className='border rounded shadow' src={img1} alt="" />
                    <img className='border rounded shadow' src={img2} alt="" />
                    <img className='border rounded shadow' src={img3} alt="" />
                </div>

                <div className='flex justify-center items-center mt-5'>
                    <div className="card w-full md:w-1/2 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title font-bold mx-auto text-3xl">
                                {name}
                            </h2>
                            <p className='font-bold text-2xl'>Feactures:</p>
                            <p className='px-5 md:px-14'>
                                <ol>
                                    <li className='list-disc font-medium'>{point1}</li>
                                    <li className='list-disc font-medium'>{point2}</li>
                                    <li className='list-disc font-medium'>{point3}</li>
                                    <li className='list-disc font-medium'>{point4}</li>
                                    <li className='list-disc font-medium'>{point5}</li>
                                </ol>
                            </p>
                            <div className="card-actions justify-center">

                                <button className='text-black group border-2 border-orange-300 px-3 py-1 my-2 flex items-center hover:bg-orange-500 hover:border-orange-500 rounded-lg font-semibold'>
                                    <a href={liveWebsite} target='_blank' rel="noreferrer">Live Website</a>
                                </button>

                                <button className='text-black group border-2 border-orange-300 px-3 py-1 my-2 flex items-center hover:bg-orange-500 hover:border-orange-500 rounded-lg font-semibold'>
                                    <a href={clientCode} target='_blank' rel="noreferrer">Client Code</a>
                                </button>
                                {
                                    srverCode &&
                                    <button className='text-black group border-2 border-orange-300 px-3 py-1 my-2 flex items-center hover:bg-orange-500 hover:border-orange-500 rounded-lg font-semibold'>
                                        <a href={srverCode} target='_blank' rel="noreferrer">Server Code</a>
                                    </button>

                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetails;