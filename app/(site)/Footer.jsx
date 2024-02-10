import React from 'react';

import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaTwitch, FaGit } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='w-full mt-24 bg-slate-900 text-gray-300 py-8 px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            {/* Resources */}
            <div>
                <h6 className='font-bold uppercase pt-2'>Resources</h6>
                <ul>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Commerce</li>
                </ul>
            </div>
            {/* About & Legal */}
            <div>
                <h6 className='font-bold uppercase pt-2'>About & Legal</h6>
                <ul>
                    <li className='py-1'>About</li>
                    <li className='py-1'>Blog</li>
                    <li className='py-1'>Jobs</li>
                </ul>
            </div>

            <div className='col-span-2 pt-8 md:pt-2'>
                <p className='font-bold uppercase'>Subscribe to our newsletter</p>
                <p className='py-4'>The latest news, articles, and resources, sent to your inbox weekly</p>
                <form className='flex flex-col sm:flex-row'>
                    <input className='w-full p-2 mr-4 rounded-md mb-4' type="email" placeholder='Enter Email' />
                    <button className='p-2 mb-4'>Subscribe</button>
                </form>
            </div>
        </div>

        <div className='flex flex-col max-w-[1024px] px-2 py-4 m-auto justify-between sm:flex-row text-center text-gray-500'>
            <p className='py-4'>2022 Silky, LLC. All rights reserved</p>
            <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
                <FaFacebook/>
                <FaInstagram/>
                <FaTwitter/>
                <FaTwitch/>
                <FaGithub/>
            </div>
        </div>


    </footer>
  )
}

export default Footer
