import Header from './components/Header/Header'
import Body from './components/Main/Body'
import Footer from './components/Footer/Footer'
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
      <Footer heading="Kontakt Spicy:" heading2="Google Maps:"
              contactInfo={{
                name: "SPICY Hot Company",
                address: {
                  line1: "Boulevarden 39",
                  line2: "9000 Aalborg",
                },
                email: "Send os en mail:",
                phone: "Ring til os:"
              }}
      />
    </>
  )
}

export default App
