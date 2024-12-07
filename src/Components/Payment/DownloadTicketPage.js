import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
//import tripCafelogo from 'http://localhost:3000/images/trip-cafe.jpg';

import axios from 'axios';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, PDFViewer, Image, } from '@react-pdf/renderer';

// Create styles for the PDF document
const styles = StyleSheet.create({
    page: {
        padding: 20,
        fontFamily: 'Helvetica',
    },
    title: { flexDirection: "row", alignItems: "center", marginBottom: 20, width: '100%', borderBottom: '2px solid #333', paddingBottom: '10px', display: 'inline-block' },
    logo: { width: '154px', },
    headRight: { width: '400px', },
    headtextg: { width: '100%', padding: '5px 0', textAlign: 'right', fontWeight: 'bold', color: 'green', fontSize: 10, },
    headtextp: { width: '100%', padding: '5px 0', textAlign: 'right', fontWeight: '400', color: 'black', fontSize: 10, },
    booknoLabel: { fontWeight: 'bold', fontSize: 10, },
    bookno: { fontWeight: 'bold', fontSize: 20, textTransform: 'uppercase' },
    booknocontentA: { fontWeight: '400', fontSize: 11, paddingTop: '40px', paddingBottom: '10px' },
    booknocontentb: { fontWeight: '400', fontSize: 11, paddingBottom: '40px' },
    flightLabel: { fontWeight: 'bold', fontSize: 11, },
    flightDetail: { flexDirection: "row", alignItems: "center", marginBottom: 20, width: '100%', marginBottom: '50px' },
    flightlog: { width: '60px', marginRight: '50px' },
    flightlogs: { textAlign: 'center' },
    flightnadetName: { fontWeight: 'bold', fontSize: 9, width: '100%', marginBottom: '5px', textAlign: 'left' },
    flightnadet: { fontWeight: 'bold', fontSize: 8, width: '100%', textAlign: 'left' },
    flightTimeDate: { width: '100px', marginRight: '60px' },
    flightNo: { fontWeight: '800', fontSize: 19, width: '100%', },
    flightDate: { fontWeight: 'bold', fontSize: 14, width: '100%', },
    flightloc: { fontWeight: 'bold', fontSize: 9, width: '100%', textAlign: 'left' },
    flighthour: { width: '90px', textAlign: 'center' },
    flighticon: { width: '100%', textAlign: 'center' },
    flighttime: { fontWeight: 'bold', fontSize: 8, width: '100%', textAlign: 'left', width: '100%', textAlign: 'center' },
    flightTimeDateb: { width: '100px', marginLeft: '60px' },
    flightNob: { fontWeight: '800', fontSize: 19, width: '100%', },
    flightDateb: { fontWeight: 'bold', fontSize: 14, width: '100%', },
    flightlocb: { fontWeight: 'bold', fontSize: 9, width: '100%', textAlign: 'left' },
    pdetailtable: { marginBottom: 20, width: '100%', marginBottom: '20px' },
    pdetailtableHead: { flexDirection: "row", alignItems: "center", width: '100%', borderBottom: '1px solid #333', paddingBottom: '5px', marginBottom: '5px' },
    pdetailtableHeadName: { width: '208px', fontWeight: 'bold', fontSize: '9', textTransform: 'uprecase' },
    pdetailtableHeadPNR: { width: '150px', fontWeight: 'bold', fontSize: '9', textTransform: 'uprecase' },
    pdetailtableHeadTNo: { width: '150px', fontWeight: 'bold', fontSize: '9', textTransform: 'uprecase' },
    pdetailtableHeadSeat: { width: '150px', fontWeight: 'bold', fontSize: '9', textTransform: 'uprecase' },

    pdetailtablebody: { flexDirection: "row", alignItems: "center", width: '100%', paddingBottom: '5px' },
    pdetailtablebodySno: { width: '8px', fontWeight: 'bold', fontSize: '9', },
    pdetailtablebodyName: { width: '200px', fontWeight: 'bold', fontSize: '9', },
    pdetailtablebodyPNR: { width: '150px', fontWeight: 'bold', fontSize: '9', },
    pdetailtablebodyTNo: { width: '150px', fontWeight: 'bold', fontSize: '9', },
    pdetailtablebodySeat: { width: '150px', fontWeight: 'bold', fontSize: '9', },


    section: { marginBottom: 10, fontSize: 16, },
    label: { fontWeight: 'bold', },
    termsTitle: { color: "black", fontSize: 30, marginBottom: 20 },
    termSection: { marginBottom: 20, fontSize: 13, lineHeight: 1.3, textAlign: 'justify', color: '#333' },
    termHeading: { fontWeight: "600", color: '#000' },
    footer: { marginTop: 20, textAlign: "center", fontSize: 12, lineHeight: 1.5, fontWeight: 'black' },
    hr: {
        marginTop: 0,
        marginBottom: 20,
        borderBottomColor: '#ccc', // color for the horizontal line
        borderBottomWidth: 1,      // thickness of the horizontal line
        marginVertical: 30,        // space around the line
    },
    hrfoot: {
        marginTop: 0,
        marginBottom: 20,
        borderBottomColor: '#ccc', // color for the horizontal line
        borderBottomWidth: 1,      // thickness of the horizontal line
        marginVertical: 15,        // space around the line
    },
});

