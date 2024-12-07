import { PiCopyrightLight } from "react-icons/pi";
const Footer = () => {
    return (
       <>
       <div className="h-[120px]  sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%] 2xl:w-[100%] px-3 bg-[#d3bdbb] bg-no-repeat bg-cover " style={{ backgroundImage: 'url(images/footer-after-image.webp)' }}></div>
        <div className="px-[0] bg-[#fef6f0]" >
            {/* <div className="flex text-white py-12 justify-between">
                <div className="flex justify-between w-[60%]">
                    <div className=" flex flex-col gap-y-3 text-lg font-bold">
                        <span className="text-[#ec601d]">Explore</span>
                        <span>Trip Stories</span>
                        <span>Activities</span>
                        <span>Hotels & Stays</span>
                        <span>Cities</span>
                        <span>Offers</span>
                    </div>
                    <div className=" flex flex-col gap-y-3 text-lg font-bold">
                        <span className="text-[#ec601d]">Explore</span>
                        <span>Trip Stories</span>
                        <span>Activities</span>
                        <span>Hotels & Stays</span>
                        <span>Cities</span>
                        <span>Offers</span>
                    </div>
                    <div className=" flex flex-col gap-y-3 text-lg font-bold">
                        <span className="text-[#ec601d]">Explore</span>
                        <span>Trip Stories</span>
                        <span>Activities</span>
                        <span>Hotels & Stays</span>
                        <span>Cities</span>
                        <span>Offers</span>
                    </div>
                    <div className="flex flex-col gap-y-3 text-lg font-bold">
                        <span className="text-[#ec601d]">Explore</span>
                        <span>Trip Stories</span>
                        <span>Activities</span>
                        <span>Hotels & Stays</span>
                        <span>Cities</span>
                        <span>Offers</span>
                    </div>
                </div>

                <div className="flex flex-col w-[30%] gap-y-3 text-lg font-bold">
                    <span>Subscribe To Our Newsletter</span>
                    <span className=" font-thin">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis facere iste reprehenderit nostrum provident laudantium? Vel modi nostrum nihil doloribus.</span>
                    <div className="flex justify-between">
                        <input type="text" placeholder="Email Address" className="rounded-md bg-[#3f3f46] font-thin text-[#bbb9bd] outline-none py-1 px-5 w-[70%]" />
                        <button className="ml-6 bg-[#bc0c5f] py-1 px-5 rounded-md">Subscribe</button>
                    </div>
                </div>
            </div>
            <hr className=" border-[#3f3f46]" /> */}
            <div className="py-5 text-black flex flex-wrap justify-center items-center">
                <span className="px-5 border-r">Home</span>
                <span className="px-5 border-r">FAQ</span>
                <span className="border-r px-5 ">Contact</span>
                <span className="px-5 border-r">Terms & Conditions</span>
                <span className="px-5 border-r">Privacy</span>
                <span className="px-5 border-r">Blog</span>
                <span className="px-5 border-r flex items-center">
                    <PiCopyrightLight size={18} /> 
                    <span> Copyrights 2024-2025 TripCafeHolidays.com </span> </span>

                <span className="flex px-5">
                    <img src="https://alike.io/images/social-icon/whatsapp.svg" alt="" className="w-6" />
                </span>
            </div>
        </div>
        </>
    )
}

export default Footer;