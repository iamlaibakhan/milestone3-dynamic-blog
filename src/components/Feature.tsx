import React from 'react'

export default function Feature() {
  return (
    <div>
      <section className='py-8 bg-neutral-50 mb-40'>
  <div className='mx-auto max-w-7xl px-5'>
    <h1 className='text-6xl font-bold text-center my-7  text-cyan-600 animate-color-change'>
      Exploring Our Categories
    </h1>
<div className='grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100'>
  {[
    "Latest AI Technology",
    "Daily Lifestyle",
    "Pakistan's Economic Conditions",
  ].map((category, index) => (
    <div key={index}
    className='relative group p-4 bg-white rounded-lg shadow-lg hover:bg-sky-200 hover:text-black transition duration-300 ease-in-out tranform hover:scale-105 cursor-pointer flex items-center justify-center text-neutral-600'>
      <p className='text-center text-sm font-semibold'>{category}</p>

    </div>
  ))}
   </div>
</div>
      </section>
    </div>
  )
}
