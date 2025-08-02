export let tickets = [
  {
    id: 1,
    subject: "Laptop won't turn on",
    description: "My work laptop suddenly stopped working. It doesn't respond when I press the power button.",
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
  // Add more sample tickets...
];

export let categories = ["IT", "HR", "Finance", "Facilities"];