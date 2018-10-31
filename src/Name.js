import React, { useState } from 'react'

export default function Greeting(props){
  const [name, setName] = useState('Mary')
  const [surname, setSurnamee] = useState('Poppins')

  function handleNameChange(e){
    setName(e.target.value)
  }
  function handleSurnameChange(e){
    setSurnamee(e.target.value)
  }

  return(
    <section>
      <div label="Name">
        <input
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div label="Surname">
        <input
          value={surname}
          onChange={handleSurnameChange}
        />
      </div>
    </section>
  )
}

