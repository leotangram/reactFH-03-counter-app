import React from 'react'

const FirstApp = ({ greeting = 'Hola mundo' }) => {
  // const person = {
  //   name: 'Leo',
  //   age: 34
  // }

  return (
    <>
      <h1>{greeting}</h1>
      {/* <pre>{JSON.stringify(person, null, 3)}</pre> */}
      <p>Mi primera aplicación</p>
    </>
  )
}

export default FirstApp
