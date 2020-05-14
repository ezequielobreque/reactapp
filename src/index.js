//import the react and reactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';



//create a react component
const App= ()=>{
    const buttonText={text:'Click Me'};
    return(
    <div>
        <label className="label" htmlFor="name">Enter name:</label>
        <input id="name" type="text"/>
    <button style={{backgroundColor:'blue', color : 'white'}}>{buttonText.text}</button>
    </div>
    );
};

// take the react component and show in the scre
ReactDOM.render(
<App />,
document.querySelector('#root')
);