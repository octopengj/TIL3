// import React, {Component} from "react";
import React, { useState } from "react";
import "./App.css";

export default function App() {
  // state = {
  //   todoData: [],
  //   value: "",
  // };

  // const [변수이름, State를 정하는 함수]
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  const getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    };
  };

  const handleClick = (id) => {
    // let newTodoData = this.state.todoData.filter((data) => data.id !== id);
    let newTodoData = todoData.filter((data) => data.id !== id);
    // this.setState({ todoData: newTodoData });
    setTodoData(newTodoData);
  };

  const handleChange = (e) => {
    console.log("e", e.target.value);
    // this.setState({ value: e.target.value });
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      // title: this.state.value,
      title: value,
      completed: false,
    };

    // this.setState({ todoData: [...todoData, newTodo], value: "" });
    setTodoData((prev) => [...prev, newTodo]);
    setValue("");
  };

  const handleCompleteChange = (id) => {
    // let newTodoData = this.state.todoData.map((data) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });

    // this.setState({ todoData: newTodoData });
    setTodoData(newTodoData);
  };
  // render{
  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>
        </div>
        {/* {this.state.todoData.map((data) => ( */}
        {todoData.map((data) => (
          // <div style={this.getStyle(data.completed)} key={data.id}>
          <div style={getStyle(data.completed)} key={data.id}>
            <input
              type="checkbox"
              defaultChecked={false}
              // onChange={() => this.handleCompleteChange(data.id)}
              onChange={() => handleCompleteChange(data.id)}
            />
            {data.title}
            <button
              // style={this.btnStyle}
              style={btnStyle}
              onClick={() => {
                // this.handleClick(data.id);
                handleClick(data.id);
              }}
            >
              x
            </button>
          </div>
        ))}
        {/* <form style={{ display: "flex" }} onSubmit={this.handleSubmit}> */}
        <form style={{ display: "flex" }} onSubmit={handleSubmit}>
          <input
            type="text"
            name="value"
            style={{ flex: "10", padding: "5px" }}
            placeholder="해야 할 일을 입력하세요."
            // value={this.state.value}
            value={value}
            // onChange={this.handleChange}
            onChange={handleChange}
          ></input>
          <input
            type="submit"
            value="입력"
            className="btn"
            style={{ flex: 1 }}
          ></input>
        </form>
      </div>
    </div>
  );
}
// }
