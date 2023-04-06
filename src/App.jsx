import React from 'react'
import { Sidebar } from './components/sidebar'
import { Container } from './components/container'

const App = () => {
  return (
    <div className=" w-screen ">
        <Sidebar />
        <Container />
    </div>
  )
}

export default App