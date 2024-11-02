import React, { useEffect, useState, useRef } from "react";
import { json, useLocation } from "react-router-dom";
import axios from "axios";

const PaymentComponent = () => {
    const generateTxnId = () => {
        const timestamp = Date.now().toString(); // Current timestamp
        const randomString = Math.random().toString(36).substr(2, 9); // Random alphanumeric string
        return timestamp + randomString; // Concatenate the timestamp and random string
    };

    const location = useLocation();
    const { amount, name, phone, email, passengers, travellingDetails } = location.state || {};
    const [hash, setHash] = useState(null);
    const [txnid, setTxnid] = useState(generateTxnId());

    const isPaymentRequested = useRef(false); // To track whether the payment request was already made

    const data = {
        txnid,
        amount,
        productinfo: "dummyTicket",
        firstname: name,
        udf1: JSON.stringify(passengers),
        udf2: JSON.stringify(travellingDetails),
        email
    };

    const paymentReq = async () => {
        try {
            const token = localStorage.getItem("token");
            console.log(data, "sent");
            const response = await axios.post(`http://localhost:8080/api/payment`, JSON.stringify(data), {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            });
            console.log(response);
            setHash(response.data?.hash); // Access the hash value from the response
        } catch (error) {
            console.error("Payment Error:", error);
        }
    };

    // Use useEffect to call the paymentReq function only once when the component is mounted
    useEffect(() => {
        const initiatePayment = async () => {
            if (!isPaymentRequested.current) { // Check if the payment request was already made
                await paymentReq();
                isPaymentRequested.current = true; // Mark the request as made
            }
        };
        initiatePayment();
    }, []); // Empty dependency array ensures it only runs once

    return (
        <div>
            <div className="container mx-auto p-4 ">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h1 className="text-2xl font-bold mb-4">Hello, {name}!</h1>
                    <h2 className="text-xl font-semibold mb-4">Payment Details</h2>

                    <div className="payment-details">
                        <p className="mb-2"><strong>Transaction ID:</strong> {txnid}</p>
                        <p className="mb-2"><strong>Amount:</strong> ₹{amount}</p>
                        <p className="mb-2"><strong>Name:</strong> {name}</p>
                        <p className="mb-2"><strong>Phone:</strong> {phone}</p>
                        <p className="mb-2"><strong>Email:</strong> {email}</p>

                        <div className="mt-4">
                            <p className="font-semibold text-lg">Passengers:</p>
                            <ul className="list-disc list-inside mt-2">
                                {passengers?.map((passenger, index) => (
                                    <li key={index}>
                                        {passenger.title} {passenger.firstName} {passenger.lastName} ({passenger.dob})
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-4">
                            <p className="font-semibold text-lg">Traveling Details:</p>
                            <ul className="list-disc list-inside mt-2">
                                <li><strong>From:</strong> {travellingDetails?.from}</li>
                                <li><strong>To:</strong> {travellingDetails?.to}</li>
                                <li><strong>Departure Date:</strong> {travellingDetails?.departureDate}</li>
                                {travellingDetails?.returnDate && <li><strong>Return Date:</strong> {travellingDetails.returnDate}</li>}
                                <li><strong>Trip Type:</strong> {travellingDetails?.tripType}</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {hash && (
                    <form action='https://test.payu.in/_payment' method='post' className="mt-8">
                        <input type="hidden" name="key" value="d9BcuQ" />
                        <input type="hidden" name="txnid" value={txnid} />
                        <input type="hidden" name="amount" value={amount} />
                        <input type="hidden" name="productinfo" value="dummyTicket" />
                        <input type="hidden" name="firstname" value={name} />
                        <input type="hidden" name="email" value={email} />
                        <input type="hidden" name="hash" value={hash} />
                        <input type="hidden" name="udf1" value={JSON.stringify(passengers)} />
                        <input type="hidden" name="udf2" value={JSON.stringify(travellingDetails)} />
                        <input type="hidden" name="surl" value="http://localhost:8080/api/test" />
                        <input type="hidden" name="furl" value="http://localhost:8080/api/testFailure" />
                        <button
                            type="submit"
                            className="bg-[#ec601d]  text-black px-6 py-3 rounded-md hover:text-white transition duration-300"
                        >
                            Submit Payment
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default PaymentComponent;
