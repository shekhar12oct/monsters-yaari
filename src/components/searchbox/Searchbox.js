import React from 'react'
import './Searchbox.css';

const Searchbox = ({placeholder,handleChange}) => {
    return (
      <div>
      <input type="search"
      className="search" 
      placeholder={placeholder}  
      onChange={handleChange}/>
      </div>
    )
}

export default Searchbox;
