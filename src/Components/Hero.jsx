import React from 'react'
import '../app.css'

export default function Hero() {
  return (
    <>
        <section className='flex flex-col justify-center items-center mt-4'>
            <div>
                <img src='../../src/assests/download.png' alt='Profile picture' className='rounded-full w-32 h-32 object-cover'/>
            </div> 
            <div className='flex flex-col justify content items-center'>
                <h1 className='text-xl text-center font-bold'>Levin Samson Moras</h1>
                <h2 className='text-center'>Developer</h2>
                <span className='flex flex-row justify-center'>
                    <a href="https://www.linkedin.com/in/levin-samson-moras/" target='_blank'>
                        <img src="../../src/assests/linkedin.png" alt="LinkedIn" className='w-6 h-6'/>
                    </a>
                    <a href="https://github.com/DeveloperLevin" target='_blank' className='mx-2'>
                        <img src='../../src/assests/github.png' alt='Github' className='w-6 h-6'/>
                    </a>
                </span>
                <p>I like Building Stuff</p>
                <a href='../../src/assests/Levin Resume v2.pdf' download>
                    <button className='btn btn-blue mt-4'>Resume</button>
                </a>
            </div>
        </section>
    </>
  )
}
