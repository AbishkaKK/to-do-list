import React, { useRef, useState } from "react";
import todo_icon from "../assets/todo_icon.png";
import TodoItems from "./TodoItems";
const Todo = () => {
  const [todoList, setToDoList] = useState([]);
  const inputRef = useRef();
  const addItems = () => {
    const inputText =
      inputRef.current.value.trim(); /*trim() is used to remove the extra space in the beginning of the text */
    if (inputText === "") {
      return null;
    }
    const newToDo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setToDoList((previous) => [...previous, newToDo]);

    /* Clearing the input field */
    inputRef.current.value = "";
  };
  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      {/* =============== title =============== */}
      <div className="flex items-center mt-7 gap-2">
        <img className="w-8" src={todo_icon} alt="" />
        <h1 className="text-3xl font-semibold">To-do List</h1>
      </div>

      {/* =============== input box =============== */}
      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="What do you have in mind?"
        />
        <button
          onClick={addItems}
          className="border-none rounded-full bg-teal-700 w-32 h-14 text-white text-lg font-medium cursor-pointer"
        >
          ADD +
        </button>
      </div>

      {/* =============== todo-list =============== */}
      <div>
        <TodoItems text="Learn Coding" />
        <TodoItems text="Learn Coding from me" />
      </div>
    </div>
  );
};
export default Todo;
