import React from 'react'

import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Testimonials() {
    const options = {
        margin: 30,
        responsiveClass: true,
        nav: true,
        dots: false,
        autoplay: true,
        loop: true,
        nav:false,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
                margin: 10,
            },
            400: {
                items: 1,
                margin: 15,
            },
            600: {
                items: 1,
                margin: 15,
            },
            700: {
                items: 2,
                margin: 15,
            },
            1000: {
                items: 2,
                margin: 15,
    
            }
        },
    };
  return (
    <>
    <section className="sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%] 2xl:w-[100%] px-3" style={{background: 'linear-gradient(to bottom,  rgba(255,249,249,0) 25%,rgba(250,242,242,0) 34%,rgba(211,189,187,1) 100%)'}}>
    <div className="md:container md:mx-auto px-3 sd:px-10  md:px-10 lg:px-10 xl:px-10 2xl:px-10">  
    <div className='title-step sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%] flex justify-center pt-10'>
    <h2 className='text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold  text-center sm:text-center md:text-center lg:text-center sl:text-center'> What Our Clients Say’s</h2></div>
   </div>
    <div className="md:container md:mx-auto px-3 sd:px-10  md:px-10 lg:px-10 xl:px-10 2xl:px-10 py-10">
      <OwlCarousel className='slider-items owl-carousel' {...options}>
      <div className='item'>
            <div className='bg-white w-[100%] flex flex-col gap-10 rounded-xl justify-center align-items-center  p-5 '>
                <div className='icon-box m-auto w-[40px]'><img src='images/tasty-quotes-icon.webp'/></div>
            <div >
            <p className='text-center text-1xl md:text-1xl lg:text-1xl xl:text-1xl font-[400] mb-7'>Thanks for processing my dummy flight booking instantly. My visa application got accepted last week, and my visa is on the way. </p>
            {/* <div className='text-center text-1xl md:text-1xl lg:text-1xl xl:text-1xl font-[600]'><strong>Luca Romano</strong></div> */}
            </div>
        </div> 
        </div>  
        <div className='item'>
            <div className='bg-white w-[100%] flex flex-col gap-10 rounded-xl justify-center align-items-center  p-5 '>
                <div className='icon-box m-auto w-[40px]'><img src='images/tasty-quotes-icon.webp'/></div>
            <div >
            <p className='text-center text-1xl md:text-1xl lg:text-1xl xl:text-1xl font-[400] mb-7'>I appreciate the support and guidance of TripCafe on dummy tickets for visa application. </p>
            {/* <div className='text-center text-1xl md:text-1xl lg:text-1xl xl:text-1xl font-[600]'><strong>Luca Romano</strong></div> */}
            </div>
        </div> 
        </div> 
        <div className='item'>
            <div className='bg-white w-[100%] flex flex-col gap-10 rounded-xl justify-center align-items-center  p-5 '>
                <div className='icon-box m-auto w-[40px]'><img src='images/tasty-quotes-icon.webp'/></div>
            <div >
            <p className='text-center text-1xl md:text-1xl lg:text-1xl xl:text-1xl font-[400] mb-7'>Quick flight booking confirmation at tripcafe helped me get the visa on time for our Paris holiday</p>
            {/* <div className='text-center text-1xl md:text-1xl lg:text-1xl xl:text-1xl font-[600]'><strong>Luca Romano</strong></div> */}
            </div>
        </div> 
        </div> 
        <div className='item'>
            <div className='bg-white w-[100%] flex flex-col gap-10 rounded-xl justify-center align-items-center  p-5 '>
                <div className='icon-box m-auto w-[40px]'><img src='images/tasty-quotes-icon.webp'/></div>
            <div >
            <p className='text-center text-1xl md:text-1xl lg:text-1xl xl:text-1xl font-[400] mb-7'>Good service at the best price. Liked it. Thank you TripCafe team</p>
            {/* <div className='text-center text-1xl md:text-1xl lg:text-1xl xl:text-1xl font-[600]'><strong>Luca Romano</strong></div> */}
            </div>
        </div> 
        </div> 
  
   
       </OwlCarousel>
       </div>
       </section>
       </>
  )
}
