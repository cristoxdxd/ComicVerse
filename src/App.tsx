import './App.css'
import { CardComic } from './components/CardComic/CardComic'
import { NavBar } from './components/NavBar/NavBar'

function App() {
  return (
    <>
      <NavBar />
      <br></br>
      <div className='flex wrap'>
        <CardComic />
        <CardComic />
        <CardComic />
      </div>
    </>
  )
}

export default App
