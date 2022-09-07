import React, {useState} from 'react'

export default function Textform(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked" + text)
    let newtext = text.toUpperCase();
    setText(newtext)
    props.showAlert("Converted to uppercase", "success")
  } 
  const handleLowClick = ()=>{
    // console.log("Lowercase was clicked" + text)
    let newtext = text.toLowerCase();
    setText(newtext)
    props.showAlert("Converted to Lowercase", "success")

  }  
  const handleClearClick = ()=>{
    // console.log("Clear text" + text)
    let newtext = ("");
    setText(newtext)
    props.showAlert("All text has been cleared", "success")
    
  }  
  const handleCamelClick = ()=>{
    // console.log("Clear text" + text)
    let newtext = text.toCamelCase();
    setText(newtext)
  }  
  const handleOnChange = (event)=>{
    // console.log("On Change")
    setText(event.target.value)
  }
  const [text, setText] = useState("");
  // setText("change in this way")
  // setText = "wrong way to change "
  return (
    <>
    <div className="container"  style={{color: props.mode === "dark"? "white" : "black"}}>
        <h1>{props.heading}</h1>
   
  <div className="form-group">
  
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === "dark"? "rgb(86 86 86)" : "white",color:props.mode === "dark"? "white":"black" }} id="mybox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
  <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
  <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
  <button className="btn btn-primary mx-1" onClick={handleCamelClick}>Camel Case</button>
 
    </div>
    <div className="container my-5" style={{color: props.mode === "dark"? "white":"black"}}>
<h2>Your  Text Summary</h2>
<p>{text.split(" ").length} words , {text.length} characters</p>
<p>{0.008 * text.split(" ").length} Minutes read</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Enter something in the textbox given above to preview it here"}</p>
    </div>
    </>
  )
}
