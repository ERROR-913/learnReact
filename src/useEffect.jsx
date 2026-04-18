import { useState, useEffect } from "react";

function UseEffectComponent() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {users.map(user => (
        <p key={user.id}>{user.name}, Email: {user.email}</p>
      ))}
    </div>
  );
}
export default UseEffectComponent;