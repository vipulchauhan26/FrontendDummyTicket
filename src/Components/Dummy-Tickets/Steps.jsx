import React from 'react'

const Steps = () => {


    return (
        <>
           <section className="sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%] 2xl:w-[100%] px-3 bg-white bg-no-repeat bg-cover bg-[center_top_1rem]" style={{ backgroundImage: 'url(images/af-img.png)' }}>
           <div className="md:container md:mx-auto px-3 sd:px-10  md:px-10 lg:px-10 xl:px-10 2xl:px-10 py-20">
            <div className='title-step sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%] flex justify-center mb-10'>
                <h2 className='text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold  text-center '>Getting a flight or hotel dummy ticket is as EASY as 1-2-3!
                </h2></div>
          
           <div className="grid grid-row-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-10">
           <div className='rounded-[20px] border-solid border-zinc-200 border-2 p-4  grid grid-rows  gap-3 bg-white shadow-md'>
            <div className='card-img h-[200px]'>
                <img src="images/Flight_Booking_Step_2.svg" alt=''/>
            </div>
            <h3  className='text-xl font-bold  text-center sm:text-center md:text-center lg:text-center sl:text-center border-b-2 border-dashed border-red-600'>SEARCH FOR<br/>FLIGHT/HOTEL</h3>
            <p  className='text-base font-[400] text-center '>Provide details & run the flight or hotel search query to pull out available results</p>
           </div>
          
           <div className='rounded-[20px] border-solid border-zinc-200 border-2 p-4  grid grid-rows  gap-3 bg-white shadow-md'>
            <div className='card-img h-[200px]'>
                <img src="images/Flight_Booking_Step_3.svg" alt=''/>
            </div>
            <h3  className='text-xl font-bold  text-center border-b-2 border-dashed border-red-600'>SELECT<br/>FLIGHT/HOTEL</h3>
            <p  className='text-base text-center font-[400] '>View available flight or hotel details and select the most relevant travel itinerary</p>
           </div>

           
           <div className='rounded-[20px] border-solid border-zinc-200 border-2 p-4  grid grid-rows  gap-3 bg-white shadow-md'>
            <div className='card-img h-[200px]'>
                <img src="images/Step_4.svg"  className='h-[100%]' alt=''/>
            </div>
            <h3  className='text-xl font-bold  text-center  border-b-2 border-dashed border-red-600'>CONFIRM YOUR<br/>FLIGHT/HOTEL BOOKING</h3>
            <p  className='text-base font-[400] text-center '>Enter traveler/guest information, and make the payment to confirm your flight/hotel booking</p>
           </div>

           
           <div className='rounded-[20px] border-solid border-zinc-200 border-2 p-4  grid grid-rows  gap-3 bg-white shadow-md'>
            <div className='card-img h-[200px]'>
                <img src="images/step_4-1.svg" alt=''/>
            </div>
            <h3  className='text-xl font-bold  text-center  border-b-2 border-dashed border-red-600'>DOWNLOAD<br/>YOUR BOOKING</h3>
            <p  className='text-base font-[400] text-center'>Your flight or hotel booking confirmation receipt is available for download or print</p>
           </div>
           </div>
            </div>
            </section>  
        </>
    )
}
export default Steps;