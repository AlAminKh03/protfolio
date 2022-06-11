import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 '>
            <form method='POST' action="https://getform.io/f/5818c9e0-cd2f-4cfe-b767-d5c71f81a888" className='flex flex-col max-w-[600px] w-full'>
                <div className='mt-14'>
                    <p className='text-4xl font-bold inline border-b-4 border-orange-600 text-gray-300'>Contact</p>
                    <p className='text-white py-4'> Submit the form below or shoot me an email - alaminkhan6203@gmail.com</p>
                </div>
                <input className='bg-[#ffffffe0] p-2 w-3/4 rounded-lg' type="text" placeholder='Name' name='name' />
                <input className='my-3 p-2 bg-[#ffffffe0] w-3/4 rounded-lg' type="email" placeholder='Email' name='email' />
                <textarea className='bg-[#ffffffe0] p-2 rounded-lg' name="message" rows="5" placeholder='Message'></textarea>
                <button className='text-white border-2 hover:bg-orange-500 hover:border-orange-500 px-4 py-2  my-8 mx-auto flex items-center rounded-lg'>Submit</button>
            </form>
        </div>
    )
}

export default Contact