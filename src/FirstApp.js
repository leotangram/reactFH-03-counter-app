import React from 'react'
import PropTypes from 'prop-types'

const FirstApp = ({ greeting }) => {
  return (
    <>
      <h1>{greeting}</h1>
      {/* <pre>{JSON.stringify(person, null, 3)}</pre> */}
      <p>Mi primera aplicación</p>
    </>
  )
}

FirstApp.propTypes = {
  greeting: PropTypes.string.isRequired
}

export default FirstApp
