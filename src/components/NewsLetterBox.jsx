import React from 'react'

function NewsLetterBox() {
    const onSubmitHandler = (event) => {
        event.preventDefault()
        console.log('Form submitted with email:', event)
        
    }
  return (
    <div className='text-center'>
    <p className='text-2xl font-medium text-gray-800 '>
        subscribe now and get 30% off
    </p> 
    <p className='text-gray-400 mt-3'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae id nulla rerum reiciendis iste quaerat praesentium fuga, optio cumque sint!
    </p>   
    <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type="email"  placeholder='enter your email' required/>
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE NOW</button>
    </form>
    </div>
  )
}

export default NewsLetterBox
