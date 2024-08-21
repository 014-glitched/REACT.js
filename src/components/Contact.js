import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1 className='font-bold text-3xl text-center mt-5 p-4'>Contact Us..!!</h1>
      <div className='flex justify-center'>
      <form>
        <input type="text" className='border border-black p-2 m-2 rounded-lg'  placeholder='name'/>
        <input type="text" className='border border-black p-2 m-2 rounded-lg'  placeholder='message'/>
        <button className='border border-black p-2 m-2 rounded-lg bg-indigo-400'>Submit</button>
      </form>
      </div>
    </div>
  )
}

export default Contact;

