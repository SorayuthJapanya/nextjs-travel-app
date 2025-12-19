import React from 'react'
import CompFeatures from './CompFeatures'

const CampSection = () => {

  return (
    <section className='relative w-full max-container padding-container flex flex-col py-10 lg:py-20 lg:mb-10 xl:mb-20'>
      <header className='flex flex-col gap-2 w-full items-center my-10 pb-12'>
        <h1 className="text-4xl md:text-5xl font-semibold text-primary">
          Camping Area
        </h1>
        <p className="text-base text-primary/60 text-center sm:text-start max-w-120">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </header>
      <div className="flex flex-col gap-20 sm:gap-24 w-full items-center justify-center">
        <CompFeatures />
      </div>
    </section>
  )
}

export default CampSection