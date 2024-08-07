const HeroBackground = () => {
    return (
        <div className=" relative">
            <div className="herobackground w-full">
                <img src="https://alike-asset.b-cdn.net/vue-images/traveller-home-cover.jpg" alt="hero" className="w-full" />
            </div>
            <div className="content absolute top-0 flex w-full h-full justify-center items-center">
                <span className=" text-white text-6xl">One Platform For Travellers and content creators</span>
            </div>
        </div>
    )
}
export default HeroBackground