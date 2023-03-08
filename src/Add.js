import React from 'react';
import { useState } from 'react';

export default function Add({ onAddNew }) {
  const [input, setInput] = useState({
    name: '',
  });
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (onAddNew && typeof onAddNew === 'function') {
      onAddNew(input);
      setInput({
        name: '',
      });
    }
  };

  return (
    <form className="row g-3" onSubmit={handleSubmit}>
      <div className="col-auto">
        <label>
          <input
            type="text"
            className="form-control"
            placeholder="To do..."
            name="name"
            value={input.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="col-auto">
        <button type="submit" className="btn btn-primary mb-3">
          Add
        </button>
      </div>
    </form>
  );
}
