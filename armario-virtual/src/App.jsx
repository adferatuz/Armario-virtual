import { useState } from 'react'
import './global-styles/App.css'
import Layout from './components/layout/Layout';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout />
    </>
  )
}

export default App
