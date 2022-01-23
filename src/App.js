import React from 'react';
import Table from './components/Table'
import AppBar from './components/AppBar'
import { Routes, Route } from 'react-router-dom'
import Heading from './components/Heading'
import ParticlesContainer from './components/ParticlesContainer'

function App() {

  return (
    <>
      <div
        style={{
          backgroundColor: '	#202020',
          height: '100vh',
        }}
      >
        <Heading />
        <AppBar></AppBar>
        <Routes>
          <Route path='/room/:number' element={<Table />}></Route>
        </Routes>
      </div>
      <div
        style={{
          opacity: '0.25',
          width: '100%',
          height: '100%',
        }}
      >
        <ParticlesContainer />
      </div>
    </>
  )
}




export default App;

