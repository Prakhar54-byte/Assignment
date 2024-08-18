import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useCuurencyInfo} from './hooks/useCurrencyInfo'
import InputBox from './components/InputBox'

function App() {
  

  return (
    <>
      <div>
        <h1>Prakhar Currency Convertor</h1>
      </div>
      <InputBox/>
    </>
  )
}

export default App
