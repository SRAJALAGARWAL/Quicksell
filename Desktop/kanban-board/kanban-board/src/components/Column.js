import React from 'react';
import Ticket from './Ticket';

const Column = ({ name, tickets }) => {
  const priorityNames = ['No priority', 'Low', 'Medium', 'High', 'Urgent'];

  return (
    <div className="column">
      <h2>{priorityNames[name] || name}</h2>
      {tickets.map(ticket => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default Column;
