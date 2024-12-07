import React from 'react'
import { Link } from "react-router-dom";
const PricingPlan = () => {


    return (
        <>
           <section className="sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%] 2xl:w-[100%] px-3 bg-white bg-no-repeat bg-cover bg-[center_top_1rem]" style={{ backgroundImage: 'url(images/price-pattrn-bg.webp)' }}>
           <div className="md:container md:mx-auto px-3 sd:px-10  md:px-10 lg:px-10 xl:px-10 2xl:px-10 py-20">
            <div className='title-step sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%] flex justify-center mb-10'>
                <h2 className='text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold  text-center sm:text-center md:text-center lg:text-center sl:text-center'>Pricing & Plans</h2></div>
          
           <div className="flex flex-wrap justify-center gap-10 sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%] 2xl:w-[100%]">
          
           <div className='rounded-[20px]  w-[100%] sm:w-[25%] md:w-[25%] lg:w-[25%] xl:w-[25%] border-solid border-zinc-200 border-2 p-6  grid grid-rows  gap-3 bg-white shadow-md'>
           <h3  className='text-2xl md:text-2.5xl lg:text-2.5xl xl:text-2.5xl font-bold  text-center sm:text-center md:text-center lg:text-center sl:text-center'>Flight Reservation</h3>
            <div className='card-img'>
                <img src="images/flight-booking.jpg" alt=''/>
            </div>
           <div className='flex  justify-center text-center sm:text-center md:text-center lg:text-center sl:text-center'><div className='text-3xl md:text-3xl lg:text-3xl xl:text-3xl font-[600]'>&#8377;15<small style={{ fontSize: '15px' }}>/Per Person or Child</small></div></div>
           <ul className='p-0 m-0 w-[100%]'>
              <li className='border-b border-b-slate-300 border-b-1 text-center py-4'>Instant Download On Checkout </li>
              <li className='border-b border-b-slate-300 border-b-1 text-center py-4'>No Fee To Change Date </li>
              <li className=' text-center py-4'>Price is for oneway and round-trip. Flight reservation for multi-city available at extra cost.</li>
           </ul>
           <Link to="/">
                            <button className=" w-[100%] border rounded-xl bg-[#cc2c21] text-white font-bold py-3 hover:bg-white hover:text-black  hover:border  hover:border-[#cc2c21]  hover:border-1">
                            Get Started
                            </button>
                        </Link>
           </div>
           <div className='rounded-[20px] w-[100%] sm:w-[25%] md:w-[25%] lg:w-[25%] xl:w-[25%] border-solid border-zinc-200 border-2 p-6  grid grid-rows  gap-3 bg-white shadow-md'>
           <h3  className='text-2xl md:text-2.5xl lg:text-2.5xl xl:text-2.5xl font-bold  text-center sm:text-center md:text-center lg:text-center sl:text-center'>Hotel Reservation</h3>
            <div className='card-img'>
                <img src="images/hotal-booking.jpg" alt=''/>
            </div>
            
            <div className='flex  justify-center text-center sm:text-center md:text-center lg:text-center sl:text-center'><div className='text-3xl md:text-3xl lg:text-3xl xl:text-3xl font-[600]'>&#8377;15<small style={{ fontSize: '15px' }}>/Per Person or Child</small></div></div>
           <ul className='p-0 m-0 w-[100%]'>
              <li className='border-b border-b-slate-300 border-b-1 text-center py-4'>Instant Download On Checkout </li>
              <li className='border-b border-b-slate-300 border-b-1 text-center py-4'>No Fee To Change Date </li>
              <li className=' text-center py-4'>Price is for oneway and round-trip. Flight reservation for multi-city available at extra cost.</li>
           </ul>
           <Link to="/">
                            <button className=" w-[100%] border rounded-xl bg-[#cc2c21] text-white font-bold py-3 hover:bg-white hover:text-black  hover:border  hover:border-[#cc2c21]  hover:border-1">
                            Get Started
                            </button>
                        </Link>
           </div>
        
           </div>
            </div>
            </section>  
    
        </>
    )
}
export default PricingPlan;