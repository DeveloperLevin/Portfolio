import Hero from './Components/Hero'
import ProjectList from './Components/ProjectList'
import Tech from './Components/Tech'
import Contact from './Components/Contact'
import './app.css'
import './style.css'
import './index.css'

function App() {
  return (
    <div className='flex flex-col main'>
      <Hero/> 
      <ProjectList />
      <Tech />
      <Contact />
    </div>
  )
}

export default App
