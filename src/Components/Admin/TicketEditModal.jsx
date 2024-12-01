import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import axios from "axios";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: '50%',
    bgcolor: 'background.paper',
    borderRadius: '8px',
    boxShadow: 24,
    p: 4,
};

const TicketEditModal = ({ open, handleOpen, setOpen, editTicket }) => {
    const [passengerDetails, setPassengerDetails] = useState([]);

    useEffect(() => {
        if (editTicket?.passengers) {
            setPassengerDetails(editTicket.passengers);
        }
    }, [editTicket]);

    const handleClose = () => setOpen(false);

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const updatedPassengers = [...passengerDetails];
        updatedPassengers[index][name] = value;
        setPassengerDetails(updatedPassengers);
    };

    const handleSave = async() => {
        console.log(editTicket);
        console.log('Updated Passenger Details:', passengerDetails);
        handleClose();
        try {
            const token = localStorage.getItem("token");
            const response = await axios.post(`http://localhost:8080/api/updatepassengers/${editTicket._id}`, passengerDetails, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            } // Sending passengers data in the request body
            );
    
            console.log("Passenger details updated successfully:", response.data);
        } catch (error) {
            if (error.response) {
                // Server responded with a status other than 2xx
                console.error("Error response:", error.response.data);
            } else if (error.request) {
                // Request was made, but no response received
                console.error("Error request:", error.request);
            } else {
                // Something happened in setting up the request
                console.error("Error message:", error.message);
            }
        }
    };

    const handleRedirect = ()=>{

    }

    return (
        <div>
            {/* Modal with Ticket Details */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
                        Edit Ticket Details
                    </Typography>

                    {/* Passengers Information in Editable Table Format */}
                    <div className="passengers-section">
                        <Typography variant="h6" sx={{ mt: 3 }}>
                            Passengers:
                        </Typography>
                        <table className="w-full mt-4 table-auto">
                            <thead>
                                <tr className={'bg-gray-300'}>
                                    <th className="px-4 py-2 text-left">Title</th>
                                    <th className="px-4 py-2 text-left">First Name</th>
                                    <th className="px-4 py-2 text-left">Last Name</th>
                                    <th className="px-4 py-2 text-left">Date of Birth</th>
                                    <th className="px-4 py-2 text-left">Nationality</th>
                                </tr>
                            </thead>
                            <tbody>
                                {passengerDetails.map((passenger, index) => (
                                    <tr key={index} className="bg-white mt-6">
                                        <td>
                                            <input
                                                className="px-4 py-2"
                                                name="title"
                                                value={passenger.title}
                                                onChange={(e) => handleInputChange(index, e)}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                className="px-4 py-2"
                                                name="firstName"
                                                value={passenger.firstName}
                                                onChange={(e) => handleInputChange(index, e)}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                className="px-4 py-2"
                                                name="lastName"
                                                value={passenger.lastName}
                                                onChange={(e) => handleInputChange(index, e)}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                className="px-4 py-2"
                                                name="dob"
                                                type="date"
                                                value={new Date(passenger.dob).toISOString().split('T')[0]}
                                                onChange={(e) => handleInputChange(index, e)}
                                            />
                                        </td>
                                        <td>
                                            <select className="dropdown border rounded-md p-3"
                                                name="nationality"
                                                value={passenger.nationality}
                                                onChange={(e) => handleInputChange(index, e)}>
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
                                                <option value="Indian">Indian</option>
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
                                                {/* Add other options as needed */}
                                            </select>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Traveling Details */}
                    <div className="traveling-details mt-10">
                        <div className='flex items-center gap-5'>
                            <span><img src="/images/departureplane.svg" alt="" className='w-10' /></span>: {editTicket?.travellingDetails?.from}
                        </div>
                        <div className='flex items-center gap-5'>
                            <span><img src="/images/arrivalplane.svg" alt="" className='w-10' /></span>: {editTicket?.travellingDetails?.to}
                        </div>
                        <Typography variant="body1" className="info-row">
                            <strong>Departure Date:</strong> {new Date(editTicket?.travellingDetails?.departureDate).toLocaleDateString()}
                        </Typography>
                        <Typography variant="body1" className="info-row">
                            <strong>Return Date:</strong> {editTicket?.travellingDetails?.returnDate ? new Date(editTicket?.travellingDetails?.returnDate).toLocaleDateString() : 'N/A'}
                        </Typography>
                        <Typography variant="body1" className="info-row">
                            <strong>Trip Type:</strong> {editTicket?.travellingDetails?.tripType}
                        </Typography>
                    </div>

                    {/* Actions */}
                    <div className="modal-actions" style={{ marginTop: '20px' }}>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={handleSave}
                            style={{ marginRight: '10px' }}
                        >
                            Save Changes
                        </Button>
                        <Button variant="outlined" >
                            <a href={`http://localhost:3000/downloadTicket?txnId=${editTicket?.txnid}`} className="download-button">Download PDF</a>
                        </Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default TicketEditModal;
