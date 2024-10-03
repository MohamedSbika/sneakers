
import React from 'react'
import { ItemsList } from "../helpers/ItemsList";

function Category({ handleChange }) {
    return (
      <div>
        <h2 className="sidebar-title">Category </h2>
  
        <div>
          <label className="sidebar-label-container">
            <input onChange={handleChange} type="radio" value="" name="test" />
            <span className="checkmark"></span>All
            
          </label>
          <Input
            handleChange={handleChange}
            value="Man"
            title="Man"
            name="test"
          />
          <Input
            handleChange={handleChange}
            value="Woman"
            title="Woman"
            name="test"
          />
          <Input
            handleChange={handleChange}
            value="Kids"
            title="Kids"
            name="test"
          />
        </div>
      </div>
    );
  }
  


  export default Category;