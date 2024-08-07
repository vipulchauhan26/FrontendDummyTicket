import { useState } from "react";
import LeftSide from "./LeftSide";
import Footer from "../Footer/Footer";

const DummyTickets = () => {
    const [activeButton, setActiveButton] = useState('Flight');
    return (
        <>
        <div className="flex w-full px-[10%] h-[100vh] bg-gradient-to-r from-white from-67% to-green-100 to-33%">
            <div className="flex w-full">
                <div className="left w-[50%] flex flex-col items-start justify-center gap-y-6">
                    <h1 className=" text-6xl font-bold">Get Your Dummy Tickets At $5</h1>
                    <p className="text-[#8d97a9] text-xl font-medium">For visa application/immigration/proof of return/passport renewal/visa extension.</p>
                    <p className="text-[#8d97a9] text-xl font-medium">We Provide Genuine Dummy Ticket At A Reasonable Price Within 60 Minutes</p>
                    <button className="bg-[#ec601d] rounded-md p-5 text-white font-bold">Buy Dummy Tickets</button>
                </div>
                <LeftSide/>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default DummyTickets;