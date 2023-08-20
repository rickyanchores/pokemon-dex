import React from 'react'

const Card = ({image,title,text}) => {
  return (
    <div className='Card text-white bg-slate-900 p-5 mt-5 rounded-md'>
        <img src={image} alt="pokeimg" />
        <h2>{title}</h2>
        <p>{text}</p>
    </div>
  )
}

export default Card 