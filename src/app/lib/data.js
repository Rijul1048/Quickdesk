export let tickets = [
  {
    id: 1,
    subject: "Laptop won't turn on",
    description: "My work laptop suddenly stopped working",
    category: "IT",
    status: "open",
    comments: [
      {
        id: 1,
        text: "Have you tried charging it?",
        author: "Support Agent",
        createdAt: new Date('2023-05-15T10:30:00')
      }
    ],
    createdAt: new Date('2023-05-15T09:15:00'),
    updatedAt: new Date('2023-05-15T10:30:00')
  },
  {
    id: 2,
    subject: "Need access to HR portal",
    description: "I can't access the employee benefits portal",
    category: "HR",
    status: "in-progress",
    comments: [],
    createdAt: new Date('2023-05-16T11:20:00'),
    updatedAt: new Date('2023-05-16T11:20:00')
  }
];

export let categories = ["IT", "HR", "Finance", "Facilities"];

// Helper functions
export const addTicket = (ticket) => {
  const newTicket = {
    ...ticket,
    id: tickets.length + 1,
    status: "open",
    comments: [],
    createdAt: new Date(),
    updatedAt: new Date()
  };
  tickets.push(newTicket);
  return newTicket;
};

export const updateTicketStatus = (id, status) => {
  const ticket = tickets.find(t => t.id === id);
  if (ticket) {
    ticket.status = status;
    ticket.updatedAt = new Date();
  }
};