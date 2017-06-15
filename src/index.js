import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component.  This component should produce
// some HTML

const App = function () {  //const ES6
    return <div>Hi!</div>; //JSX, HTML looking JS, will be translated into regular JavaScript
}



// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(App);