const TicketDocument = ({ ticketData }) => (

    <Document>
        {/* First Page with ticket details */}
        <Page style={styles.page}>

            <View style={styles.title}>
                <View style={styles.logo}><Image src='images/trip-cafe.jpg' alt='' /></View>
                <View style={styles.headRight}>

                    <Text style={styles.headtextg}>Booking Confirmed</Text>
                    <Text style={styles.headtextp}><Text style={styles.label}>Ticketing Date:</Text> 04/11/2024 | <Text style={styles.label}>Ticketing Time:</Text> 11:18:35 IST</Text>
                    <Text style={styles.headtextp}><Text style={styles.label}>PNR:</Text> XXXXXX </Text>

                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.booknoLabel}>BOOKING ID:</Text>
                <Text style={styles.bookno}>{ticketData?.
                    referenceNumber}</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.booknocontentA} >Hi Anand,</Text>
                <Text style={styles.booknocontentb} >Your flight ticket for New Delhi-Dubai is confirmed. Your tickets are attached along with the email. Your Booking
                    reference no. is 1205</Text>

            </View>
            <View style={styles.section}>
                <Text style={styles.flightLabel}>{ticketData?.travellingDetails.from} To {ticketData?.travellingDetails.to}</Text>
            </View>
            <View style={styles.flightDetail}>
                <View style={styles.flightlog}>
                    <Image src='images/AIC.png' alt='' />
                    <Text style={styles.flightnadetName}>Air India</Text>
                    <Text style={styles.flightnadet}>AI-409</Text>
                    <Text style={styles.flightnadet}>ECONOMY</Text>
                </View>

                <View style={styles.flightTimeDate}>
                    <Text style={styles.flightnadetName}>{ticketData?.travellingDetails.from}</Text>
                    <Text style={styles.flightNo}>DEL 10:35</Text>
                    <Text style={styles.flightDate}>FRI, 18 JUN ‘21</Text>
                    <Text style={styles.flightloc}>Indira Gandhi Intl Airport Terminal 3</Text>
                </View>
                <View style={styles.flighthour}>
                    <Text style={styles.flighticon}><Image src='images/airplane.png' alt='' /></Text>
                    <Text style={styles.flighttime}>1h 35m</Text>
                </View>

                <View style={styles.flightTimeDateb}>
                    <Text style={styles.flightnadetName}>{ticketData?.travellingDetails.to}</Text>
                    <Text style={styles.flightNob}>PAT 12:10</Text>
                    <Text style={styles.flightDateb}>FRI, 18 JUN ‘21</Text>
                    <Text style={styles.flightlocb}>Lok Nayak Jaya Prakash
                        Narayan Airport </Text>
                </View>
            </View>
            <View style={styles.pdetailtable}>
                <View style={styles.pdetailtableHead}>
                    <Text style={styles.pdetailtableHeadName}>PASSENGER NAME</Text>
                    <Text style={styles.pdetailtableHeadPNR}>PNR</Text>
                    <Text style={styles.pdetailtableHeadTNo}>E-TICKET NO</Text>
                </View>
                <View style={styles.pdetailtablebody}>
                    <Text style={styles.pdetailtablebodySno}>1.</Text>
                    <Text style={styles.pdetailtablebodyName}>{ticketData?.passengers[0].title} {ticketData?.passengers[0].firstName}</Text>
                    <Text style={styles.pdetailtablebodyPNR}>YQB5J </Text>
                    <Text style={styles.pdetailtablebodyTNo}>0984722231949</Text>
                </View>
            </View>
            {
                ticketData?.travellingDetails.tripType !== "one Way" &&
                (
                    <>
                        <View style={styles.hr}></View>
                        <View style={styles.section}>
                            <Text style={styles.flightLabel}>Patna to New Delhi </Text>
                        </View>
                        <View style={styles.flightDetail}>
                            <View style={styles.flightlog}>
                                <Image src='images/AIC.png' alt='' />
                                <Text style={styles.flightnadetName}>Air India</Text>
                                <Text style={styles.flightnadet}>AI-409</Text>
                                <Text style={styles.flightnadet}>ECONOMY</Text>
                            </View>

                            <View style={styles.flightTimeDate}>
                                <Text style={styles.flightnadetName}>Patna </Text>
                                <Text style={styles.flightNo}>PAT 12:10 </Text>
                                <Text style={styles.flightDate}>FRI, 18 JUN ‘21</Text>
                                <Text style={styles.flightloc}>Lok Nayak Jaya Prakash
                                    Narayan Airport </Text>
                            </View>
                            <View style={styles.flighthour}>
                                <Text style={styles.flighticon}><Image src='images/airplane.png' alt='' /></Text>
                                <Text style={styles.flighttime}>1h 35m</Text>
                            </View>

                            <View style={styles.flightTimeDateb}>
                                <Text style={styles.flightnadetName} New Delhi></Text>
                                <Text style={styles.flightNob}>DEL 10:35</Text>
                                <Text style={styles.flightDateb}>FRI, 18 JUN ‘21</Text>
                                <Text style={styles.flightlocb}>Indira Gandhi Intl Airport Terminal 3</Text>
                            </View>
                        </View>
                        <View style={styles.pdetailtable}>
                            <View style={styles.pdetailtableHead}>
                                <Text style={styles.pdetailtableHeadName}>PASSENGER NAME</Text>
                                <Text style={styles.pdetailtableHeadPNR}>PNR</Text>
                                <Text style={styles.pdetailtableHeadTNo}>E-TICKET NO</Text>
                                <Text style={styles.pdetailtableHeadSeat}>SEAT</Text>
                            </View>
                            <View style={styles.pdetailtablebody}>
                                <Text style={styles.pdetailtablebodySno}>1.</Text>
                                <Text style={styles.pdetailtablebodyName}>Mr. Anand Kumar Singh, Adult</Text>
                                <Text style={styles.pdetailtablebodyPNR}>YQB5J </Text>
                                <Text style={styles.pdetailtablebodyTNo}>0984722231949</Text>
                                <Text style={styles.pdetailtablebodySeat}>Windo Seat</Text>
                            </View>
                        </View>
                    </>
                )
            }

        </Page>

        {/* Second Page with Terms & Conditions */}
        <Page style={styles.page}>
            <Text style={styles.termsTitle}>Terms & Conditions</Text>

            <View style={styles.termSection}>
                <Text >

                    <Text style={styles.termHeading}>Purpose of the Dummy Tickets</Text>: The Dummy Ticket you get from TripCafeHolidays.com can only be used to
                    demonstrate that you intend to apply for a visa. We do not represent at any point in time that the Dummy
                    Tickets issued by TripCafeHolidays.com fulfill the required criterion for a visa application or that you will necessarily
                    secure a Visa by using the Dummy Ticket. The Dummy Tickets issued by TripCafeHolidays.com cannot be used for
                    your actual travel or to go on a flight trip and can be neither presented as valid tickets at the airport for air
                    travel. By using our Website and booking a Dummy Ticket you explicitly acknowledge and comprehend
                    the distinction between a Dummy Ticket and a confirmed ticket.
                </Text>
            </View>

            <View style={styles.termSection}>
                <Text style={styles.termsText}>
                    Provide Correct Information: When you book a Dummy Ticket, you shall make sure to give the correct
                    details like your name, passport information, and travel dates. The details provided by you to us at the
                    time of booking Dummy Tickets should match with the information mentioned in your visa application.
                </Text>
            </View>

            <View style={styles.termSection}>
                <Text style={styles.termsText}>
                    Possible Delays: While TripCafeHolidays.com tries its best to give you the Dummy Ticket upon successful booking
                    within the committed time, there might be delays due to technical glitches, technical errors/issues, or
                    other reasons. We do not accept any responsibility for any failure in bookings, payment gateway failures,
                    or for all/any reasons that are beyond our control.
                </Text>
            </View>

            <View style={styles.termSection}>
                <Text style={styles.termsText}>
                    Acceptance of Dummy Ticket: TripCafeHolidays.com cannot guarantee that the Dummy Ticket will be accepted by
                    any authority or embassy. It's the user's responsibility to check the visa application requirements.
                </Text>
            </View>

            <View style={styles.termSection}>
                <Text style={styles.termsText}>
                    Dummy Ticket is not for Actual Travel: Even though the Dummy Ticket may look real, remember it's
                    not for actual travel or bookings. Avoid showing it to airlines, immigration officers, or anyone else involved
                    in travel matters.
                </Text>
            </View>
            <View style={styles.hrfoot} />
            <View style={styles.footer}>
                <Text style={styles.termsText}>Thank you for choosing TripCafeHolidays.com for your dummy flight ticket</Text>
            </View>
        </Page>
    </Document>
);

