import { StrictMode } from 'react'
import { render } from 'react-dom'
import './styles/index.css'
import { Weather } from './components/weather/index'

// console.log(import.meta.env.APP_API_KEY);

render(
  <StrictMode>
    <Weather />
  </StrictMode>,
  document.getElementById('root')
)
