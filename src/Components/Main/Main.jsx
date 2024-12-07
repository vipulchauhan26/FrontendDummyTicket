import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import HeroBackground from "../HeroBackground/HeroBackground";
import Navbar from "../Navbar/Navbar";
import Section from "../Section/Section";
import SectionThree from "../Section/SectionThree";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const Main = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Check for access token in local storage (or your preferred storage)
        const token = localStorage.getItem("token");

        if (token) {
            // Decode the token to check expiration
        
            const decodedToken = jwtDecode(token);
            const currentTime = Date.now() / 1000;

            if (decodedToken.exp < currentTime) {
                // Token has expired
                console.warn("Access token has expired.");
                // Redirect to login page or refresh the token
                navigate("/login");
            }
        } else {
            // No token found, redirect to login
            navigate("/login");
        }
    }, [navigate]);
    return (
        <>
            <Navbar />
            <HeroBackground />
            <Section heading={"Handcrafted Holiday Packages"}image={"https://alike-asset.s3.eu-central-1.amazonaws.com/catalog/product/i/m/img_1685275856_1.png?store=alike&image-type=image&quality=100&auto_optimize=medium&crop_gravity=center"}/>
            <Section heading={"Best Selling Experiences"}  image={"https://alike-asset.s3.eu-central-1.amazonaws.com/catalog/product/i/m/img_1685275856_1.png?store=alike&image-type=image&quality=100&auto_optimize=medium&crop_gravity=center"}/>
            <SectionThree/>
            <Footer/>
        </>
    )
}

export default Main;