import React from 'react';
import { useState } from 'react';
import './SearchBar.css';

export default function SearchBar({onSubmit}) {
  const [term, setTerm] = useState('');

  const handleClick = (event) => {
    event.preventDefault()
    onSubmit(term)
  }
  const handleChange = (event) => {
    setTerm(event.target.value) 
  }
  return (
    <div className='search-bar'>
      <form onSubmit={handleClick}>
        <label>Enter Search Term</label>
        <input type="text" onChange={handleChange} placeholder="Search "/>
      </form>
    </div>
  )
}
