import { MdDashboard } from "react-icons/md";
import axios from 'axios';
import { useEffect, useState } from "react";
import TicketEditModal from "./TicketEditModal";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

const MainSection = () => {
    const [tickets, setTickets] = useState([]); // State to store ticket data
    const [loading, setLoading] = useState(true); // State to manage loading
    const [page, setPage] = useState(1);
    const [selectedTicket, setSelectedTicket] = useState(null);
    const [open, setOpen] = useState(false);
    const [editTicket, setEditTicket] = useState();
    const handleOpen = (ticket) => {
        setEditTicket(ticket);
        setOpen(true);
        setSelectedTicket(null);
    }

    const handleEllipsisClick = (ticketId) => {
        setSelectedTicket(ticketId === selectedTicket ? null : ticketId);
    };


    const handleDeleteTicket = (ticketId) => {
        // Replace with your logic to delete the ticket (e.g., call an API to delete)
        if (window.confirm('Are you sure you want to delete this ticket?')) {
            alert(`Deleted ticket with ID: ${ticketId}`);
        }
    };

    // Fetch ticket data on component mount
    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get('http://localhost:8080/api/getTicketData/all', {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                });
                setTickets(response.data); // Set the fetched ticket data
                setLoading(false); // Stop loading
            } catch (error) {
                console.error('Error fetching ticket data:', error);
                setLoading(false);
            }
        };

        fetchTickets();
    }, []);

    // Render loading state or table
    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div className="p-8 flex-grow">
            <div className="flex justify-between">
                <div className="flex border bg-white p-8 items-center rounded-lg w-[20%] gap-2">
                    <span>
                        <img src="/images/tickets-svgrepo-com.svg" alt="" className="w-10" />
                    </span>
                    <span className=" font-semibold">
                        Total Tickets Booked
                    </span>
                </div>
                <div className="flex border bg-white p-8 items-center rounded-lg w-[20%] gap-2">
                    <span>
                        <img src="/images/tickets-svgrepo-com.svg" alt="" className="w-10" />
                    </span>
                    <span className=" font-semibold">
                        Total Tickets Booked
                    </span>
                </div>
                <div className="flex border bg-white p-8 items-center rounded-lg w-[20%] gap-2">
                    <span>
                        <img src="/images/tickets-svgrepo-com.svg" alt="" className="w-10" />
                    </span>
                    <span className=" font-semibold">
                        Total Tickets Booked
                    </span>
                </div>
                <div className="flex border bg-white p-8 items-center rounded-lg w-[20%] gap-2">
                    <span>
                        <img src="/images/tickets-svgrepo-com.svg" alt="" className="w-10" />
                    </span>
                    <span className=" font-semibold">
                        Total Tickets Booked
                    </span>
                </div>
            </div>

            <div className="flex flex-col bg-white border rounded-lg mt-10 p-8">
                <span className="font-semibold text-2xl mb-4">Recent Bookings</span>
                <table className="w-full border-collapse ">
                    <thead>
                        <tr className="border-b border-gray-200">
                            <th className="px-4 py-2 text-left">Txn ID</th>
                            <th className="px-4 py-2 text-left">Amount</th>
                            <th className="px-4 py-2 text-left">Email</th>
                            <th className="px-4 py-2 text-left">Status</th>
                            <th className="px-4 py-2 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tickets.slice((page - 1) * 10, page * 10).map((ticket, index) => (
                            <tr key={ticket._id} className={(index + 1) % 2 === 0 ? 'even:bg-gray-100' : ''}>
                                <td className="px-4 py-2">{ticket.txnid}</td>
                                <td className="px-4 py-2">{ticket.amount}</td>
                                <td className="px-4 py-2">{ticket.email}</td>
                                <td
                                    className={`px-4 py-2 text-white ${ticket?.status === 'pending'
                                        ? 'text-yellow-500'
                                        : ticket?.status === 'paid'
                                            ? 'text-green-500'
                                            : ticket?.status === 'failed'
                                                ? 'text-red-500'
                                                : ''
                                        }`}
                                >{ticket.status.charAt(0).toUpperCase() + ticket.status.slice(1)}</td>
                                <td className="px-4 py-2 text-right">
                                    <button className="text-gray-500 hover:text-black" onClick={() => handleEllipsisClick(ticket._id)}>&#x22EF;</button>
                                    {selectedTicket === ticket._id && (
                                        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg z-10">
                                            {/* Edit Ticket Option */}
                                            <button
                                                className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                                                onClick={() => handleOpen(ticket)}
                                            >
                                                Edit Ticket
                                            </button>

                                            {/* Delete Ticket Option */}
                                            <button
                                                className="block w-full px-4 py-2 text-left text-red-500 hover:bg-gray-100"
                                                onClick={() => handleDeleteTicket(ticket._id)}
                                            >
                                                Delete Ticket
                                            </button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-end">
                <ButtonGroup
                    variant="contained">
                    <Button onClick={()=>setPage((page)=>page-1)}>&lt;</Button>
                    <Button onClick={()=>setPage((page)=>page+1)}>&gt;</Button>
                </ButtonGroup>
            </div>

            <TicketEditModal open={open} handleOpen={handleOpen} setOpen={setOpen} editTicket={editTicket} />
        </div>
    )
}

export default MainSection;

