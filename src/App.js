import React, { useContext } from "react";
import { Routes, Route } from "react-router";
import AuthProvider, { AuthContext } from "./Auth";
import Auth from "./Auth";
import Component from "./Component";
import Homepage from "./Homepage";


function App() {
  const {isToggle} = useContext(AuthContext)
  return (
      <AuthProvider>
        <Routes>
            <Route path="/:auth" element={<Component />} />
            <Route path="/home" element={<Homepage />}/>
        </Routes>
      </AuthProvider>
  );
}


export default App;
