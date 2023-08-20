import React from 'react'

const Form = () => {
  return (
    <div className='Form'>
        <div className="input-container flex justify-between">
            <input type="text" className="input bg-slate-900 p-2" placeholder='Search'/>
            <button className="btn">Search</button>
        </div>
        <div className='result bg-black mt-5'>
            result
        </div>
    </div>
  )
}

export default Form;