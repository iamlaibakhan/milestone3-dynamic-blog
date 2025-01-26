import React from 'react'

export default function AuthorCard() {
  return (
    <div className='bg-white shadow-lg rounded-lg p-3 mt-3'>
      <div className='flex items-center animation-fadeIn'>
        <div>
          <h3 className='text-xl text-cyan-800 font-bold'>I'AM LAIBAKHAN</h3>
          <p className='text-slate-400'>
            UI/UX Designer | Web Developer
            </p>
        </div>
      </div>

         <div className='mt-4 flex space-x-3'>
          <a
          href="https://github.com/iamlaibakhan"
          className='px-4 py-2 text-white bg-cyan-600 rounded-md hover:bg-cyan-700 transition duration-300'>
            GitHub
          </a>

         </div>
    </div>
  );
}
