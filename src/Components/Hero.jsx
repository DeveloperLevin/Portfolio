import React from 'react'
import '../app.css'

export default function Hero() {
  return (
    <>
        <section className='flex flex-col justify-center items-center'>
            <div>
                <img src='../../src/assests/download.png' alt='Profile picture' className='rounded-full object-cover'/>
            </div> 
            <div>
                <h1 className='text-xl'>Levin Samson Moras</h1>
                <h2 className='text-center'>Developer</h2>
                <span className='flex flex-row justify-center'>
                    <a href="https://www.linkedin.com/in/levin-samson-moras/" target='_blank' className='size-1'>
                        <img src="../../src/assests/linkedin.png" alt="LinkedIn"/>
                    </a>
                    <a href="https://github.com/DeveloperLevin" target='_blank' className='size-1'>
                        <img src='../../src/assests/github.png' alt='Github' />
                    </a>
                </span>
                <p>I like Building Stuff</p>
                <a href='../../src/assests/Levin Resume v2.pdf' download>
                    <button className='btn btn-blue'>Resume</button>
                </a>
            </div>
        </section>
    </>
  )
}
