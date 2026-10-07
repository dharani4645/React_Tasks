import { useState } from "react";

function UserDetails() {
  const [user, setUser] = useState({
    name: "",
    age: ""
  });

  function handleNameChange(event) {
    setUser({
      ...user,
      name: event.target.value
    });
  }

  function handleAgeChange(event) {
    setUser({
      ...user,
      age: event.target.value
    });
  }

  return (
    <div>
      <input
        value={user.name}
        onChange={handleNameChange}
        placeholder="Enter name"
      />

      <input
        value={user.age}
        onChange={handleAgeChange}
        placeholder="Enter age"
        type="number"
      />

      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}

export default UserDetails;