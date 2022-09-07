import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import Textform from "./components/Textform";



// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
  
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");//it states whether the dark mode enabled or not 
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type )=>{
setAlert({
  msg: message,
  type: type
})
setTimeout(() => {
  setAlert(null)
}, 1000);

  }
const toggleMode =()=>{
  if(mode === "light"){
    setMode("dark")
document.body.style.backgroundColor = "#233b52";
showAlert("Dark mode has been enabled", "success")
document.title = "TextUtils - Dark mode";
// setInterval(() => {
//   document.title = "TextUtils is miracale"
// }, 1000);
// setInterval(() => {
//   document.title = "1 sec install"
// }, 2000);

} 
 else{
    setMode("light")
    document.body.style.backgroundColor = "white";
    showAlert("Light mode has been enabled", "success")
    document.title = "TextUtils - Light mode"

}
}


  return (
    <>
{/* <Navbar title="TEXTUtils"  abouttext = "About US"/> */}
{/* <Navbar/> */}
  
{/* <Router> */}

<Navbar title="TEXTUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
      {/* /users ----> component1 */}
      {/* /users/home/ -----> component2 */}
      {/* <Switch>
          <Route exact path="/about">
            <About/>
          </Route>

          <Route exact path="/">
          </Route>
         
        </Switch> */}


          {/* <Routes>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/" element={<Textform heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes> */}
      

       
      </div>
          <Textform showAlert={showAlert} heading="Enter the text for anlysing" mode={mode}/>
       
    {/* </Router> */}

       
    
   </>
  );
  }


export default App;
