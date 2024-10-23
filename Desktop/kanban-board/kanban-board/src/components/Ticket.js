import React from 'react';

const Ticket = ({ ticket }) => {
  const { id, title, tag, userId, status, priority } = ticket;
  const priorityNames = ['No priority', 'Low', 'Medium', 'High', 'Urgent'];

  return (
    <div className="ticket">
      <div className="ticket-header">
        <h3>{title}</h3>
        <span>{priorityNames[priority]}</span>
      </div>
      <div className="ticket-body">
        <p>{id}</p>
        <p>{tag.join(', ')}</p>
        <p>{status}</p>
      </div>
      <div className="ticket-footer">
        <p>Assigned to: {userId}</p>
      </div>
    </div>
  );
};

export default Ticket;
