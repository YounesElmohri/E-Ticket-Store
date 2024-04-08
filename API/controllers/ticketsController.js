

const getTickets = (req, res) => {
    res.json({ message: 'Your all tickets' });
} 

const getTicket = (req, res) => {
    res.json({ message: 'Your ticket' });
}

const createTicket = (req, res) => {
    res.json({ message: 'Your ticket is created successfully' });
}

const updateTicket = (req, res) => {
    res.json({ message: 'Your ticket is updated successfully' });
}

const deleteTicket = (req, res) => {
    res.json({ message: 'Your ticket is deleted successfully' });
}

module.exports = { getTickets, getTicket, createTicket, updateTicket, deleteTicket };


