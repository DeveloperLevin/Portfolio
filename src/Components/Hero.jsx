import React from 'react'

export default function Hero() {
  return (
    <>
        <section>
            <div>
                <img src='../../src/assests/download.png' alt='Profile picture'/>
            </div> 
            <div>
                <h1>Levin Samson Moras</h1>
                <h2>Developer</h2>
                <span>
                    <a href="https://www.linkedin.com/in/levin-samson-moras/" target='_blank'>
                        <img src="../../src/assests/linkedin.png" alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/DeveloperLevin" target='_blank'>
                        <img src='../../src/assests/github.png' alt='Github' />
                    </a>
                </span>
                <p>I like Building Stuff</p>
                <a href='../../src/assests/Levin Resume v2.pdf' download>
                    <button>Resume</button>
                </a>
            </div>
        </section>
    </>
  )
}
