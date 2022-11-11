import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Start from "./Page/Start/Start";
import {LogUser} from "./Page/LogUser/LogUser";

function App() {
  return (<>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Start/>}/>
                  <Route path="/LogUser" element={<LogUser/>}/>
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
