import React from 'react'

function Form({value, setQuery, formSubmitNumber, setFormSubmitNumber}) {
  const submitHandler= (e)=>{
    e.preventDefault()
    let newNum = formSubmitNumber +1;
    setFormSubmitNumber(newNum);
  }

  const handleInputChange=(e)=>{
    setQuery(e.target.value)
  }
  return (
    <>
        <form onSubmit={submitHandler}>
            <input type="text" className="input" value={value} onChange={handleInputChange}/>
            <button type="submit" className="search-btn">Search</button>
        </form> 
    </>
  )
}

export default Form