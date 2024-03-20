
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Courselist from './components/CourseList/Courselist'

function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <section>
      {!localStorage.getItem('token')? "":<section><Courselist /></section>}
      </section>
      <main>
        <Outlet />
      </main>
      <Footer>
        <Footer />
      </Footer>
    </>
  )
}

export default App
