import React from 'react';
import Todo from '../componets/Todo'
import { useSelector } from 'react-redux';

const TodoList = () => {
  const todoses = useSelector((state)=>state.todos)
  console.log(todoses);
    return (
       
        <div
          className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto"
        >
          {
            todoses?.map(todo=><Todo todo={todo} key={todo.id}/>)
          }
          

        </div>
    );
};

export default TodoList;