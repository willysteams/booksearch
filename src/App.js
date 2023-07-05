import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Home} from './Pages/Home';
import {About} from './Pages/AboutBook';
import {Layout} from './Components/Header'


function App() {
  return (
    <div className="container pt-4">
      <Routes>
        <Route path={'/'} element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path={'/:category/:query/:sort'} element={<Home/>}/>
          <Route path={'/about/:bookId'} element={<About/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;