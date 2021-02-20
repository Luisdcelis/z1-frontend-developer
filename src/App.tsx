import React from 'react';
import './App.css';
import  NavBar from './components/NavBar'

function App() {
  return (
    <div style={{backgroundColor: "lightgray"}}>
      <div style={{marginLeft: 500, marginRight: 500, backgroundColor: "white"}}>
        <NavBar />

        <div style={{textAlign: "center"}}>
          <br/>
          <h1>
            Scan your ID
          </h1>
          <br/>
          <div style={{fontSize: 22}}>
            Take a picture. It may take time to validate your personal information
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
