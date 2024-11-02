// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
// import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// // Create styles for the PDF document
// const styles = StyleSheet.create({
//   page: {
//     padding: 20,
//     fontFamily: 'Helvetica',
//   },
//   title: {
//     fontSize: 24,
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   section: {
//     marginBottom: 10,
//     fontSize: 16,
//   },
//   label: {
//     fontWeight: 'bold',
//   },
// });

// const DownloadTicketPage = () => {
//   const location = useLocation();
//   const [ticketData, setTicketData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Extract the txnId from the URL
//   const params = new URLSearchParams(location.search);
//   const txnId = params.get('txnId');

//   // Fetch the ticket data from the backend using the txnId
//   useEffect(() => {
//     const fetchTicketData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8080/api/getTicketData?txnid=${txnId}`);
//         setTicketData(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching ticket data:', error);
//         setLoading(false);
//       }
//     };

//     fetchTicketData();
//   }, [txnId]);

//   // If still loading data, display a loading message
//   if (loading) {
//     return <Text>Loading ticket data...</Text>;
//   }

//   // If no data found, display an error message
//   if (!ticketData) {
//     return <Text>No ticket found for transaction ID: {txnId}</Text>;
//   }

//   // Return the PDF document structure with the ticket data
//   return (
//     <Document>
//       <Page style={styles.page}>
//         <Text style={styles.title}>Booking Ticket</Text>

//         <View style={styles.section}>
//           <Text style={styles.label}>Transaction ID:</Text>
//           <Text>{ticketData.txnId}</Text>
//         </View>

//         <View style={styles.section}>
//           <Text style={styles.label}>Name:</Text>
//           <Text>{ticketData.firstname} {ticketData.lastname}</Text>
//         </View>

//         <View style={styles.section}>
//           <Text style={styles.label}>Amount:</Text>
//           <Text>{ticketData.amount}</Text>
//         </View>

//         <View style={styles.section}>
//           <Text style={styles.label}>Payment Status:</Text>
//           <Text>{ticketData.status}</Text>
//         </View>

//         <View style={styles.section}>
//           <Text style={styles.label}>Passengers:</Text>
//           {ticketData.passengers.map((passenger, index) => (
//             <Text key={index}>
//               {passenger.title} {passenger.firstName} {passenger.lastName}, DOB: {passenger.dob}
//             </Text>
//           ))}
//         </View>

//         <View style={styles.section}>
//           <Text style={styles.label}>Travel Details:</Text>
//           <Text>From: {ticketData.travellingDetails.from}</Text>
//           <Text>To: {ticketData.travellingDetails.to}</Text>
//           <Text>Departure: {ticketData.travellingDetails.departureDate}</Text>
//           {ticketData.travellingDetails.returnDate && (
//             <Text>Return: {ticketData.travellingDetails.returnDate}</Text>
//           )}
//           <Text>Trip Type: {ticketData.travellingDetails.tripType}</Text>
//         </View>
//       </Page>
//     </Document>
//   );
// };

// export default DownloadTicketPage;

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';

// Create styles for the PDF document
const styles = StyleSheet.create({
    page: {
        padding: 20,
        fontFamily: 'Helvetica',
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 20,
    },
    section: {
        marginBottom: 10,
        fontSize: 16,
    },
    label: {
        fontWeight: 'bold',
    },
    termsTitle: {
        color: "green",
        fontSize: 30,
        marginBottom: 20
    },
    termSection: {
        marginBottom: 30,
        fontSize: 16,
    },
    termHeading: {
        fontWeight: "bold"
    },
    footer:{
        marginTop:20,
        textAlign:"center"
    },
    hr: {
        marginTop:10,
        borderBottomColor: '#ccc', // color for the horizontal line
        borderBottomWidth: 1,      // thickness of the horizontal line
        marginVertical: 10,        // space around the line
    },
});

const TicketDocument = ({ ticketData }) => (
    <Document>
        {/* First Page with ticket details */}
        <Page style={styles.page}>

            <Text style={styles.title}>Booking Ticket</Text>

            <View style={styles.section}>
                <Text style={styles.label}>Transaction ID:</Text>
                <Text>{ticketData.txnid}</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.label}>Name:</Text>
                <Text>{ticketData.firstname} {ticketData.lastname}</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.label}>Amount:</Text>
                <Text>{ticketData.amount}</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.label}>Payment Status:</Text>
                <Text>{ticketData.status}</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.label}>Passengers:</Text>
                {ticketData.passengers.map((passenger, index) => (
                    <Text key={index}>
                        {passenger.title} {passenger.firstName} {passenger.lastName}, DOB: {passenger.dob}
                    </Text>
                ))}
            </View>

            <View style={styles.section}>
                <Text style={styles.label}>Travel Details:</Text>
                <Text>From: {ticketData.travellingDetails.from}</Text>
                <Text>To: {ticketData.travellingDetails.to}</Text>
                <Text>Departure: {ticketData.travellingDetails.departureDate}</Text>
                {ticketData.travellingDetails.returnDate && (
                    <Text>Return: {ticketData.travellingDetails.returnDate}</Text>
                )}
                <Text>Trip Type: {ticketData.travellingDetails.tripType}</Text>
            </View>
        </Page>

        {/* Second Page with Terms & Conditions */}
        <Page style={styles.page}>
            <Text style={styles.termsTitle}>Terms & Conditions</Text>

            <View style={styles.termSection}>
                <Text >

                    <Text style={styles.termHeading}>Purpose of the Dummy Tickets</Text>: The Dummy Ticket you get from Travanya can only be used to
                    demonstrate that you intend to apply for a visa. We do not represent at any point in time that the Dummy
                    Tickets issued by Travanya fulfill the required criterion for a visa application or that you will necessarily
                    secure a Visa by using the Dummy Ticket. The Dummy Tickets issued by Travanya cannot be used for
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
                    Possible Delays: While Travanya tries its best to give you the Dummy Ticket upon successful booking
                    within the committed time, there might be delays due to technical glitches, technical errors/issues, or
                    other reasons. We do not accept any responsibility for any failure in bookings, payment gateway failures,
                    or for all/any reasons that are beyond our control.
                </Text>
            </View>

            <View style={styles.termSection}>
                <Text style={styles.termsText}>
                    Acceptance of Dummy Ticket: Travanya cannot guarantee that the Dummy Ticket will be accepted by
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
            <View style={styles.hr} />
            <View style={styles.footer}>
                <Text style={styles.termsText}>Thank you for choosing TripCafe for your dummy flight ticket</Text>
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
                const response = await axios.get(`http://localhost:8080/api/getTicketData?txnid=${txnId}`);
                setTicketData(response.data);
                setLoading(false);
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
    if (!ticketData) {
        return <Text>No ticket found for transaction ID: {txnId}</Text>;
    }

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
                <TicketDocument ticketData={ticketData} />
            </PDFViewer>

        </div>
    );
};

export default DownloadTicketPage;
