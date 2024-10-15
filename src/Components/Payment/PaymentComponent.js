

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const PaymentComponent = () => {
    // Function to generate a unique transaction ID
    const generateTxnId = () => {
        const timestamp = Date.now().toString(); // Current timestamp
        const randomString = Math.random().toString(36).substr(2, 9); // Random alphanumeric string
        return timestamp + randomString; // Concatenate the timestamp and random string
    };
    const location = useLocation();
    const { amount, name, phone, email, passengers } = location.state || {};
    const [hash, setHash] = useState(null);
    console.log(amount, name, phone, email, passengers);
    const [txnid, setTxnid] = useState(generateTxnId());


    const data = {
        txnid,
        amount,
        productinfo: "dummyTicket",
        firstname: name,
        udf1: JSON.stringify(passengers),
        email
    };


    // Function to make the payment request
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
            console.log("Hash received:", hash);
        } catch (error) {
            console.error("Payment Error:", error);
        }
    };

    // Use useEffect to call the paymentReq function when the component is mounted
    useEffect(() => {
        const initiatePayment = async () => {
            await paymentReq();
        };
        initiatePayment();
    }, []); // Empty dependency array to run only once on component mount

    return (
        <>
            <div>Hello</div>

            {hash && ( // Render the form only if the hash is available
                <form action='https://test.payu.in/_payment' method='post'>
                    <input type="hidden" name="key" value="d9BcuQ" />
                    <input type="hidden" name="txnid" value={txnid} />
                    <input type="hidden" name="amount" value={amount} />
                    <input type="hidden" name="productinfo" value="dummyTicket" />
                    <input type="hidden" name="firstname" value={name} />
                    <input type="hidden" name="email" value={email} />
                    <input type="hidden" name="hash" value={hash} />
                    <input type="hidden" name="udf1" value={JSON.stringify(passengers)}/>
                    <input type="hidden" name="surl" value="http://localhost:8080/api/test" />
                    <input type="hidden" name="furl" value="http://localhost:8080/api/testFailure" />
                    <input type="submit" value="Submit" />
                </form>
            )}
        </>
    );

};

export default PaymentComponent;
