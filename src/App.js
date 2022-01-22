import React from 'react';
import Table from './components/Table'
import AppBar from './components/AppBar'
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
        <Heading/>
        <AppBar></AppBar>
        <Table></Table>
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
