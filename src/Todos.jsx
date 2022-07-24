import React from "react";
import { FaCheckDouble } from "react-icons/fa";
const Todos = ({ todos, markComplete }) => {

  

  return (
    <div>
      <div className="mt-5 mb-2  space-y-2">
        {todos.map((todo) => (
          <div
            className="bg-gray-200 p-1 rounded-md mx-auto w-full md:w-1/2 lg:w-1/2 flex justify-between
                font-semibold text-xl 
                "
            key={todo.id}
          >
            <p className="flex-wrap text-black"> {todo.todoString}</p>



            <span
              className="flex flex-row"
              onClick={() => markComplete(todo.id)}
            >
              <FaCheckDouble />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
