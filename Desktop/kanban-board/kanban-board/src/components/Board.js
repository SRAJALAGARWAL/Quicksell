import React from 'react';
import Column from './Column';

const Board = ({ tickets, groupBy, sortBy }) => {
  const groupTickets = () => {
    const grouped = {};

    if (groupBy === 'status') {
      tickets.forEach(ticket => {
        if (!grouped[ticket.status]) {
          grouped[ticket.status] = [];
        }
        grouped[ticket.status].push(ticket);
      });
    } else if (groupBy === 'user') {
      tickets.forEach(ticket => {
        if (!grouped[ticket.userId]) {
          grouped[ticket.userId] = [];
        }
        grouped[ticket.userId].push(ticket);
      });
    } else if (groupBy === 'priority') {
      tickets.forEach(ticket => {
        if (!grouped[ticket.priority]) {
          grouped[ticket.priority] = [];
        }
        grouped[ticket.priority].push(ticket);
      });
    }

    Object.keys(grouped).forEach(key => {
      grouped[key].sort((a, b) => {
        if (sortBy === 'priority') {
          return b.priority - a.priority;
        } else if (sortBy === 'title') {
          return a.title.localeCompare(b.title);
        }
        return 0;
      });
    });

    return grouped;
  };

  const groupedTickets = groupTickets();

  return (
    <div className="board">
      {Object.keys(groupedTickets).map(key => (
        <Column key={key} name={key} tickets={groupedTickets[key]} />
      ))}
    </div>
  );
};

export default Board;
