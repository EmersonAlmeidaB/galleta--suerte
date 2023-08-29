
import { useState } from 'react';
import './App.css'
import BtnQuote from './components/BtnQuote';
import Quote from './components/Quote';
import getRandomElemArray from './utils/getRandomElemArray';
import phrases from "./utils/phrases.json";

function App() {

  const phraseRandon = getRandomElemArray(phrases)
  const numberRandon = getRandomElemArray([1,2,3,4])

  const [quote, setQuote] = useState(phraseRandon)
  const [numberBg, setnumberBg] = useState(numberRandon)

  const bgStyle = {
    backgroundImage:`url(/fondo${numberBg}.jpg)`
  }
  

  return (
  <div className='container' style={bgStyle}>
    <h1 className='container__title' >Galleta de la fortuna</h1>
    <Quote phrase={quote}/>
    <BtnQuote
    setQuote={setQuote}
    phrases={phrases}
    setnumberBg={setnumberBg}
    />
  </div>
  ) 
}

export default App
