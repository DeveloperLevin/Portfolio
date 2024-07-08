import React from 'react'

function Contact() {
  return (
    <section className='flex flex-col justify-center items-center'>
        <h1 className='text-xl font-bold tracking-wider uppercase' style={{letterSpacing: '0.1em'}}>CONTACT</h1>
        <div className='flex flex-col justify-center items-center'>
            <input type='text' placeholder='Username'/>
            <input type='email' placeholder='Email'/>
            <textarea placeholder='Message'></textarea>
            <button className='btn btn-blue'>Let's Connect</button>
        </div>
    </section>
  )
}

export default Contact