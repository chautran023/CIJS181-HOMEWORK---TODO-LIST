import React from 'react';
import { useState } from 'react';

export default function MyList({ tasks }) {
  // State with list of all checked item
  const [checked, setChecked] = useState([]);
  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };
  var left = tasks.length - checked.length;
  //console.log('Your tasks', tasks.length);

  return (
    <>
      <ul className="list-group m-3">
        {tasks.map((item) => (
          <li className="list-group-item" key={item.id}>
            <input
              className="form-check-input"
              value={item.name}
              type="checkbox"
              onChange={handleCheck}
            />{' '}
            {item.name}
          </li>
        ))}
      </ul>
      <div
        className="d-flex justify-content-between m-3"
        style={{ color: 'gray' }}
      >
        <div>{`${left} tasks left!`}</div>
        <div>Chau's to-do list</div>
      </div>
    </>
  );
}
