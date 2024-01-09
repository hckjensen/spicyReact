import Header from './components/Header/Header'
import Body from './components/Main/Body'
import './App.scss'
import logo from "../src/assets/images/Logo-Spicy-White.png"
import {useEffect} from 'react'

function App() {
    useEffect(() => {
      document.title = "Spicy"
    },[]);

  return (
    <>
      <Header logoUrl={logo}/>
      <Body/>
    </>
  )
}

export default App
