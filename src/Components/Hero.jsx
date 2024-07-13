import React from 'react'
import '../app.css'
import '../style.css'

export default function Hero() {
  return (
    <>
        <section className='flex flex-col justify-center items-center mt-4 h-dvh'>
            <div>
                <img src='../../src/assests/download.png' alt='Profile picture' className='rounded-full w-42 h-42 object-cover'/>
            </div> 
            <div className='flex flex-col justify content items-center'>
                <h1 className=' text-center'>Levin Samson Moras</h1>
                <h2 className='text-center'>Developer</h2>
                <span className='flex flex-row justify-center mt-4'>
                    <a href="https://www.linkedin.com/in/levin-samson-moras/" target='_blank' className='link'>
                        <img src="../../src/assests/linkedin.png" alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/DeveloperLevin" target='_blank' className='link '>
                        <img src='../../src/assests/github.png' alt='Github'/>
                    </a>
                </span>
                <p className='text-base max-w-sm mx-auto mt-4 p-4'>Passionate developer dedicated to creating impactful solutions, driven by curiosity, creativity, and a love for problem-solving.</p>
                <a href='../../src/assests/Levin Resume v2.pdf' download>
                    <button className='btn btn-blue mt-4'>Resume</button>
                </a>
            </div>
        </section>
    </>
  )
}
