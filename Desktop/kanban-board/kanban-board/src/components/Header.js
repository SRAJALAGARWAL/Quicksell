import React from 'react';

const Header = ({ setGroupBy, setSortBy }) => {
  return (
    <header>
      <button onClick={() => setGroupBy('status')}>Group by Status</button>
      <button onClick={() => setGroupBy('user')}>Group by User</button>
      <button onClick={() => setGroupBy('priority')}>Group by Priority</button>
      <button onClick={() => setSortBy('priority')}>Sort by Priority</button>
      <button onClick={() => setSortBy('title')}>Sort by Title</button>
    </header>
  );
};

export default Header;
