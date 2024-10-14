import { useState, useEffect } from "react";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import Check from "@mui/icons-material/Check";
import styled from "styled-components";
import axios from "axios";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useLocation } from "react-router-dom";


const CheckoutButton = styled(Button)`
  && {
    background-color: green;
    color: white;
  }
`;

const generateTxnId = () => {
    const timestamp = Date.now().toString(); // Current timestamp
    const randomString = Math.random().toString(36).substr(2, 9); // Random alphanumeric string
    return timestamp + randomString; // Concatenate the timestamp and random string
};
const txnid = generateTxnId();
const PaymentComponent = () => {
    const location = useLocation();
    const [self, setSelf] = useState();
    const [oncheckOpen, setOnCheckOpen] = useState(false);
    const { amount, name, phone, email } = location.state || {};
    //   let url = process.env.REACT_APP_API_URL;


    const formattedAmount = parseFloat(amount).toFixed(2);
    const data = {
        txnid, //String
        amount: formattedAmount,  //Float
        productinfo: "dummyTicket",  //String
        firstname: name,   //String
        email: email,  //String
    };

    useEffect(() => {
        makePayment();
    }, [oncheckOpen]);

    let reshash;  //hashvalue generated will be stored in this variable

    const makePayment = async () => {
        await paymentReq();
        await responseReq();
    };

    //This method will generate the hashvalue
    const paymentReq = async () => {
        try {
            const token = localStorage.getItem("token");
            console.log(data, "sent");
                reshash = await axios.post(`http://localhost:8080/api/payment`, JSON.stringify(data), {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                });
        } catch {
            console.log("Payment Error");
        }
    };


    //We are using a modal, to open the payment transaction gateway after a click 
    const handleCheckClose = () => setOnCheckOpen(false); //close the modal
    const handleCheckOpen = () => setOnCheckOpen(true);  //open the modal
    //This method will use that hash value to make the transaction complete
    const responseReq = async () => {

        const pd = {
            key: "d9BcuQ", //once testing is done, change it to live key
            txnid, //String,
            amount: formattedAmount,  //Float
            firstname: name,
            email: email,
            phone: phone,
            productinfo: "dummyTicket",
            surl: "http://localhost:8080/api/test", //url called if payment is successful
            furl: "http://localhost:8080/api/testFailure", //url called when payment fails
            hash: reshash?.data?.hash,  //hashvalue 
            service_provider: "payu_paisa",
        };
        let res;
        try {
            const token = localStorage.getItem("token");
            res = await axios.post(`http://localhost:8080/api/response`, JSON.stringify(pd), {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            });
            console.log(res);
            await setSelf(res.data);
            await handleCheckOpen();
            return res;
        } catch (err) {
            console.log("response error");
        }
    };
    useEffect(() => {
        if (self) {
            window.location.href = self;
        }
    }, [self]);
    return (
        <Modal
            open={oncheckOpen}
            onClose={handleCheckClose}
            closeAfterTransition
            style={{
                background: "white",
                width: "50%",
                margin: "auto",
                height: "20vh",
            }}
        >
            <div
                style={{
                    backgroundColor: "white",
                    height: "20vh",
                    padding: "8%",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                }}
            >
                <a
                    href={self}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <CheckoutButton style={{ margin: "auto", alignItems: "center" }}>
                        You'll be redirected to PayU payment Gateway | <Check />
                    </CheckoutButton>
                </a>
            </div>
        </Modal>
    );
};

export default PaymentComponent;