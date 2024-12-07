import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useLocation } from "react-router-dom";
const BookingDetailsRight = ({ totalPassenger, setTotalPassenger, onContactDetailsChange, passengers, setPassengers, addPassenger }) => {
    const location = useLocation();
    const { from, to, departureDate, returnDate } = location.state || {};

    const handleClose = (indexs) => {
        console.log(indexs);
        const newPassengers = passengers.filter((items, index) => index !== indexs);
        setPassengers(newPassengers);
        setTotalPassenger(totalPassenger - 1);
    }


    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        console.log("name", name, "value", value)
        const newPassengers = passengers.map((passenger, i) => {
            if (i === index) {
                return { ...passenger, [name]: value };
            }
            return passenger;
        });
        setPassengers(newPassengers);
    };

    const [contactDetails, setContactDetails] = useState({
        name: '',
        phone: '',
        email: ''
    });

    const handleInputsChange = (e) => {
        const { name, value } = e.target;
        setContactDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));
        onContactDetailsChange({ [name]: value });
    };
    return (
        <div className="w-[100%] sm:w-[68.8%] md:w-[68.8%] lg:w-[68.8%] xl:w-[68.8%]">
            <div className="left-detail mt-10">
                <div className="flex justify-between">
                    <div className="w-[33%] borde-2 border-[#ec601d] rounded-md text-center p-3 bg-[#ec601d] text-white">Routes</div>
                    <div className="w-[33%] border-2 border-[#ec601d] rounded-md text-center p-3 bg-[#ec601d] text-white">Passenger</div>
                    <div className="w-[33%] border-2 border-[#ec601d] rounded-md text-center p-3">Additional</div>
                </div>
                <div className="pt-6 px-2">
                    <div className="flex flex-col gap-6">
                        <h4 className="text-xl">Contact Details</h4>
                        <div className="contact flex flex-wrap">
                            <select className="dropdown border rounded-md p-3 w-[100%] sm:w-[48%] md:w-[48%] lg:w-[48%] xl:w-[48%]">
                                <option value="" disabled selected>Country Code</option>
                                <option value="+1">+1 United States</option>
                                <option value="+7">+7 Russia</option>
                                <option value="+20">+20 Egypt</option>
                                <option value="+27">+27 South Africa</option>
                                <option value="+30">+30 Greece</option>
                                <option value="+31">+31 Netherlands</option>
                                <option value="+32">+32 Belgium</option>
                                <option value="+33">+33 France</option>
                                <option value="+34">+34 Spain</option>
                                <option value="+36">+36 Hungary</option>
                                <option value="+39">+39 Italy</option>
                                <option value="+40">+40 Romania</option>
                                <option value="+41">+41 Switzerland</option>
                                <option value="+43">+43 Austria</option>
                                <option value="+44">+44 United Kingdom</option>
                                <option value="+45">+45 Denmark</option>
                                <option value="+46">+46 Sweden</option>
                                <option value="+47">+47 Norway</option>
                                <option value="+48">+48 Poland</option>
                                <option value="+49">+49 Germany</option>
                                <option value="+51">+51 Peru</option>
                                <option value="+52">+52 Mexico</option>
                                <option value="+53">+53 Cuba</option>
                                <option value="+54">+54 Argentina</option>
                                <option value="+55">+55 Brazil</option>
                                <option value="+56">+56 Chile</option>
                                <option value="+57">+57 Colombia</option>
                                <option value="+58">+58 Venezuela</option>
                                <option value="+60">+60 Malaysia</option>
                                <option value="+61">+61 Australia</option>
                                <option value="+62">+62 Indonesia</option>
                                <option value="+63">+63 Philippines</option>
                                <option value="+64">+64 New Zealand</option>
                                <option value="+65">+65 Singapore</option>
                                <option value="+66">+66 Thailand</option>
                                <option value="+81">+81 Japan</option>
                                <option value="+82">+82 South Korea</option>
                                <option value="+84">+84 Vietnam</option>
                                <option value="+86">+86 China</option>
                                <option value="+90">+90 Turkey</option>
                                <option value="+91" selected>+91 India</option>
                                <option value="+92">+92 Pakistan</option>
                                <option value="+93">+93 Afghanistan</option>
                                <option value="+94">+94 Sri Lanka</option>
                                <option value="+95">+95 Myanmar</option>
                                <option value="+98">+98 Iran</option>
                                <option value="+211">+211 South Sudan</option>
                                <option value="+212">+212 Morocco</option>
                                <option value="+213">+213 Algeria</option>
                                <option value="+216">+216 Tunisia</option>
                                <option value="+218">+218 Libya</option>
                                <option value="+220">+220 Gambia</option>
                                <option value="+221">+221 Senegal</option>
                                <option value="+222">+222 Mauritania</option>
                                <option value="+223">+223 Mali</option>
                                <option value="+224">+224 Guinea</option>
                                <option value="+225">+225 Ivory Coast</option>
                                <option value="+226">+226 Burkina Faso</option>
                                <option value="+227">+227 Niger</option>
                                <option value="+228">+228 Togo</option>
                                <option value="+229">+229 Benin</option>
                                <option value="+230">+230 Mauritius</option>
                                <option value="+231">+231 Liberia</option>
                                <option value="+232">+232 Sierra Leone</option>
                                <option value="+233">+233 Ghana</option>
                                <option value="+234">+234 Nigeria</option>
                                <option value="+235">+235 Chad</option>
                                <option value="+236">+236 Central African Republic</option>
                                <option value="+237">+237 Cameroon</option>
                                <option value="+238">+238 Cape Verde</option>
                                <option value="+239">+239 São Tomé and Príncipe</option>
                                <option value="+240">+240 Equatorial Guinea</option>
                                <option value="+241">+241 Gabon</option>
                                <option value="+242">+242 Republic of the Congo</option>
                                <option value="+243">+243 Democratic Republic of the Congo</option>
                                <option value="+244">+244 Angola</option>
                                <option value="+245">+245 Guinea-Bissau</option>
                                <option value="+246">+246 British Indian Ocean Territory</option>
                                <option value="+247">+247 Ascension Island</option>
                                <option value="+248">+248 Seychelles</option>
                                <option value="+249">+249 Sudan</option>
                                <option value="+250">+250 Rwanda</option>
                                <option value="+251">+251 Ethiopia</option>
                                <option value="+252">+252 Somalia</option>
                                <option value="+253">+253 Djibouti</option>
                                <option value="+254">+254 Kenya</option>
                                <option value="+255">+255 Tanzania</option>
                                <option value="+256">+256 Uganda</option>
                                <option value="+257">+257 Burundi</option>
                                <option value="+258">+258 Mozambique</option>
                                <option value="+260">+260 Zambia</option>
                                <option value="+261">+261 Madagascar</option>
                                <option value="+262">+262 Réunion</option>
                                <option value="+263">+263 Zimbabwe</option>
                                <option value="+264">+264 Namibia</option>
                                <option value="+265">+265 Malawi</option>
                                <option value="+266">+266 Lesotho</option>
                                <option value="+267">+267 Botswana</option>
                                <option value="+268">+268 Eswatini</option>
                                <option value="+269">+269 Comoros</option>
                                <option value="+290">+290 Saint Helena</option>
                                <option value="+291">+291 Eritrea</option>
                                <option value="+297">+297 Aruba</option>
                                <option value="+298">+298 Faroe Islands</option>
                                <option value="+299">+299 Greenland</option>
                                <option value="+350">+350 Gibraltar</option>
                                <option value="+351">+351 Portugal</option>
                                <option value="+352">+352 Luxembourg</option>
                                <option value="+353">+353 Ireland</option>
                                <option value="+354">+354 Iceland</option>
                                <option value="+355">+355 Albania</option>
                                <option value="+356">+356 Malta</option>
                                <option value="+357">+357 Cyprus</option>
                                <option value="+358">+358 Finland</option>
                                <option value="+359">+359 Bulgaria</option>
                                <option value="+370">+370 Lithuania</option>
                                <option value="+371">+371 Latvia</option>
                                <option value="+372">+372 Estonia</option>
                                <option value="+373">+373 Moldova</option>
                                <option value="+374">+374 Armenia</option>
                                <option value="+375">+375 Belarus</option>
                                <option value="+376">+376 Andorra</option>
                                <option value="+377">+377 Monaco</option>
                                <option value="+378">+378 San Marino</option>
                                <option value="+379">+379 Vatican City</option>
                                <option value="+380">+380 Ukraine</option>
                                <option value="+381">+381 Serbia</option>
                                <option value="+382">+382 Montenegro</option>
                                <option value="+383">+383 Kosovo</option>
                                <option value="+385">+385 Croatia</option>
                                <option value="+386">+386 Slovenia</option>
                                <option value="+387">+387 Bosnia and Herzegovina</option>
                                <option value="+389">+389 North Macedonia</option>
                                <option value="+420">+420 Czech Republic</option>
                                <option value="+421">+421 Slovakia</option>
                                <option value="+423">+423 Liechtenstein</option>
                                <option value="+500">+500 Falkland Islands</option>
                                <option value="+501">+501 Belize</option>
                                <option value="+502">+502 Guatemala</option>
                                <option value="+503">+503 El Salvador</option>
                                <option value="+504">+504 Honduras</option>
                                <option value="+505">+505 Nicaragua</option>
                                <option value="+506">+506 Costa Rica</option>
                                <option value="+507">+507 Panama</option>
                                <option value="+508">+508 Saint Pierre and Miquelon</option>
                                <option value="+509">+509 Haiti</option>
                                <option value="+590">+590 Saint Barthélemy</option>
                                <option value="+591">+591 Bolivia</option>
                                <option value="+592">+592 Guyana</option>
                                <option value="+593">+593 Ecuador</option>
                                <option value="+594">+594 French Guiana</option>
                                <option value="+595">+595 Paraguay</option>
                                <option value="+596">+596 Martinique</option>
                                <option value="+597">+597 Suriname</option>
                                <option value="+598">+598 Uruguay</option>
                                <option value="+599">+599 Curaçao</option>
                                <option value="+670">+670 East Timor</option>
                                <option value="+672">+672 Antarctica</option>
                                <option value="+673">+673 Brunei</option>
                                <option value="+674">+674 Nauru</option>
                                <option value="+675">+675 Papua New Guinea</option>
                                <option value="+676">+676 Tonga</option>
                                <option value="+677">+677 Solomon Islands</option>
                                <option value="+678">+678 Vanuatu</option>
                                <option value="+679">+679 Fiji</option>
                                <option value="+680">+680 Palau</option>
                                <option value="+681">+681 Wallis and Futuna</option>
                                <option value="+682">+682 Cook Islands</option>
                                <option value="+683">+683 Niue</option>
                                <option value="+685">+685 Samoa</option>
                                <option value="+686">+686 Kiribati</option>
                                <option value="+687">+687 New Caledonia</option>
                                <option value="+688">+688 Tuvalu</option>
                                <option value="+689">+689 French Polynesia</option>
                                <option value="+690">+690 Tokelau</option>
                                <option value="+691">+691 Micronesia</option>
                            </select>

                            <input type="text" className=" ml-0 mt-4 sm:ml-4 md:ml-4 lg:ml-4 sl:ml-4 sm:mt-0 md:mt-0  lg:mt-0 xl:mt-0   border rounded-md p-3 w-[100%] sm:w-[48.8%] md:w-[48.8%] lg:w-[48.8%] xl:w-[48.8%]" name="phone" placeholder="9999999999"
                                value={contactDetails.phone}
                                onChange={handleInputsChange} />
                        </div>
                        <input type="text" placeholder="Name" className="border rounded-md p-3" name="name" value={contactDetails.name}
                            onChange={handleInputsChange} />
                        <input type="text" placeholder="Email" className="border rounded-md p-3" name="email" value={contactDetails.email}
                            onChange={handleInputsChange} />
                    </div>
                    

                    {passengers.map((passenger, index) => (
                        <div className="mt-6 flex flex-col gap-6">
                            <hr className="border-b border-dashed border-gray-400" />
                            <div className="flex justify-between">
                                <h4 className="text-xl">Passenger {index + 1}</h4>
                                <span onClick={() => handleClose(index)}><IoMdClose /></span>
                            </div>
                            <div className="flex gap-6">
                                <div className="left w-[50%] flex flex-col gap-6">
                                    <div className="flex">
                                        <select className="dropdown border rounded-md p-3" value={passenger.title}
                                            onChange={(e) => handleInputChange(index, e)} name="title">
                                            <option value="Mr">Mr</option>
                                            <option value="Ms">Ms</option>
                                            <option value="Mrs">Mrs</option>
                                        </select>
                                        <input type="text" name="firstName" placeholder="First Name" className="w-full border rounded-md p-3" value={passenger.firstName} onChange={(e) => handleInputChange(index, e)} />
                                    </div>
                                    <input type="date" name="dob" placeholder="DOB" className="w-full border rounded-md p-3" value={passenger.dob} onChange={(e) => handleInputChange(index, e)} />
                                </div>
                                <div className="right w-[50%] flex flex-col gap-6">
                                    <input type="text" name="lastName" placeholder="Last Name" className="border rounded-md p-3" value={passenger.lastName} onChange={(e) => handleInputChange(index, e)}/>
                                    <select className="dropdown border rounded-md p-3" value={passenger.nationality || "Indian"} onChange={(e) => handleInputChange(index, e)} name="nationality">
                                        <option value="" disabled selected>Select Nationality</option>
                                        <option value="Afghan">Afghan</option>
                                        <option value="Albanian">Albanian</option>
                                        <option value="Algerian">Algerian</option>
                                        <option value="American">American</option>
                                        <option value="Andorran">Andorran</option>
                                        <option value="Angolan">Angolan</option>
                                        <option value="Antiguans">Antiguans</option>
                                        <option value="Argentine">Argentine</option>
                                        <option value="Armenian">Armenian</option>
                                        <option value="Australian">Australian</option>
                                        <option value="Austrian">Austrian</option>
                                        <option value="Azerbaijani">Azerbaijani</option>
                                        <option value="Bahamian">Bahamian</option>
                                        <option value="Bahraini">Bahraini</option>
                                        <option value="Bangladeshi">Bangladeshi</option>
                                        <option value="Barbadian">Barbadian</option>
                                        <option value="Belarusian">Belarusian</option>
                                        <option value="Belgian">Belgian</option>
                                        <option value="Belizean">Belizean</option>
                                        <option value="Beninese">Beninese</option>
                                        <option value="Bhutanese">Bhutanese</option>
                                        <option value="Bolivian">Bolivian</option>
                                        <option value="Bosnian">Bosnian</option>
                                        <option value="Botswanan">Botswanan</option>
                                        <option value="Brazilian">Brazilian</option>
                                        <option value="Bruneian">Bruneian</option>
                                        <option value="Bulgarian">Bulgarian</option>
                                        <option value="Burkinabe">Burkinabe</option>
                                        <option value="Burmese">Burmese</option>
                                        <option value="Burundian">Burundian</option>
                                        <option value="Cabo Verdean">Cabo Verdean</option>
                                        <option value="Cambodian">Cambodian</option>
                                        <option value="Cameroonian">Cameroonian</option>
                                        <option value="Canadian">Canadian</option>
                                        <option value="Central African">Central African</option>
                                        <option value="Chadian">Chadian</option>
                                        <option value="Chilean">Chilean</option>
                                        <option value="Chinese">Chinese</option>
                                        <option value="Colombian">Colombian</option>
                                        <option value="Comorian">Comorian</option>
                                        <option value="Congolese">Congolese</option>
                                        <option value="Costa Rican">Costa Rican</option>
                                        <option value="Croatian">Croatian</option>
                                        <option value="Cuban">Cuban</option>
                                        <option value="Cypriot">Cypriot</option>
                                        <option value="Czech">Czech</option>
                                        <option value="Danish">Danish</option>
                                        <option value="Djiboutian">Djiboutian</option>
                                        <option value="Dominican">Dominican</option>
                                        <option value="Dutch">Dutch</option>
                                        <option value="East Timorese">East Timorese</option>
                                        <option value="Ecuadorean">Ecuadorean</option>
                                        <option value="Egyptian">Egyptian</option>
                                        <option value="Salvadoran">Salvadoran</option>
                                        <option value="Equatorial Guinean">Equatorial Guinean</option>
                                        <option value="Eritrean">Eritrean</option>
                                        <option value="Estonian">Estonian</option>
                                        <option value="Ethiopian">Ethiopian</option>
                                        <option value="Fijian">Fijian</option>
                                        <option value="Filipino">Filipino</option>
                                        <option value="Finnish">Finnish</option>
                                        <option value="French">French</option>
                                        <option value="Gabonese">Gabonese</option>
                                        <option value="Gambian">Gambian</option>
                                        <option value="Georgian">Georgian</option>
                                        <option value="German">German</option>
                                        <option value="Ghanaian">Ghanaian</option>
                                        <option value="Greek">Greek</option>
                                        <option value="Grenadian">Grenadian</option>
                                        <option value="Guatemalan">Guatemalan</option>
                                        <option value="Guinean">Guinean</option>
                                        <option value="Guyanese">Guyanese</option>
                                        <option value="Haitian">Haitian</option>
                                        <option value="Honduran">Honduran</option>
                                        <option value="Hungarian">Hungarian</option>
                                        <option value="I-Kiribati">I-Kiribati</option>
                                        <option value="Icelander">Icelander</option>
                                        <option value="Indian" selected>Indian</option>
                                        <option value="Indonesian">Indonesian</option>
                                        <option value="Iranian">Iranian</option>
                                        <option value="Iraqi">Iraqi</option>
                                        <option value="Irish">Irish</option>
                                        <option value="Israeli">Israeli</option>
                                        <option value="Italian">Italian</option>
                                        <option value="Jamaican">Jamaican</option>
                                        <option value="Japanese">Japanese</option>
                                        <option value="Jordanian">Jordanian</option>
                                        <option value="Kazakhstani">Kazakhstani</option>
                                        <option value="Kenyan">Kenyan</option>
                                        <option value="Kiribati">Kiribati</option>
                                        <option value="Kuwaiti">Kuwaiti</option>
                                        <option value="Kyrgyz">Kyrgyz</option>
                                        <option value="Laotian">Laotian</option>
                                        <option value="Latvian">Latvian</option>
                                        <option value="Lebanese">Lebanese</option>
                                        <option value="Liberian">Liberian</option>
                                        <option value="Libyan">Libyan</option>
                                        <option value="Liechtensteiner">Liechtensteiner</option>
                                        <option value="Lithuanian">Lithuanian</option>
                                        <option value="Luxembourger">Luxembourger</option>
                                        <option value="Malagasy">Malagasy</option>
                                        <option value="Malawian">Malawian</option>
                                        <option value="Malaysian">Malaysian</option>
                                        <option value="Maldivian">Maldivian</option>
                                        <option value="Malian">Malian</option>
                                        <option value="Maltese">Maltese</option>
                                        <option value="Marshallese">Marshallese</option>
                                        <option value="Mauritian">Mauritian</option>
                                        <option value="Mexican">Mexican</option>
                                        <option value="Micronesian">Micronesian</option>
                                        <option value="Moldovan">Moldovan</option>
                                        <option value="Monacan">Monacan</option>
                                        <option value="Mongolian">Mongolian</option>
                                        <option value="Montenegrin">Montenegrin</option>
                                        <option value="Moroccan">Moroccan</option>
                                        <option value="Mozambican">Mozambican</option>
                                        <option value="Namibian">Namibian</option>
                                        <option value="Nauruan">Nauruan</option>
                                        <option value="Nepalese">Nepalese</option>
                                        <option value="Nigerien">Nigerien</option>
                                        <option value="North Korean">North Korean</option>
                                        <option value="Northern Irish">Northern Irish</option>
                                        <option value="Norwegian">Norwegian</option>
                                        <option value="Omani">Omani</option>
                                        <option value="Pakistani">Pakistani</option>
                                        <option value="Palauan">Palauan</option>
                                        <option value="Panamanian">Panamanian</option>
                                        <option value="Papua New Guinean">Papua New Guinean</option>
                                        <option value="Paraguayan">Paraguayan</option>
                                        <option value="Peruvian">Peruvian</option>
                                        <option value="Polish">Polish</option>
                                        <option value="Portuguese">Portuguese</option>
                                        <option value="Qatari">Qatari</option>
                                        <option value="Romanian">Romanian</option>
                                        <option value="Russian">Russian</option>
                                        <option value="Rwandan">Rwandan</option>
                                        <option value="Saint Lucian">Saint Lucian</option>
                                        <option value="Saint Vincentian">Saint Vincentian</option>
                                        <option value="Samoan">Samoan</option>
                                        <option value="San Marinese">San Marinese</option>
                                        <option value="Sao Tomean">Sao Tomean</option>
                                        <option value="Saudi">Saudi</option>
                                        <option value="Senegalese">Senegalese</option>
                                        <option value="Serbian">Serbian</option>
                                        <option value="Seychellois">Seychellois</option>
                                        <option value="Sierra Leonean">Sierra Leonean</option>
                                        <option value="Singaporean">Singaporean</option>
                                        <option value="Slovak">Slovak</option>
                                        <option value="Slovenian">Slovenian</option>
                                        <option value="Somali">Somali</option>
                                        <option value="South African">South African</option>
                                        <option value="South Sudanese">South Sudanese</option>
                                        <option value="Spanish">Spanish</option>
                                        <option value="Sri Lankan">Sri Lankan</option>
                                        <option value="Sudanese">Sudanese</option>
                                        <option value="Surinamese">Surinamese</option>
                                        <option value="Swazi">Swazi</option>
                                        <option value="Swedish">Swedish</option>
                                        <option value="Swiss">Swiss</option>
                                        <option value="Syrian">Syrian</option>
                                        <option value="Taiwanese">Taiwanese</option>
                                        <option value="Tajik">Tajik</option>
                                        <option value="Tanzanian">Tanzanian</option>
                                        <option value="Thai">Thai</option>
                                        <option value="Togolese">Togolese</option>
                                        <option value="Tongan">Tongan</option>
                                        <option value="Trinidadian">Trinidadian</option>
                                        <option value="Tunisian">Tunisian</option>
                                        <option value="Turkish">Turkish</option>
                                        <option value="Turkmen">Turkmen</option>
                                        <option value="Tuvaluan">Tuvaluan</option>
                                        <option value="Ugandan">Ugandan</option>
                                        <option value="Ukrainian">Ukrainian</option>
                                        <option value="Uruguayan">Uruguayan</option>
                                        <option value="Uzbekistani">Uzbekistani</option>
                                        <option value="Vanuatuan">Vanuatuan</option>
                                        <option value="Venezuelan">Venezuelan</option>
                                        <option value="Vietnamese">Vietnamese</option>
                                        <option value="Yemeni">Yemeni</option>
                                        <option value="Zambian">Zambian</option>
                                        <option value="Zimbabwean">Zimbabwean</option>
                                    </select>

                                </div>
                            </div>

                        </div>
                    ))}
                    <div className="w-full text-end cursor-pointer" onClick={addPassenger} >+ Add Passenger</div>
                </div>

            </div>

        </div>
    )
}

export default BookingDetailsRight