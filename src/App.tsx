import React, { useState, FC } from "react";
import "./App.css";
import User from "./components/User";

const App: FC = () => {
  const [users, setOption] = useState({
    selectedOption: "",
    usersArr: [
      {
        firstName: "John",
        lastName: "Smith",
        role: "Admin",
      },
      {
        firstName: "Adam",
        lastName: "Muller",
        role: "Admin",
      },
      {
        firstName: "Perri",
        lastName: "Smith",
        role: "Manager",
      },
      {
        firstName: "Samsung",
        lastName: "Mobile",
        role: "Manager",
      },
      {
        firstName: "Apple",
        lastName: "iPhone",
        role: "Manager",
      },
    ],
  });

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setOption({ ...users, selectedOption: e.currentTarget.value });
  };

  console.log("options= ", users);

  return (
    <div>
      <h1>User Types</h1>
      <input
        type="radio"
        value="admin"
        name="userType"
        checked={users.selectedOption === "admin"}
        onChange={onChange}
      />{" "}
      Admin
      <input
        type="radio"
        value="manager"
        name="userType"
        checked={users.selectedOption === "manager"}
        onChange={onChange}
      />{" "}
      Manager
      <h1 className="userType">
        {users.selectedOption === "admin"
          ? `${users.selectedOption} Users`
          : users.selectedOption}
      </h1>
      {users.usersArr
        .filter((user) => user.role.toLowerCase() === users.selectedOption)
        .map((user, i) => (
          <div key={i}>
            <User user={user} />
          </div>
        ))}
    </div>
  );
};

export default App;
