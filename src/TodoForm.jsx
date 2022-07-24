import React, { useState } from "react";
import { v4 } from "uuid";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TodoForm = ({ addTodos }) => {
  const [todoString, setTodoString] = useState("");

  const meassage = "you can not add empty todo"

 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoString === "") {
    

      return toast (meassage, {type : 'error'} )
    }
    const todo = {
      todoString,
      id: v4(),
    };

    addTodos(todo);

    setTodoString("");
  };
  return (
   <>
    <ToastContainer position='bottom-center' />
    <form onSubmit={handleSubmit}>
      <div class="flex mt-10">
        <div className="mx-auto">
          <input
            type="text"
            className="rounded-lg p-1   border-yellow-500 border-2 outline-none text-lg font-semibold"
            value={todoString}
            onChange={(e) => setTodoString(e.target.value)}
          />
          <button className="bg-yellow-400 p-2 rounded-md ml-1 text-stone-900 font-bold">
            Add todo
          </button>
        </div>
      </div>
    </form>
   </>
  );
};

export default TodoForm;
