import React from 'react';
import './style.css';
import { useState } from 'react';

export default function ContactCard(props) {
  const handleClickClose = (event) => {
    if (props.onDelete && typeof props.onDelete === 'function') {
      event.preventDefault();
      props.onDelete(props.id);
    }
  };
  const [editing, setEditing] = useState(false);
  let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = 'none';
    editMode.display = 'block';
  } else {
    editMode.display = 'none';
    viewMode.display = 'block';
  }
  const handleClickEdit = () => {
    setEditing(true);
  };
  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };
  return (
    <>
      <div className="col-sm-6">
        <div className="panel">
          <div className="panel-body p-t-10">
            <div className="media-main">
              <a className="pull-left">
                <img
                  className="thumb-lg img-circle bx-s"
                  src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                  alt=""
                />
              </a>
              <div className="pull-right btn-group-sm">
                <button className="btn btn-success" onClick={handleClickEdit}>
                  <i className="fa fa-pencil"></i>
                </button>
                <button
                  type="submit"
                  className="btn btn-danger"
                  onClick={handleClickClose}
                >
                  <i className="fa fa-close"></i>
                </button>
              </div>
              <div className="info" style={viewMode}>
                <h5>{props.name}</h5>
                <h7>{props.phone}</h7>
                <p>{props.profession}</p>
              </div>
              <div className="info">
              <input
                style={editMode}
                type="text"
                name={props.name}
                placeholder={props.name}
                value={props.name}
                onChange={(e) => props.setUpdateName(e.target.value, props.id)}
                onKeyDown={handleUpdatedDone}
              />
              <input
                style={editMode}
                type="text"
                name={props.phone}
                placeholder={props.phone}
                value={props.phone}
                placeholder="..."
                onChange={(e) => props.setUpdatePhone(e.target.value, props.id)}
                onKeyDown={handleUpdatedDone}
              />
              <input
                style={editMode}
                type="text"
                name={props.profession}
                placeholder={props.profession}
                value={props.profession}
                placeholder="..."
                onChange={(e) => props.setUpdateProfession(e.target.value, props.id)}
                onKeyDown={handleUpdatedDone}
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
