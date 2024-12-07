import React from 'react'

import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Flifghtslider() {
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
                items: 2,
                margin: 10,
            },
            400: {
                items: 2,
                margin: 15,
            },
            600: {
                items: 3,
                margin: 15,
            },
            700: {
                items: 4,
                margin: 15,
            },
            1000: {
                items: 5,
                margin: 15,
    
            }
        },
    };
  return (
    <>
    <section className="sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%] 2xl:w-[100%] px-3 bg-red-100">
    <div className="md:container md:mx-auto px-3 sd:px-10  md:px-10 lg:px-10 xl:px-10 2xl:px-10 py-10">
      <OwlCarousel className='slider-items owl-carousel' {...options}>
      <div className='item'>
        <div className='bg-white w-[100%]  h-20 flex rounded justify-center   p-5 '><img src="images/ATN.png" className='h-[100%] m-[0 auto] w-[auto!important]' alt=""/></div>
    </div>
    <div className='item'>
    <div className='bg-white w-[100%] h-20 flex rounded justify-center   p-5 '><img src="images/JSH.png" className='h-[100%] m-[0 auto] w-[auto!important]' alt=""/></div>
    </div>
    <div className='item'>
    <div className='bg-white w-[100%] h-20 flex rounded justify-center   p-5 '><img src="images/KOR.png" className='h-[100%] m-[0 auto] w-[auto!important]' alt=""/></div>
    </div>
    <div className='item'>
    <div className='bg-white w-[100%] h-20 flex rounded justify-center   p-5 '><img src="images/KZR.png" className='h-[100%] m-[0 auto] w-[auto!important]' alt=""/></div>
    </div>
    <div className='item'>
    <div className='bg-white w-[100%] h-20 flex rounded justify-center   p-5 '><img src="images/AIC.png" className='h-[100%] m-[0 auto] w-[auto!important]' alt=""/></div>
    </div>
    <div className='item'>
    <div className='bg-white w-[100%] h-20  flex rounded justify-center   p-5 '><img src="images/VTI.png" className='h-[100%] m-[0 auto] w-[auto!important]' alt=""/></div>
    </div>
    
    <div className='item'>
    <div className='bg-white w-[100%] h-20 flex rounded justify-center   p-5 '><img src="images/JDI.png" className='h-[100%] m-[0 auto] w-[auto!important]' alt=""/></div>
    </div>
    <div className='item'>
    <div className='bg-white w-[100%] h-20 flex rounded justify-center   p-5 '><img src="images/JAF.png" className='h-[100%] m-[0 auto] w-[auto!important]' alt=""/></div>
    </div>
    <div className='item'>
    <div className='bg-white w-[100%] h-20  flex rounded justify-center  p-5 '><img src="images/JWX.png" className='h-[100%] m-[0 auto] w-[auto!important]' alt=""/></div>
    </div>
    <div className='item'>
    <div className='bg-white w-[100%] h-20 flex rounded justify-center   p-5 '><img src="images/LNI.png" className='h-[100%] m-[0 auto] w-[auto!important]' alt=""/></div>
    </div>
    <div className='item'>
    <div className='bg-white w-[100%] h-20 flex rounded justify-center   p-5 '><img src="images/SEJ.png" className='h-[100%] m-[0 auto] w-[auto!important]'alt=""/></div>
    </div>  
       </OwlCarousel>
       </div>
       </section>
       </>
  )
}
