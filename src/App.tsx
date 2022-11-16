import * as React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Start from "./Page/Start/Start";
import {Transition} from "./Page/Transition/Transition";
import {Note_Modif} from "./Page/Note_Modif/Note_Modif";
import PrivateRoutes from "./Page/LogUser/PrivateRoutes";
import Dashboard from "./Page/LogUser/Dashboard";
import UpdateProfile from "./Page/LogUser/UpdateProfile";
import Projects from "./Page/LogUser/Projects";
import Signup from "./Page/LogUser/Signup";
import Login from "./Page/LogUser/Login";
import ForgotPassword from "./Page/LogUser/ForgotPassword";
function App() {
  return (<>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Start/>}/>
                  <Route path="/Transition" element={<Transition/>}/>
                  <Route path="/modif" element={<Note_Modif/>}/>
              </Routes>
          </BrowserRouter>
          <BrowserRouter>
              <Routes>
                  <Route element={<PrivateRoutes />}>
                      <Route path="/update-profile" element={<UpdateProfile />} />
                      <Route path="projects" element={<Projects />} />
                  </Route>
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
