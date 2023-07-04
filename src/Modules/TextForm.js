import React,{useState} from 'react'
import jsPDF from 'jspdf'
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
export const TextForm = (prop) => {
  const copyTo=()=>{
    var copyText = document.getElementById("mytext").value;
      navigator.clipboard.writeText(copyText).then(() => {
          // Alert the user that the action took place.
          // Nobody likes hidden stuff being done under the hood!
          alert("Copied to clipboard");
      
      });
    }

  const[text,setText]=useState("Enter the text here !");
  const onhandleclick=()=>{
    // console.log("Upper case clicked" + text);
    let newText=text.toUpperCase();
    setText(newText);
    alert("Converted to uppercase");

  }
  const lowerclick=()=>{
    let lowerText=text.toLowerCase();
    setText(lowerText);
    alert("Converted to lowerCase");

  }

  const removeSpaces=()=>{
    let remove =text.replace(/\s+/g, ' ').trim()
    setText(remove);
    alert("Extra Spaces removed");
  }

  const onchange=(event)=>{//whenever we use event listiner we have to use event for input or other purpose
    // console.log("On change");
    setText(event.target.value);   //allow us to change the text to input->upadate 
  }
  const handleOnClear=()=>{
    let newtext=' ';
    setText(newtext);
  }
  const download=()=>{
    // let text=document.getElementById("mytext")
    // console.log(text.value)
    // Include the jsPDF library

// Create a new PDF instance
var doc = new jsPDF();

// Add content to the PDF
doc.text(text.valueOf, 10, 10);

// Save the PDF
doc.save('sample.pdf');


  }
  const plag=()=>{
    function checkPlagiarism(inputText, referenceText) {
      // Remove any extra spaces and convert to lowercase
      const cleanInput = inputText.toLowerCase().trim().replace(/\s+/g, ' ');
      const cleanReference = referenceText.toLowerCase().trim().replace(/\s+/g, ' ');
    
      // Count the number of matching words
      const inputWords = cleanInput.split(' ');
      const referenceWords = cleanReference.split(' ');
    
      let matches = 0;
      inputWords.forEach((word) => {
        if (referenceWords.includes(word)) {
          matches++;
        }
      });
    
      // Calculate the similarity percentage
      const similarity = (matches / inputWords.length) * 100;
    
      return similarity.toFixed(2); // Rounds to 2 decimal places
    }
    
  }  



  return (
    <>
    <h1 style={{color:prop.mode==='dark'?'white':'black'}}>WordBuddy-Edit/Enhance Your Texts</h1>
<div className="mb-3" style={{color:prop.mode==='dark'?'white':'black'}}> 
<label htmlFor="exampleFormControlTextarea1" className="form-label my-3">Let's Your WordBuudy Enhance Your Text!</label>
    {/* Gramerly syntax */}
<GrammarlyEditorPlugin clientId="client_2NupYiGqjGELeLq46C7cQu">
<textarea className="form-control" style={{backgroundColor:prop.mode==='dark'?'grey':'white',color:prop.mode==='dark'?'white':'black'}} value= {text} onChange={onchange} id="mytext" rows="8"></textarea>
</GrammarlyEditorPlugin>
    {/* Gramerly syntax end here*/}

<button type="button" className="btn btn-primary mx-3 my-5" onClick={onhandleclick}>Convert to upper case!</button>
<button className="btn btn-primary mx-3 my-5" onClick={lowerclick} >Convert to lower case</button>
<button className="btn btn-primary mx-3 my-5"onClick={handleOnClear}>Clear</button>
<button className="btn btn-primary mx-3 my-5"onClick={removeSpaces}>Remove Extra Space</button>
<button className="btn btn-primary mx-3 my-5"onClick={copyTo}>copy</button>
<button className="btn btn-primary mx-3 my-5"onClick={download}>Download</button>
</div>   
<div className="container my-3"style={{color:prop.mode==='dark'?'white':'black'}}>
  <h1>Your Text Summary</h1>
  <hr />
  <p>{text.split(" ").length} words and {text.length} length</p>
  <p>{0.008*text.split(" ").length} minutes to read!</p> 
  <h3>Preview</h3>
  <p>{text}</p>
</div>
<hr />


    </>
  )
}


//onchange function used beacuse we used state which value have to be updated
