import React from 'react'
import Image from 'next/image';
import todoapp from '../../../public/assets/projects/todoapp.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';


function page() {
  return (
    <div className="w-full">
    <div className="w-screen h-[50vh] relative">
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
      <Image
        className="absolute z-1"
        layout="fill"
        objectFit="cover"
        src={todoapp}
        alt="/"
      />
      <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
        <h2 className="py-2">Todo App</h2>
        <h3>React JS / Express / PostgreSql</h3>
      </div>
    </div>


    <div className='w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
      <div className='col-span-4'>
        <p>Project</p>
        <h2>Overview</h2>
        <p>
          This Todo Application was built with an authentication for users to be able to
          log in as well as log out. you are able to see your personalized to items
          with a progress bar shwoing the current progress percentage.
          users of this app are able to create, edit and delete their own todo items.
          The app also makes use of the postgresql database for storing users and their todo items.
 
        </p>
        <button className='px-8 py-2 mt-4 mr-8'>Code</button>
        <button className='px-8 py-2 mt-4 '>Demo</button>
      </div>
      <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
        <div className='p-2'>
          <p className='text-center font-bold pb-2'>Technologies</p>
          <div className='grid grid-cols-3 md:grid-cols-1'>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> React-cookie
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> React-Dom
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> Bcrypt
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> PostgreSql
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> JsonWebToken
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> Dotenv
            </p>
          </div>
        </div>
      </div>
      <Link href='/#projects'>
        <p className='underline cursor-pointer'>Back</p>
      </Link>
    </div>
  </div>
  )
}

export default page
