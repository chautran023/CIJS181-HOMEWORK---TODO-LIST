import React from 'react';
import { useState } from 'react';
import MyList from './MyList';
import Add from './Add';

function genID() {
  return Math.floor(Math.random() * Date.now());
}

export default function TodoList() {
  const [tasks, setTasks] = useState([
    {
      name: 'Lau nha',
      id: 1,
    },
    {
      name: 'Lam bai tap',
      id: 2,
    },
  ]);

  //Tuong duong handleChange

  const handleAddNew = (event) => {
    setTasks([
      {
        id: genID(),
        ...event,
      },
      ...tasks,
    ]);
  };

  return (
    <div>
      <Add onAddNew={handleAddNew} />
      <MyList tasks={tasks} />
    </div>
  );
}
