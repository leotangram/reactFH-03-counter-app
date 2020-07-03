import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import FirstApp from './FirstApp'
// import CounterApp from './CounterApp'

const divRoot = document.querySelector('#root')
ReactDOM.render(<FirstApp greeting="Hola, soy Goku" />, divRoot)

// ReactDOM.render(<CounterApp />, divRoot)
