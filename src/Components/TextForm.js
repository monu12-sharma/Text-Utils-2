import React, { useState } from 'react';


export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("Upper Case Was Clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase","success");
  }

  const handleLoClick = () => {
    //console.log("Upper Case Was Clicked"+text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase","success");
  }

  const handleClClick = () => {
    //console.log("clear all text"+text);
    let newText = '';
    setText(newText);
    props.showAlert("text has been cleared","success");
    
  }

  const handleOnChange = (event) => {
    //console.log("onChanged");
    setText(event.target.value)
  }

  

  const [text, setText] = useState('');
  return (
    <>
    <div className='container' style={{color:props.mode===`dark`?`white`:`#042743`}} >
            <h2>{props.heading}</h2>
            <div className="mb-3">            
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode===`dark`?`#13466e`:`white`, color:props.mode===`dark`?`white`:`#042743`}} id="MyBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert To UpperCase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert To LowerCase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleClClick}>Clear All Text</button>
    </div>

    <div className="container my-3"  style={{color:props.mode===`dark`?`white`:`#042743`}} >
      <h2>Your Text Summery</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} charecters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes To Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Here Something in the textbox to Preview Here"}</p>
    </div>
    </>
  )
}
