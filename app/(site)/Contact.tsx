"use client";

import React, { ChangeEvent, FormEvent, useRef, useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const form = useRef<HTMLFormElement>(null);

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        setter: React.Dispatch<React.SetStateAction<string>>
    ) => {
        setter(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true);
        setError(false);

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('message', message);

        fetch("https://getform.io/f/1785a9e0-97b5-419f-aac8-bce32400c34b", {
            method: "POST",
            body: formData,
        })
        .then(response => {
            setName('');
            setEmail('');
            setMessage('');
            setLoading(false);
            setError(false);
        })
        .catch(error => {
            setLoading(false);
            setError(true);
        });
    }

    return (
        <div className='w-full mt-16'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='text-center'>
                    <h2 className='bg-gradient-to-r from-gray-400 via-teal-300 to-indigo-600 bg-clip-text text-transparent text-4xl drop-shadow font-extrabold mb-8'>
                        Bridge Your Adventures!
                    </h2>
                </div>

                <div className='grid md:grid-cols-2 gap-2 px-2 text-center mx-auto my-auto'>
                    <div className='border py-5 rounded-xl shadow-xl'>
                        <p className='bg-gradient-to-r from-gray-400 via-teal-300 to-indigo-600 bg-clip-text text-transparent text-4xl drop-shadow font-extrabold mb-8'>Crafted for Explorers</p>
                        <p className='text-gray-400 mt-1'>Embark on unforgettable journeys</p>
                    </div>
                    <div className='border py-5 rounded-xl shadow-xl'>
                        <p className='bg-gradient-to-r from-gray-400 via-teal-300 to-indigo-600 bg-clip-text text-transparent text-4xl drop-shadow font-extrabold mb-8'>DIY Delights</p>
                        <p className='text-gray-400 mt-1'>Unleash your creativity with hands-on projects</p>
                    </div>
                </div>
            </div>

            <div className='my-8 py-8 bg-[#0a192f] flex justify-center items-center px-3 rounded-sm'>
                <form
                    method='POST'
                    action=""
                    onSubmit={handleSubmit}
                    ref={form}
                    className='flex flex-col max-w-[600px] w-full'
                >
                    <div className='p-5 text-center'>
                        <p className='bg-gradient-to-r from-gray-400 via-teal-300 to-indigo-600 bg-clip-text text-transparent text-4xl drop-shadow font-extrabold mb-4'>
                            Share Your Thoughts
                        </p>
                        <p className='text-gray-200'>Drop us a message to let us know what&apos;s on your mind!</p>
                    </div>
                    <input
                        className='bg-[#ccd6f6] p-2'
                        type="text"
                        placeholder='Name'
                        name='name'
                        value={name}
                        onChange={e => handleChange(e, setName)}
                        required={true}
                    />
                    <input
                        className='mt-2 p-2 bg-[#ccd6f6]'
                        type="email"
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={e => handleChange(e, setEmail)}
                        required={true}
                    />
                    <textarea
                        className='bg-[#ccd6f6] mt-2 p-2'
                        name="message"
                        rows={6}
                        placeholder='Message'
                        value={message}
                        onChange={e => handleChange(e, setMessage)}
                        required={true}
                    ></textarea>
                    <button
                        className='border-2 rounded-md px-3 m-auto bg-gradient-to-r from-gray-200 via-teal-200 to-indigo-200 bg-clip-text text-transparent text-2xl drop-shadow font-extrabold py-3 my-3 mx-auto hover:bg-gradient-to-r hover:from-gray-400 hover:via-teal-300 hover:to-indigo-600 flex items-center'
                        
                        disabled={loading}
                    >
                        {loading ? 'Loading...' : 'Let\'s Chat'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
