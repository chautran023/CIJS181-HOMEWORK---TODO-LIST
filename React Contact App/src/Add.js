import React from 'react';
import { useState } from 'react';

export default function Add({ onAddNew }) {
  const [contactFormValue, setContactFormValue] = useState({
    name: '',
    phoneNumber: '',
    profession: '',
  });
  const handleInputChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    setContactFormValue({
      ...contactFormValue,
      [fieldName]: fieldValue,
    });
  };
  const handleSubmit = (event) => {
    if (onAddNew && typeof onAddNew === 'function') {
      event.preventDefault();
      //In the child component, we need to pass the data we want to add to the parent. Otherwise, React will have no idea which data to add.
      onAddNew(contactFormValue);
      // setContactFormValue({
      //   name: '',
      //   phoneNumber: '',
      //   profession: '',
      // });
    }
  };
  return (
    <form className="row" onSubmit={handleSubmit}>
      <div className="col-lg-12">
        <div className="panel">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              onChange={handleInputChange}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Tel"
              name="phone"
              onChange={handleInputChange}
            />
            <input
              type="text"
              className="form-control"
              placeholder="profession"
              name="profession"
              onChange={handleInputChange}
            />
            <span className="input-group-btn">
              <button
                type="submit"
                className="btn btn-effect-ripple btn-primary"
              >
                <i className="fa fa-plus"></i>
              </button>
            </span>
          </div>
        </div>
      </div>
    </form>
  );
}
