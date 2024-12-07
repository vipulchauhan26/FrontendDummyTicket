import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

const FAQs = () => {
  return (
    <>
      <Navbar/>
      <section className='header-title sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%] 2xl:w-[100%]  px-3  bg-no-repeat bg-cover  bg-center' style={{ backgroundImage: 'url(images/banner-bg-inn.jpg)' }}>
  
      <div className="md:container md:mx-auto px-3 sd:px-10  md:px-10 lg:px-10 xl:px-10 2xl:px-10 py-20">
            <div> <h1 className=" text-4xl md:text-6xl lg:text-6xl xl:text-6xl font-black text-white ">FAQs</h1></div>
        </div>
      </section>
      <section className="sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%] 2xl:w-[100%]  px-3 "   style={{background: 'linear-gradient(to bottom,  rgba(255,249,249,0) 25%,rgba(250,242,242,0) 34%,rgba(211,189,187,1) 100%)'}}>


      <div className="md:container md:mx-auto px-3 sd:px-10  md:px-10 lg:px-10 xl:px-10 2xl:px-10 py-20">
      <div class="grid  max-w-2xl mx-auto mt-8">
		<div class="py-1">
			<details class="group transition-al1 duration-75">
				<summary class="flex justify-between items-center font-medium cursor-pointer list-none bg-[#cc2c21] color-white  p-3 rounded-lg ">
					<span className='text-white font-bold'>Is your flight or hotel dummy booking or ticket legit?</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p class="text-neutral-600 p-4 bg-[#fff] mx-2 rounded-b-lg shadow-md group-open:animate-fadeIn">
				Yes. It is completely valid to support your visa application. The embassy or consulate authority can verify our booking on the travel supplier’s website. However, before buying the dummy reservation, you should confirm the same from the checklist of the embassy. If it considers flight itinerary, airline reservation, flight booking or something similar as proof of travel, you can use dummy reservation.

				</p>
			</details>
		</div>
		<div class="py-1">
			<details class="group">
				<summary class="flex justify-between items-center font-medium cursor-pointer list-none bg-[#cc2c21] color-white  p-3 rounded-lg ">
					<span className='text-white font-bold'>How soon will I get my flight and hotel reservation?</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p class="text-neutral-600 p-4 bg-[#fff] mx-2 rounded-b-lg shadow-md group-open:animate-fadeIn">
				Immediately after flight or hotel booking confirmation and payment. Download or print the booking confirmation document per your requirement to apply for your visa.
				</p>
			</details>
		</div>
		<div class="py-1">
			<details class="group">
				<summary class="flex justify-between items-center font-medium cursor-pointer list-none bg-[#cc2c21] color-white  p-3 rounded-lg ">
					<span className='text-white font-bold'>How does the flight or hotel reservation for visa application work?</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p class="text-neutral-600 p-4 bg-[#fff] mx-2 rounded-b-lg shadow-md group-open:animate-fadeIn">
				The reservation document is one of the acceptance criteria for your visa application. It confirms to the embassy or consulate of the destination nation that you are a genuine traveler with a fixed plan to visit, stay and return to your home nation.

				</p>
			</details>
		</div>
		<div class="py-1">
			<details class="group">
				<summary class="flex justify-between items-center font-medium cursor-pointer list-none bg-[#cc2c21] color-white  p-3 rounded-lg">
					<span className='text-white font-bold'> What visa type is appropriate?</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p class="text-neutral-600 p-4 bg-[#fff] mx-2 rounded-b-lg shadow-md group-open:animate-fadeIn">
				Depending upon the purpose of your travel check what visa types are available under the immigration laws of the destination country. The overview of visa types by nationality are available with the below links.<br/>
				<Link to='https://indianvisaonline.gov.in/visa/visa-category.html'>India visa types</Link><br/>
				<Link to='https://www.welcometofrance.com/en/rubrique/visa'>France visa types</Link><br/>
				<Link to='https://www.esteri.it/en/servizi-consolari-e-visti/ingressosoggiornoinitalia/visto_ingresso/tipologie_visto_durata/'>Italy visa types</Link><br/>
				<Link to='https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/all-visa-categories.html'>USA visa types</Link><br/>


				</p>
			</details>
		</div>
		<div class="py-1">
			<details class="group">
				<summary class="flex justify-between items-center font-medium cursor-pointer list-none bg-[#cc2c21] color-white  p-3 rounded-lg">
					<span className='text-white font-bold'> What is a direct flight?</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p class="text-neutral-600 p-4 bg-[#fff] mx-2 rounded-b-lg shadow-md group-open:animate-fadeIn">
				Unlike a nonstop flight, a direct flight may include one or more layovers between the origin and destination. The purpose can be commercial (to disembark passengers or board new passengers) or technical (e.g. to refuel). The flight number or aircraft and your boarding pass remain the same, until you reach the destination. 
				</p>
			</details>
		</div>
		<div class="py-1">
			<details class="group">
				<summary class="flex justify-between items-center font-medium cursor-pointer list-none bg-[#cc2c21] color-white  p-3 rounded-lg">
					<span className='text-white font-bold'> What is a connecting flight?
					</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p class="text-neutral-600 p-4 bg-[#fff] mx-2 rounded-b-lg shadow-md group-open:animate-fadeIn">
				Connecting flights are from one city to another, with a layover or stop in between to change aircraft or airline. Each flight requires a separate boarding pass, but the itinerary remains common.

				</p>
			</details>
		</div>
	
	</div>
       </div>

      </section>
      <Footer/>
    </>
  )
}

export default FAQs
