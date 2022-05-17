import React, {Suspense} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Datatable from './components/Datatable';
import CreateUser from './components/CreateUser/CreateUser';


const App = () => {
  return (
      <Router>
      <Suspense fallback={<p>Cargando...</p>}>
        <Routes>
          <Route exact path='/' name='Login' element={<Login/>}/>
          <Route exact path='/app' name='Layout' element={<Datatable/>}/>
          <Route exact path='/createuser' name='CreateUser' element={<CreateUser/>}/>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App