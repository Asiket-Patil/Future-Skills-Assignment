import React, { useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";


const Titile = ({ onSearch }) => {

  const [search, setSearch] = useState('')

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSearch = () => {
    onSearch(search);
  }
  return (
    <>
      <div className='title'>
        <h2>How can we help?</h2>
        <div className='box'>
          <input type="text"
            placeholder="Search  | Please Enter Full Title |"
            value={search}
            onChange={handleChange} />
          <button onClick={handleSearch}><FaArrowRightLong /></button>
        </div>
      </div>
    </>
  )
}

export default Titile
