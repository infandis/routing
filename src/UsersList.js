import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div >
      <h2>Список користувачів</h2>
      <ul style={{listStyle: 'none', display: 'flex', justifyContent: 'space-around'}}>
        {users.map((user) => (
          <li key={user.id} style={{padding: '20px'}}>
            {user.name}
            <Link to={`/albums/${user.id}`}>
              <button style={{padding: '10px', margin: '10px'}}>Album</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
