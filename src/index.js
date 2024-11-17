import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import {cards} from './cards';
import App  from './App';

// always return single element
// div/ section/ article/ Fragment
// use camelCase for html attribute
// use className instead of class
// close every element
// formatting


//Mini CardList Project
// CSS
// JSX - CSS
// JSX - Javascript
// props - properties
// Props - Destruction
// Props - Children
// Simple List
// Propers List
// Key props and spread operator
// Even Basic
// Import and Export Statements





// function Greeting(){
//   return React.createElement(
//     "div",
//     {},
//   React.createElement("h1",{},"Hello Aries")
//   );
// }

// function Greeting(){
//   return <>
//     <h1>Hello</h1>
//     <p>Hello</p>
//     <img src="" alt="test"/>
//   </>
// }


function CardList(){
  return (
  <main className="card-list">
    {cards.map((card) => {
      return <Card key={card.id} {...card}/>;
    })}
  </main>
  );
}
function Card(props){
  const {thumbnailUrl,title,description} = props;
  function clickHandler(){
    console.log(title)
  }
  return <section>
    <img src={thumbnailUrl} alt="test img"/>
    <h1>{title}</h1>
    <p>{description}</p>
    <button onClick={clickHandler}>Click</button>
  </section>
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CardList/>);
// root.render(<App/>);