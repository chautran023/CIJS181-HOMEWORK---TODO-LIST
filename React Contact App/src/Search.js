import React from 'react';
import { useState } from 'react';

export default function Search({onChangeSearch}) {
  return (
    <form className="row">
      <div className="col-lg-12">
        <div className="panel">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                onChange={(e) => {onChangeSearch(e.target.value) ;  console.log(e.target.value)}}
                />
            </div>
        </div>
      </div>
    </form>
  );
}
