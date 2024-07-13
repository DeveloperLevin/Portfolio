import React from 'react'
import '../app.css'
import '../style.css'

function Contact() {
  return (
    <section className='contact'>
        <h1 className='tracking-wider uppercase mt-4 footer-text' style={{letterSpacing: '0.1em'}}>CONTACT</h1>
        <div className='entries'>
            <input type='text' placeholder='Username'/>
            <input type='email' placeholder='Email'/>
            <textarea placeholder='Message'></textarea>
            <button className='btn btn-blue'>Let's Connect</button>
        </div>
    </section>
  )
}

export default Contact