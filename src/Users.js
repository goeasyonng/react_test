import { useState, useEffect } from "react";

function Users() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((r) => r.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
    // console.log(data);
    // console.log("API CALL");
  }, []);

  // console.log("UI");

  return (
    <div>
      <h1>User List</h1>
      {loading ? "loading" : "로딩완료"}
      {users.map((item) => {
        return (
          <User
            key={item.id}
            name={item.name}
            username={item.username}
            email={item.email}
          />
        );
      })}
      console.log(item);
    </div>
  );
}

const User = ({ name, username, email }) => {
  return (
    <div>
      <li>
        {name}, {email}, {username}
      </li>
    </div>
  );
};
export default Users;
