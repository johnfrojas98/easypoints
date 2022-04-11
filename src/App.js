import React, {Suspense} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Layout from './components/Layout';


const App = () => {
  return (
    <Router>
      <Suspense fallback={<p>Cargando...</p>}>
        <Routes>
          <Route exact path='/' name='Login' element={<Login/>}/>
          <Route exact path='/app' name='Layout' element={<Layout/>}/>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App