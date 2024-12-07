import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <section className='header-title sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%] 2xl:w-[100%]  px-3  bg-no-repeat bg-cover  bg-center' style={{ backgroundImage: 'url(images/banner-bg-inn.jpg)' }}>
  
  <div className="md:container md:mx-auto px-3 sd:px-10  md:px-10 lg:px-10 xl:px-10 2xl:px-10 py-20">
        <div> <h1 className=" text-4xl md:text-6xl lg:text-6xl xl:text-6xl font-black text-white ">About Us</h1></div>
    </div>
  </section>

  <section className="sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%] 2xl:w-[100%]  px-3 "   style={{background: 'linear-gradient(to bottom,  rgba(255,249,249,0) 25%,rgba(250,242,242,0) 34%,rgba(211,189,187,1) 100%)'}}>
           
           
           <div className="md:container md:mx-auto py-12 px-3 sd:px-10  md:px-10 lg:px-10 xl:px-10 2xl:px-10  ">
           <div className="flex flex-wrap gap-x-10 items-center ">
           
                <div className="left w-[100%] sm:w-[100%]  md:w-[40%]  lg:w-[40%] xl:w-[40%] font-bold">
                <div className="w-[100%]  sm:w-[100%]  md:w-[100%]  lg:w-[100%] xl:w-[100%] ">
                    <img src='images/trevel-2.jpg' className='w-[100%]'  alt=""/>
                </div>
                    </div>
                    <div className="right sm:w-[100%] md:w-[56.5%] lg:w-[56.5%] xl:w-[56.5%] flex flex-col items-center justify-center gap-y-6 ">
                      <div className=' w-full'>
                    <h2 className=" text-2xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-left w-full">Who We Are?</h2>
                    <h3 className=" text-xl  font-bold text-left w-full">One of the biggest online ticket-reserving companies in the world.</h3>
                    </div>
                    <p className='text-base'>TripCafeHolidays.com is one of the biggest online ticket reserving companies in the world. We give all services for your Visa essentials such as flight reservation, travel insurance, hotel reservations, and visa assistance.</p>
                    <p className='text-base'>We aims to make the prepare of assembly your visa prerequisites less difficult, quicker and reasonable. We help with recognized flight and hotel reservations for the application of a visa when travelling internationally. Most embassy energize travellers against the buy of full paid flight tickets or securing hotel before their visa is confirmed. This is to save your amount if visa is rejected by the embassy.</p>
                
                   
                </div>
            </div>
            </div>
            
            </section> 
    <Footer/>

    </>
  )
}

export default AboutUs
