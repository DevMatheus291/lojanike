import React from 'react';
import Home from './home.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
   
    return(
       <div>
        <Router>
            <Routes>
              
                <Route path='/' element={<Home />}  />
            </Routes>
        </Router>
       </div>
        
        

    );

}

export default App;
