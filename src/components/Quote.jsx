import React from 'react'

const Quote = ({phrase}) => {

    console.log(phrase);
  return (
    <p className='container__phrase'>{phrase.phrase}</p>
  )
}

export default Quote 