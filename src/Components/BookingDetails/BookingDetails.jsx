import { useEffect, useState } from "react";
import { HiMiniArrowRight } from "react-icons/hi2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import BookingDetailsRight from "./BookingDetailsRight";
import airlinesData from "./airlines.json";
import axios from "axios";
import Footer from "../Footer/Footer";
import { ToastContainer, toast } from 'react-toastify';
const BookingDetails = () => {
    const location = useLocation();
    const [totalPassenger, setTotalPassenger] = useState(0);
    const [amount, setAmount] = useState(400);
    const [tripAmount, setTripAmount] = useState();
    const { from, to, departureDate, returnDate, tripType } = location.state || {};
    const [JourneyDetails, setJourneyDetails] = useState();
    const [departure, setDeparture] = useState();
    const [total, setTotal] = useState(0);
    const navigate = useNavigate();

    const [contactDetails, setContactDetails] = useState({
        name: '',
        phone: '',
        email: ''
    });

    const handleContactDetailsChange = (updatedDetails) => {
        setContactDetails(prevDetails => ({ ...prevDetails, ...updatedDetails }));
    };

    const [passengers, setPassengers] = useState([]);

    const addPassenger = () => {
        setPassengers([
            ...passengers,
            { title: 'Mr', firstName: '', lastName: '', dob: '', nationality: '' }
        ]);
        setTotalPassenger(totalPassenger + 1);

    };

    const formatDate = (date) => {
        const d = new Date(date);
        const day = String(d.getDate()).padStart(2, '0');
        const month = String(d.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
        const year = d.getFullYear();

        const hours = String(d.getHours()).padStart(2, '0');
        const minutes = String(d.getMinutes()).padStart(2, '0');
        const seconds = String(d.getSeconds()).padStart(2, '0');
        // console.log(hours, minutes, seconds);
        return `${day}/${month}/${year}`;
    };


    const extractCode = (airportString) => {
        const match = airportString.match(/\(([^)]+)\)/);

        if (match) {
            const airportCode = match[1];
            return `${airportCode}`;
        } else {
            console.log('No airport code found');
        }
    }

    const getTotalTime = (totalSeconds) => {


        // Calculate total hours
        const hours = Math.floor(totalSeconds / 3600);

        // Calculate remaining seconds after converting to hours
        const remainingSeconds = totalSeconds % 3600;

        // Calculate minutes from remaining seconds
        const minutes = Math.floor(remainingSeconds / 60);
        return `${hours} hours and ${minutes} minutes`;
        console.log(`Total: ${hours} hours and ${minutes} minutes`);
    }

    // Format the dates
    const formattedDepartureDate = formatDate(departureDate);
    const formattedReturnDate = formatDate(returnDate);

    const fetchAirline = async () => {
        const fromCode = extractCode(from);
        const toCode = extractCode(to);

        if (fromCode && toCode && !tripType) {
            const airlines = await axios.get(`https://api.tequila.kiwi.com/v2/search?fly_from=${fromCode}&fly_to=${toCode}&date_from=${formattedDepartureDate}&date_to=${formattedDepartureDate}&ret_from_diff_city=true&ret_to_diff_city=true&one_for_city=0&one_per_date=0&only_working_days=false&only_weekends=false&limit=2`, {
                headers: {
                    'apikey': 'nst7nQCznwAahbh0dsvDFx9bh0qxC4lm'
                }
            });
            const flightData = airlines.data.data[0];
            setJourneyDetails(airlines.data.data[0].route);
            console.log(airlines, "oneway")
            if (flightData && flightData.duration) {
                setDeparture(getTotalTime(flightData?.duration?.total));
            }
        } else {
            const airlines = await axios.get(`https://api.tequila.kiwi.com/v2/search?fly_from=${fromCode}&fly_to=${toCode}&date_from=${formattedDepartureDate}&date_to=${formattedDepartureDate}&return_from=${formattedReturnDate}&return_to=${formattedReturnDate}&ret_from_diff_city=true&ret_to_diff_city=true&one_for_city=0&one_per_date=0&only_working_days=false&only_weekends=false&limit=2`, {
                headers: {
                    'apikey': 'nst7nQCznwAahbh0dsvDFx9bh0qxC4lm'
                }
            });
            const flightData = airlines.data.data[0];
            setJourneyDetails(airlines.data.data[0].route);
            if (flightData && flightData.duration) {
                setDeparture(getTotalTime(flightData?.duration?.total));
            }
            console.log("return");
            console.log(airlines, "data");
        }
    }

    const getAirlineLogo = (iataCode) => {
        // console.log(iataCode);
        const airline = airlinesData.data.find(airline => airline.iata_code === iataCode);
        // console.log(airline);
        return airline.logo;

    }

    const getAirlineName = (iataCode) => {
        // console.log(iataCode);
        const airline = airlinesData.data.find(airline => airline.iata_code === iataCode);
        // console.log(airline);
        return airline.name;

    }

    const generateTxnId = () => {
        const timestamp = Date.now().toString(); // Current timestamp
        const randomString = Math.random().toString(36).substr(2, 9); // Random alphanumeric string
        return timestamp + randomString; // Concatenate the timestamp and random string
    };

    const formattedAmount = parseFloat(total).toFixed(2);
   
    const handlePaymentClick = async () => {
        // console.log(contactDetails,"contact");
        if (validateContactDetails()) {
            navigate("/payment-page", {
                state: {
                    amount: formattedAmount,
                    name: contactDetails.name,
                    phone: contactDetails.phone,
                    email: contactDetails.email,
                    passengers: passengers
                }
            });
        }
    }


    //This method will generate the hashvalue
    

    const validateContactDetails = () => {
        if (!contactDetails.name || !contactDetails.phone || !contactDetails.email) {
            toast.error("Please fill in all contact details (name, phone, and email) before making the payment.");
            return false;
        }
        else if (totalPassenger < 1) {
            toast.error("Please add Passenger");
            return false;
        }
        for (let i = 0; i < passengers.length; i++) {
            const passenger = passengers[i];
            if (!passenger.title || !passenger.firstName || !passenger.lastName || !passenger.dob || !passenger.nationality) {
                toast.error(`Please fill in all details for passenger ${i + 1}.`);
                return false;
            }
        }
        return true;
    };


    useEffect(() => {
        fetchAirline();
    }, [from, to, departureDate, returnDate]);

    useEffect(() => {
        // Calculate the total and update state
        const calculatedTotal = tripType ? (amount * totalPassenger) * 2 : amount * totalPassenger;
        setTotal(calculatedTotal);
    }, [tripType, totalPassenger, amount]);

    return (
        <>
            <div className=" flex w-full px-[10%] py-[10%] flex-col font-bold  bg-gradient-to-r from-white from-67% to-green-100 to-33%">
                <h3 className=" text-center underline text-[#ec601d] text-4xl">Booking Details</h3>
                <div className=" flex w-full gap-x-3">

                    <BookingDetailsRight totalPassenger={totalPassenger} setTotalPassenger={setTotalPassenger} onContactDetailsChange={handleContactDetailsChange} passengers={passengers} setPassengers={setPassengers} addPassenger={addPassenger} />
                    <div className="right-detail mt-10 w-[30%] flex flex-col">
                        <div className="borde-2 border-[#ec601d] rounded-md text-center p-5 bg-[#ec601d]">Order Summary</div>
                        <div className="detai pt-6">
                            <div className="borde-2  border-[#ec601d] rounded-md text-center p-4 bg-slate-400">flight</div>
                            <div className="pt-3 px-2">
                                <p>{from}</p>
                                <span className="flex w-full justify-center"><HiMiniArrowRight /></span>
                                <p>{to}</p>
                                <span>{departureDate}</span>

                                <div className="flex flex-col gap-2 mt-28">
                                    <div className="flex justify-between">
                                        <span>{tripType ? 'Routes * 2' : 'Routes'}</span>
                                        <span0>{tripType ? '800' : '400'}</span0>
                                    </div>
                                    <hr className="border-b border-dashed border-gray-400" />
                                    <div className="flex justify-between">
                                        <span>Amount * {totalPassenger}</span>
                                        <span>{amount * totalPassenger}</span>
                                    </div>
                                    <hr className="border-b border-dashed border-gray-400" />
                                    <div className="flex justify-between">
                                        <span>Total</span>
                                        <span>{total}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-2">
                            <button className="w-full text-2xl bg-[#ec601d] rounded-md p-4 mt-4 hover:text-white" onClick={handlePaymentClick}>Pay Now</button>
                        </div>

                        {
                            JourneyDetails && JourneyDetails.map((item) => (
                                <div className="flightdetails mt-10   bg-white rounded-md ">
                                    <div className="airlines flex items-center">
                                        <span><img src={getAirlineLogo(item?.airline)} className="w-16" alt="airline" /></span>
                                        {/* <span><img src="/images/AIC.png" className="w-16" alt="airline" /></span> */}
                                        <div className="flex flex-col ml-5">
                                            <span >{`Airline Name: ${getAirlineName(item?.airline)}`}</span>
                                            <span>{item?.cityFrom} to {item?.cityTo}</span>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="trip-details flex gap-12 w-full my-4 justify-between">
                                        <div className="flex flex-col">
                                            <span className=" text-center">{`${formatDate(item?.local_departure)}`}</span>
                                            <span className=" text-center text-4xl">{item?.cityCodeFrom}</span>
                                            {/* <span className=" text-center">(INDIRA GANDHI)</span> */}
                                        </div>
                                        <div className="flex justify-center items-center flex-col">
                                            <span className="text-center">{departure}</span>
                                            <span>{`(Total Time)`}</span>
                                        </div>
                                        <div className="flex flex-col ">
                                            <span className=" text-center">{`${formatDate(item?.local_arrival)}`}</span>
                                            <span className=" text-center text-4xl">{item?.cityCodeTo}</span>
                                            {/* <span className=" text-center">(INDIRA GANDHI)</span> */}
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <ToastContainer />
            </div>
            <Footer />
        </>
    )
}

export default BookingDetails;

