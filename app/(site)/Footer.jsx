import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaTwitch } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='w-full mt-24 bg-slate-900 text-gray-300 py-8 px-2'>
      <div className='max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-6 gap-4 border-b-2 border-gray-600 py-8'>
        {/* Resources */}
        <div className='md:col-span-2'>
          <h6 className='font-bold uppercase pt-2'>Resources</h6>
          <ul>
            <li className='py-1'>Marketing</li>
            <li className='py-1'>Analytics</li>
            <li className='py-1'>Commerce</li>
          </ul>
        </div>
        {/* About & Legal */}
        <div className='md:col-span-2'>
        <p className='font-bold uppercase'>Subscribe to our newsletter</p>
        <p className='py-4'>The latest news, articles, and resources, sent to your inbox weekly</p>
        <form className='flex flex-col sm:flex-row'>
          <input className='w-full p-2 mr-4 rounded-md mb-4' type="email" placeholder='Enter Email' />
          <button className='p-2 mb-4 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition duration-300'>Subscribe</button>
        </form>
        </div>

      </div>

      <div className='flex flex-col max-w-[1024px] px-2 py-4 mx-auto sm:flex-row justify-between text-center text-gray-500'>
        <p className='py-4'>2017 Bridging The Canyon. All rights reserved</p>
        <div className='flex justify-center sm:justify-end pt-4 space-x-4 text-2xl'>
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

export default Footer;
