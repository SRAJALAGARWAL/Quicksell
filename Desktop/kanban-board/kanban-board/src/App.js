import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Board from './components/Board';
import './styles.css';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [groupBy, setGroupBy] = useState('status');
  const [sortBy, setSortBy] = useState('priority');

  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => response.json())
      .then(data => setTickets(data.tickets))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const saveViewState = () => {
    localStorage.setItem('viewState', JSON.stringify({ groupBy, sortBy }));
  };

  const loadViewState = () => {
    const savedState = JSON.parse(localStorage.getItem('viewState'));
    if (savedState) {
      setGroupBy(savedState.groupBy);
      setSortBy(savedState.sortBy);
    }
  };

  useEffect(() => {
    loadViewState();
  }, []);

  useEffect(() => {
    saveViewState();
  }, [groupBy, sortBy]);

  return (
    <div className="App">
      <Header setGroupBy={setGroupBy} setSortBy={setSortBy} />
      <Board tickets={tickets} groupBy={groupBy} sortBy={sortBy} />
    </div>
  );
};

export default App;
