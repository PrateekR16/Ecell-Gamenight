import Table from './components/Table'
import AppBar from './components/AppBar'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
   <>
      <AppBar></AppBar>
      <Routes>
        <Route path='/room/:number' element={<Table/>}></Route>
        </Routes>
        </>
        );
}
        export default App;
