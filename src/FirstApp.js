import React from 'react'
import PropTypes from 'prop-types'

const FirstApp = ({ greeting, subtitle }) => {
  return (
    <>
      <h1>{greeting}</h1>
      {/* <pre>{JSON.stringify(person, null, 3)}</pre> */}
      <p>{subtitle}</p>
    </>
  )
}

FirstApp.propTypes = {
  greeting: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
  subtitle: 'Soy un subtitulo'
}

export default FirstApp
