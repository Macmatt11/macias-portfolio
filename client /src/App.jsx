import React from 'react'
import './App.css'
import Navbar from './components/nav/Navbar'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Contact from './components/Contact'
import About from './components/about/About'
import Projects from './components/work/Projects'
import Home from './components/home/Home'
import Footer from './components/Footer'


function App() {


  return (
    <Router className='container' >
      <Navbar/>
      <Routes>
        <Route path= '/' element = {<Home/>}/>
        <Route path= '/about' element = {<About/>} />
        <Route path= '/projects' element = {<Projects/>}/>
        <Route path= '/contact' element = {<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
