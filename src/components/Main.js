import React, { useState, useEffect } from "react";
import Todo from "./Todo/Todo";
import Login from "../screens/Login/Login";

function Main() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [isAuth, setIsAuth] = useState(false);
  const [invalid, setInvalid] = useState();
  const [currentUser, setCurrentUser] = useState();
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [currentTodo, setCurrentTodo] = useState(null);
  console.log(currentUser, "currentUser");
  // console.log(name, "naem");


  useEffect(() => {
    const info = [
      { name: "khalid", userName: "user1", password: "123", id: "1" },
      { name: "asher", userName: "user2", password: "123", id: "2" },
      { name: "saqlain", userName: "user3", password: "123", id: "3" },
    ];

    localStorage.setItem("users", JSON.stringify(info));
    const usernm = JSON.parse(localStorage.getItem("userName"));
    const pass = JSON.parse(localStorage.getItem("password"));
    // const usersName = JSON.parse(localStorage.getItem("name"));
    // const userId = JSON.parse(localStorage.getItem("id"))
    // console.log(usersNames.find((f)=> f.name == "khalid"),"userID");
    // const usersNames = JSON.parse(localStorage.getItem("users"));
    // const usersNames = JSON.parse(localStorage.getItem("users"));

    if (usernm && pass) {

      setIsAuth(true);

    }
  }, [])
  useEffect(() => {
    const usersNames = JSON.parse(localStorage.getItem("users"));
    const user = usersNames.find((f) => f.userName == name);
    console.log(user, "user");
    setCurrentUser(user);

  }, [todo])

  const onChangeName = (event) => {
    setName(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const submitEvent = () => {
    setInvalid(false);
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    // console.log( users.some( (item) => item.userName === name && item.password === password ), name,password );
    if (
      users.some((item) => item.name === name || item.userName === name && item.password === password)
    ) {
      setIsAuth(true);
      localStorage.setItem("userName", JSON.stringify(name));
      localStorage.setItem("password", JSON.stringify(password));

      const data = JSON.parse(localStorage.getItem("users"));
      const loginUser = data.find((f) => f.userName == name)
      localStorage.setItem("currentUser", JSON.stringify(loginUser))
    } else {
      setInvalid(true);
    }
  };

  return (
    <div>
      {isAuth ? (
        <Todo
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          setIsAuth={setIsAuth}
          name={name}
          input={input}
          setInput={setInput}
          todo={todo}
          setTodo={setTodo}
          currentTodo={currentTodo}
          setCurrentTodo={setCurrentTodo}
        />
      ) : (
        <Login
          name={name}
          setName={setName}
          password={password}
          setPassword={setPassword}
          submitEvent={submitEvent}
          onChangeName={onChangeName}
          onChangePassword={onChangePassword}
          invalid={invalid}
        />
      )}
    </div>
  );
}

export default Main;
