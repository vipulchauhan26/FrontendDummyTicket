import React from 'react'

const Steps = () => {


    return (
        <>
           <section className="sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%] 2xl:w-[100%] px-3 bg-white bg-no-repeat bg-cover bg-[center_top_1rem]" style={{ backgroundImage: 'url(images/af-img.png)' }}>
           <div className="md:container md:mx-auto px-3 sd:px-10  md:px-10 lg:px-10 xl:px-10 2xl:px-10 py-20">
            <div className='title-step sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%] flex justify-center mb-10'>
                <h2 className='text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold  text-center sm:text-center md:text-center lg:text-center sl:text-center'>How To Book Flight or Hotel For your Visa Application</h2></div>
          
           <div className="grid grid-row-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-10">
           <div className='rounded-[20px] border-solid border-zinc-200 border-2 p-6  grid grid-rows  gap-3 bg-white shadow-md'>
            <div className='card-img'>
                <img src="images/Flight_Booking_Step_2.svg" alt=''/>
            </div>
            <h3  className='text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-bold  text-center sm:text-center md:text-center lg:text-center sl:text-center'>Search for Flight or Hotel</h3>
            <p  className='text-1xl md:text-1xl lg:text-1xl xl:text-1xl font-[400] text-center sm:text-center md:text-center lg:text-center sl:text-center'>Search for the flight or hotel by filling in the booking and personal details.</p>
           </div>
          
           <div className='rounded-[20px] border-solid border-zinc-200 border-2 p-6  grid grid-rows  gap-3 bg-white shadow-md'>
            <div className='card-img'>
                <img src="images/Flight_Booking_Step_3.svg" alt=''/>
            </div>
            <h3  className='text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-bold  text-center sm:text-center md:text-center lg:text-center sl:text-center'>Select Flight or Hotel</h3>
            <p  className='text-1xl md:text-1xl lg:text-1xl xl:text-1xl font-[400] text-center sm:text-center md:text-center lg:text-center sl:text-center'>View flight or hotel details or directly select the desired service.</p>
           </div>

           
           <div className='rounded-[20px] border-solid border-zinc-200 border-2 p-6  grid grid-rows  gap-3 bg-white shadow-md'>
            <div className='card-img'>
                <img src="images/Step_4.svg" alt=''/>
            </div>
            <h3  className='text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-bold  text-center sm:text-center md:text-center lg:text-center sl:text-center'>Confirm Your Booking</h3>
            <p  className='text-1xl md:text-1xl lg:text-1xl xl:text-1xl font-[400] text-center sm:text-center md:text-center lg:text-center sl:text-center'>Confirm your booking details and pay for the booking to get your visa itinerary.</p>
           </div>

           
           <div className='rounded-[20px] border-solid border-zinc-200 border-2 p-6  grid grid-rows  gap-3 bg-white'>
            <div className='card-img'>
                <img src="images/step_4-1.svg" alt=''/>
            </div>
            <h3  className='text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-bold  text-center sm:text-center md:text-center lg:text-center sl:text-center'>Download Your Booking</h3>
            <p  className='text-1xl md:text-1xl lg:text-1xl xl:text-1xl font-[400] text-center sm:text-center md:text-center lg:text-center sl:text-center'>Your booking will be ready for you to download and print out immediately</p>
           </div>
           </div>
            </div>
            </section>  
        </>
    )
}
export default Steps;