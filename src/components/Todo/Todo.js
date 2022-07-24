import React, {useState} from "react";
import "./Todo.css";

function Todo({ currentUser, setCurrentUser, setIsAuth, name, input, setInput, todo, setTodo, currentTodo, setCurrentTodo }) {
  // const [todoDone, setTodoDone] = useState(false)
  // console.log(currentUser, "currentUser");
  // console.log(name, "name");
  // console.log(input, "input");
  // console.log(todo, "todo");
  // console.log(currentTodo, "currentTodo");
  // console.log(todo, "todo");


  React.useEffect(() => {
    localStorage.setItem("user", JSON.stringify(todo));
  }, [todo]);

  React.useEffect(() => {
    const todosTemp = JSON.parse(localStorage.getItem("user"));
    setTodo(todosTemp || []);
    console.log(todosTemp, "todosTemp");
  }, []);

  const onChangeText = (event) => {
    setInput(event.target.value);
  };

  const addTodos = () => {
    if (!input) {
    } else if (currentTodo) {
      setTodo(
        todo.map((value) => {
          if (value.id === currentTodo) {
            return { ...value, text: input };
          }
          return value;
        })
      );
    } else {
      const userId = new Date().getTime().toString(10);
      setTodo([...todo, { text: input, id: userId, isDone: false }]);
      setInput("");
      //   localStorage.setItem("Todo", JSON.stringify([...todo, input]));
    }
  };

  const onSubmitEvent = (event) => {
    event.preventDefault();
  };

  const deleteTodo = (id) => {
    const updateItems = todo.filter((ind) => {
      return ind.id !== id;
    });
    setTodo([...updateItems]);
  };

  const addDone = (id) => {
    const temp = todo.find((elm) => {
      return elm.id === id;
    });
     temp.isDone = !temp.isDone
    
    setTodo([...todo])
    // setTodoDone(tres)
    
    // console.log(tres, "tres temp");
    console.log(temp, "temp done");
    // const donetodos = todo.filter((f) => { return f.isDone == id })
    // console.log(donetodos,"donetodos");
    // console.log(id,"iddddddddd")
    // setTodoDone(true)
    // const temp = (todo.filter((i) => i.id === id)[0])
    // const temp = todo.find((elm) => {
    //   console.log(elm, "elm todoo");
    //   // return elm.isDone = true;
    //  const addTemp = elm.id === id;
    //   console.log(addTemp,"addTemp");
    //   // return addTemp.isDone = true
    // });
    // console.log(temp, "temp");
    // console.log(todo,"add todo f");
    // setTodo(temp);
    
  };

  const editTodo = (id) => {
    const temp = todo.find((elm) => {
      return elm.id === id;
    });
    setInput(temp.text);
    setCurrentTodo(id);
  };
  const logout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("password");
    setIsAuth(false);
  };
  return (
    <div className="todo">
      <div className="todo-header">
        <div> Welcome : {currentUser?.name} </div>
        <div> Add Something to To Do's </div>
      </div>
      <form className="todo-form" onSubmit={onSubmitEvent}>
        <input
          className="input-box"
          type="text"
          value={input}
          onChange={onChangeText}
          placeholder="Write something to do"
        />
        <button onClick={addTodos} className="todo-btn">
          Add
        </button>
        <button onClick={logout} className="logout-btn">
          Logout
        </button>
        {todo.map((val, i) => {
          return (
            <div className={val.isDone ? "todo-done" : "todo-list"} key={i}>
              <div className="todo-data">{val.text}</div>
              <div className="todo-data-btn">
                <button onClick={() => addDone(val.id)} className="done-btn">
                  Done
                </button>
                <button onClick={() => editTodo(val.id)} className="edit-btn">
                  Edit
                </button>
                <button
                  onClick={() => deleteTodo(val.id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </form>
    </div>
  );
}

export default Todo;
