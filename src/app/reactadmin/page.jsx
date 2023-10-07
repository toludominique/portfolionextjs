import Image from 'next/image';
import React from 'react';
import reactadmin from '../../../public/assets/projects/reactadmin.png';
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
          src={reactadmin}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">React Admin</h2>
          <h3>Vite / Material UI / Recharts</h3>
        </div>
      </div>


      <div className='w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This is a beautiful and mobile responsive Admin Dashboard using vite and sass.
            It showcases different interactive charts and details of the charts when you hover over the charts.
            It also has a users and products list page that can filter through the list of users and search rows and columns.
            There is also a delete and add new users or items functional icons. we can also route to a single item page 
            and product page which shows details of individual item and a timeline section.
    
          </p>
          <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          <button className='px-8 py-2 mt-4 '>Demo</button>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Vite
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Material UI
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> SASS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React Query
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Recharts
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React-Router-Dom
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
}

export default page;
