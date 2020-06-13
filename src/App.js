import React from 'react';
//import logo from './logo.svg';
import MediaCard from './MediaCard';
import './App.css';
import Gate from './Gate';

//This is a plain JS function, App. What makes this function a React component is
//the fact that this function can return something which React can render.
function App(props) {                  //Instead of props, I could write the object: {name, batch, quart}. This has properties name... These properties can be used directly. This is JS ES6 DeStructuring Syntax... Happy Coding!
  return (                             //When {name, batch, quart} is passed in place of props, the compiler understands that the first argument will be an object. So extract the 'name' property, 'batch' property, 'quart' property out of it and give it to me as varibales called 'name', 'batch', 'quart'. 
    <div className="App-header">      
      <p className="App">Hello <strong>Fateh</strong>!</p>            
      <h2 className="App">The following are my favourite books:</h2>
      <ol> 
        <li><strong>Art and Physics</strong></li>
          <ul>
            <li>This book is written by Leonard Shlain;</li>
            <li>The book postulates claims for how revolutionary Artists became the precursors of visionary Physicists;</li>
            <li>The book has a unique philosophical writing style which stimulates a thought-provoking read.</li>
          </ul>
        <li><strong>The Big Questions in Science</strong></li>
          <ul>
            <li>This book is collaboratively written by Colin Stuart, Hayley Birch, and Mun Keat Looi;</li>
            <li>The book congregates all the big questions in Science which needs to be solved;</li>
            <li>These mysteries are actually very beautiful to see how humans progress as a whole by working together on common problems.</li>
          </ul>
      </ol>
      <br/>
      <p className="App"><i>JS code in JSX</i> <strong>Age is</strong> = {5 + 10} <strong>indeed a number</strong>.</p>
      <p className="App"><i>Checking out props in function:</i> Student: {props.name} | Batch: {props.batch} | Quarter: {props.quart}</p>
      <MediaCard 
        title="INSPIRE FROM THE INSPIRATIONALS TO BECOME AN INSPIRATION TOMORROW" 
        body={<div className="App">The following image contains a <b>quote</b> which <strong>I</strong> admire the most.</div>} 
        imageUrl="https://i.pinimg.com/originals/aa/5d/c0/aa5dc0ade75bb146f3e977d1ac7e2848.png"></MediaCard>
        Should we do it? <Gate isOpen={true}><div></div></Gate>
    </div>  //This <div> statement is a JSX syntax.
  );
} //React basically calls this function, extracts the JSX, and renders its HTML
  //equivalent to the DOM.


//The above function could be written in one line using "=>":
//  const App = (props) => <div>Hello {props.name}!</div>; 
//              or 
//  const App = ({ name }) => ( 
//    <div>Hello {name}!</div>;
//  )

//Making a new function using JS new syntax;
//Putting a custom tag within the new function;


export default App;
