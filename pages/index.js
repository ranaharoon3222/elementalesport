import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <div className='relative flex items-center justify-center min-h-screen overflow-hidden bg-gray-900'>
        {/* Grid background */}
        <div className='absolute inset-0 grid grid-cols-12 gap-2 p-2 transform scale-150 -skew-y-12 grid-background'>
          {/* row 1 */}
          <div className='col-span-2 bg-gray-800 rounded animate-pulse' />
          <div className='col-span-5 bg-gray-800 rounded animate-pulse' />
          <div className='col-span-1 bg-gray-800 rounded animate-pulse' />
          <div className='col-span-4 bg-gray-800 rounded animate-pulse' />
          {/* row 2 */}
          <div className='col-span-5 bg-gray-800 rounded animate-pulse' />
          <div className='col-span-3 bg-gray-800 rounded animate-pulse' />
          <div className='col-span-2 bg-gray-800 rounded animate-pulse' />
          <div className='col-span-2 bg-gray-800 rounded animate-pulse' />
          {/* row 3 */}
          <div className='col-span-4 bg-gray-800 rounded animate-pulse' />
          <div className='col-span-7 bg-gray-800 rounded animate-pulse' />
          <div className='col-span-1 bg-gray-800 rounded animate-pulse' />
          {/* row 4 */}
          <div className='col-span-4 bg-gray-800 rounded animate-pulse' />
          <div className='col-span-2 bg-gray-800 rounded animate-pulse' />
          <div className='col-span-2 bg-gray-800 rounded animate-pulse' />
          <div className='col-span-2 bg-gray-800 rounded animate-pulse' />
          <div className='col-span-2 bg-gray-800 rounded animate-pulse' />
          {/* row 5 */}
          <div className='col-span-2 bg-gray-800 rounded animate-pulse' />
          <div className='col-span-5 bg-gray-800 rounded animate-pulse' />
          <div className='col-span-1 bg-gray-800 rounded animate-pulse' />
          <div className='col-span-4 bg-gray-800 rounded animate-pulse' />
          {/* row 6 */}
          <div className='col-span-4 bg-gray-800 rounded animate-pulse' />
          <div className='col-span-7 bg-gray-800 rounded animate-pulse' />
          <div className='col-span-1 bg-gray-800 rounded animate-pulse' />
          {/* row 7 */}
          <div className='col-span-5 bg-gray-800 rounded animate-pulse' />
          <div className='col-span-1 bg-gray-800 rounded animate-pulse' />
          <div className='col-span-3 bg-gray-800 rounded animate-pulse' />
          <div className='col-span-3 bg-gray-800 rounded animate-pulse' />
          {/* row 8 */}
          <div className='col-span-2 bg-gray-800 rounded animate-pulse' />
          <div className='col-span-5 bg-gray-800 rounded animate-pulse' />
          <div className='col-span-1 bg-gray-800 rounded animate-pulse' />
          <div className='col-span-4 bg-gray-800 rounded animate-pulse' />
        </div>
        {/* Content */}
        <div className='relative'>
          <h2 className='flex flex-row items-center text-4xl font-bold text-white md:text-8xl'>
            Coming
            <div className='relative mx-2 text-sm'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width={16}
                height={16}
                fill='currentColor'
                className='text-blue-500 bi bi-caret-up-fill'
                viewBox='0 0 16 16'
              >
                <path d='m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z' />
              </svg>
              <div className='absolute text-blue-500 transform -rotate-45 -top-12'>
                <p className='px-2 py-0 text-base font-light text-white bg-blue-500 rounded-md'>
                  super
                </p>
              </div>
            </div>
            Soon
          </h2>
        </div>
      </div>
    </div>
  );
}
