
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
    <header>
      <Navbar/>
    </header>
    <main>
      <Outlet/>
    </main>
    <Footer>
      <Footer/>
    </Footer>
    </>
  )
}

export default App
