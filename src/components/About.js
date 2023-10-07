import Image from 'next/image'
import React from 'react'
import aboutPic1 from '../../public/assets/aboutPic1.jpg';
import Link from 'next/link';

function About() {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>
             I develop web and mobile apps using numerous technologies on the front end and backend. I’m
            also passionate and driven about new technologies and bring not only technical prowess
             but also a problem-solving mindset to every project. With a foundation in 
             Javascript I possesses the expertise to craft dynamic, responsive, and feature-rich web applications. 
             With my mastery of React and React-Native, both widely acclaimed JavaScript libraries 
             for building user interfaces, then server-side technologies like Node.js on the Back-end I ensure that your 
             web and mobile applications will be both aesthetically pleasing and user-friendly.
             My expertise extends to designing and optimizing databases, ensuring data integrity, 
             and building scalable APIs that power the applications I develop.
                </p>
                <p className='py-2 text-gray-600'>
                With years of experience, I have had the privilege of working 
                on a diverse range of web applications. Collaboration and effective 
                communication are at the core of my work ethic. 
                I have a proven ability to work seamlessly with cross-functional teams, 
                translate technical concepts for non-technical stakeholders, and 
                meet project deadlines consistently.I thrive on challenges and 
                continuously seek opportunities for professional growth. My commitment to 
                staying updated with the latest industry trends and best practices ensures that 
                I can bring fresh perspectives and innovative solutions to your projects.
                </p>
                <Link href='/#projects'>
                <p className='py-2 text-gray-600 underline cursor-pointer'>
                Check out some of my latest projects. 
                </p>
                </Link>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image className='rounded-xl' src={aboutPic1} alt='/' />
            </div>
        </div>
      
    </div>
  )
}

export default About
