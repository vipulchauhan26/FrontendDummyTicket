import { useState } from "react";
import LeftSide from "./LeftSide";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Flifghtslider from "./Flifghtslider";
import Steps from "./Steps";
import VisaContent from "./VisaContent";
import PricingPlan from "./PricingPlan";
import Testimonials from "./Testimonials";



const DummyTickets = () => {
    const [activeButton, setActiveButton] = useState('Flight');

    return (
        <>
        <Navbar/>
        <section className="sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%] 2xl:w-[100%] bg-no-repeat bg-cover bg-top bg-center bg-fixed" style={{ backgroundImage: 'url(images/bg-1.jpg)' }}  >
            <div  className="sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%] 2xl:w-[100%] py-10" style={{backgroundColor:'rgba(255,255,255,0.5)'}}>
                <div className="md:container md:mx-auto px-3 sd:px-10  md:px-10 lg:px-10 xl:px-10 2xl:px-10">
                        <div className="flex w-full flex-wrap gap-y-6">
                        <div className="left sm:w-[100%] md:w-[60%] lg:w-[60%] xl:w-[60%] flex flex-col items-start justify-center gap-y-6">
                        <h1 className=" text-4xl md:text-6xl lg:text-6xl xl:text-6xl font-bold">Dummy flight/hotel reservation or visa @ $10</h1>
                        <p className="text-[#333] text-xl font-medium">We provide dummy flight tickets, hotel reservations, travel insurance, detailed itineraries, and complete visa assistance for smooth visa applications.</p>
                        {/* <button className="bg-[#ec601d] rounded-md p-5 text-white font-bold">Buy Dummy Tickets</button> */}
                        </div>
                       <LeftSide/>
                    </div>
                </div>
            </div>
        </section>
        <Flifghtslider/>
        <Steps/>
        <VisaContent/>
        <PricingPlan/>
        <Testimonials/>
        <Footer/>
        </>
    )
}
export default DummyTickets;