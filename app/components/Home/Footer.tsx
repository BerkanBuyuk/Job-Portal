import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6'

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <div className='pt-[5rem] pb-[3rem] bg-[#3c3c3c]'>
            <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[3rem] items-start pb-[2rem] border-b-2 border-white border-opacity-10'>
                <div>
                    <h1 className='text-[24px] text-white mb-[1rem] font-bold uppercase'>Jobify</h1>
                    <p className='text-[14px] text-white text-opacity-80'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti quam nobis perspiciatis optio debitis natus, inventore necessitatibus provident, incidunt totam ad minima magnam aperiam, eum ut odit culpa iste consectetur.</p>
                    <div className='mt-[1.5rem] flex items-center space-x-3'>
                        <div className='w-[2.4rem] h-[2.4rem] bg-blue-600 rounded-full flex items-center justify-center flex-col'>
                            <FaFacebookF className='text-white' />
                        </div>
                        <div className='w-[2.4rem] h-[2.4rem] bg-sky-400 rounded-full flex items-center justify-center flex-col'>
                            <FaTwitter className='text-white' />
                        </div>
                        <div className='w-[2.4rem] h-[2.4rem] bg-red-600 rounded-full flex items-center justify-center flex-col'>
                            <FaYoutube className='text-white' />
                        </div>
                        <div className='w-[2.4rem] h-[2.4rem] bg-red-400 rounded-full flex items-center justify-center flex-col'>
                            <FaInstagram className='text-white' />
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-[22px] w-fit text-white font-semibold mb-[1.5rem]'>About US</h1>
                    <p className='text-[15px] w-fit text-white hover:text-white cursor-pointer text-opacity-30 mb-[0.7rem]'>Job</p>
                    <p className='text-[15px] w-fit text-white hover:text-white cursor-pointer text-opacity-30 mb-[0.7rem]'>Privacy</p>
                    <p className='text-[15px] w-fit text-white hover:text-white cursor-pointer text-opacity-30 mb-[0.7rem]'>Policy</p>
                    <p className='text-[15px] w-fit text-white hover:text-white cursor-pointer text-opacity-30 mb-[0.7rem]'>Application</p>
                    <p className='text-[15px] w-fit text-white hover:text-white cursor-pointer text-opacity-30 mb-[0.7rem]'>Candidates</p>
                </div>
                <div>
                    <h1 className='text-[22px] w-fit text-white font-semibold mb-[1.5rem]'>Quick Link</h1>
                    <p className='text-[15px] w-fit text-white hover:text-white cursor-pointer text-opacity-30 mb-[0.7rem]'>All Jobs</p>
                    <p className='text-[15px] w-fit text-white hover:text-white cursor-pointer text-opacity-30 mb-[0.7rem]'>Job Details</p>
                    <p className='text-[15px] w-fit text-white hover:text-white cursor-pointer text-opacity-30 mb-[0.7rem]'>How to Apply</p>
                    <p className='text-[15px] w-fit text-white hover:text-white cursor-pointer text-opacity-30 mb-[0.7rem]'>Resume</p>
                </div>
                <div>
                    <h1 className='text-[22px] w-fit text-white font-semibold mb-[1.5rem]'>Get in Touch</h1>
                    <p className='text-[15px] w-fit text-white hover:text-white cursor-pointer text-opacity-30 mb-[0.7rem]'>+90 123 456 78 90</p>
                    <p className='text-[15px] w-fit text-white hover:text-white cursor-pointer text-opacity-30 mb-[0.7rem]'>Example@gmail.com</p>
                    <p className='text-[15px] w-fit text-white hover:text-white cursor-pointer text-opacity-30 mb-[0.7rem]'>İstanbul, Türkiye</p>
                </div>
            </div>
            <h1 className='mt-[2rem] text-[14px] w-[80%] mx-auto text-white opacity-50 uppercase'>{`Copyright By Berkan Büyük - ${currentYear}`}</h1>
        </div>
    )
}

export default Footer