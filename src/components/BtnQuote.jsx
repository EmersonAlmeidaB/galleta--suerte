import React from 'react'
import getRandomElemArray from '../utils/getRandomElemArray'

const BtnQuote = ({ setQuote, phrases,setnumberBg }) => {

    const handleRandomPhrase = () => {
        setQuote(getRandomElemArray(phrases))
        setnumberBg(getRandomElemArray([1,2,3,4]))

    }

  return (
    <button className='container__btn' onClick={handleRandomPhrase} >Prueba tu suerte</button>
  )
}

export default BtnQuote 