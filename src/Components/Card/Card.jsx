import React from 'react'

const Card = ({image,title,text}) => {
  return (
    <div className='Card text-white bg-slate-950 p-4 mt-5 rounded-md border-4 border-slate-500 border-opacity-20'>
        <img src={image} alt="pokeimg" />
        <h2>{title}</h2>
        <p>{text}</p>
    </div>
  )
}

export default Card 