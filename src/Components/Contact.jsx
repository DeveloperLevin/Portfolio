import React from 'react'

function Contact() {
  return (
    <section className='flex flex-col justify-center items-center'>
        <h1>Contact</h1>
        <div>
            <input type='text' placeholder='Username'/>
            <input type='email' placeholder='Email'/>
            <textarea placeholder='Message'></textarea>
            <button>Let's Connect</button>
        </div>
    </section>
  )
}

export default Contact