const DownloadTicketPage = () => {
    const location = useLocation();
    const [ticketData, setTicketData] = useState(null);
    const [loading, setLoading] = useState(true);

    // Extract the txnId from the URL
    const params = new URLSearchParams(location.search);
    const txnId = params.get('txnId');

    // Fetch the ticket data from the backend using the txnId
    useEffect(() => {
        const fetchTicketData = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get(`http://localhost:8080/api/getTicketData?txnid=${txnId}`, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                });
                setTicketData(response.data);
                setLoading(false);
                console.log(ticketData);
            } catch (error) {
                console.error('Error fetching ticket data:', error);
                setLoading(false);
            }
        };

        fetchTicketData();
    }, [txnId]);

    // If still loading data, display a loading message
    if (loading) {
        return <Text>Loading ticket data...</Text>;
    }

    // If no data found, display an error message
    // if (!ticketData) {
    //     return <Text>No ticket found for transaction ID: {txnId}</Text>;
    // }

    // Provide a download link for the PDF document
    return (
        <div>
            <h1>Download Your Ticket</h1>
            {/* <PDFDownloadLink
        document={<TicketDocument ticketData={ticketData} />}
        fileName={`ticket_${txnId}.pdf`}
      >
        {({ loading }) => (loading ? 'Generating PDF...' : 'Download Ticket PDF')}
      </PDFDownloadLink> */}
            <PDFViewer style={{ width: '100%', height: '100vh' }}>
                {/* <TicketDocument ticketData={ticketData} /> */}
                <TicketDocument />
            </PDFViewer>

        </div>
    );
};

export default DownloadTicketPage;
