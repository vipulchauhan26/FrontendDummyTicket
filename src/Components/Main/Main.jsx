import Footer from "../Footer/Footer";
import HeroBackground from "../HeroBackground/HeroBackground";
import Navbar from "../Navbar/Navbar";
import Section from "../Section/Section";
import SectionThree from "../Section/SectionThree";

const Main = () => {
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