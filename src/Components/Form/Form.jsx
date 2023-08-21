import React, { useState } from 'react'
import Card from '../Card/Card';

const Form = () => {
  const [input,setInput] = useState()
  

  const inputChange = (e) => {
    setInput(e.target.value)
    console.log(e.target.value)
  }

  const searchBtn = (e) => {
      console.log("click")
  }


  const pokemon = [
    {
      image: "/",
      title: "Mew",
      text: "mysterious ancient pokemon"
    }
  ]

  return (
    <div className='Form'>
        <div className="input-container flex justify-between">
            <input type="text" className="input bg-slate-900 p-2" placeholder='Search' onChange={inputChange}/>
            <button className="btn" onClick={searchBtn}>Search</button>
        </div>
        <div className='result bg-black mt-5'>
            <Card image={pokemon[0].image} title={pokemon[0].title} text={pokemon[0].text}/>
            <Card image={pokemon[0].image} title={pokemon[0].title} text={pokemon[0].text}/>
        </div>
    </div>
  )
}

export default Form;