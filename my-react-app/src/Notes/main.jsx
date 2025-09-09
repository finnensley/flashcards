import React, { useState, useTransition } from "react";
import { createRoot } from "react-dom/client";
// import Cars from "./Vehicle.jsx";
// import { createPortal } from 'react-dom';
// import {Suspense, lazy} from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);

//   return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
// }

// createRoot(document.getElementById("root")).render(
//   <>
//     <Counter />
//     <h1 className="love">I Love JSX</h1>
//   </>
// );

// const myElement = <input type="text" />;
// const myElement2 = (
//   <p>
//     React {/* Wonderful*/} is {5 + 5} times better with JSX
//   </p>
// );
// createRoot(document.getElementById("demo")).render(
//   <div>
//     {myElement}
//     {myElement2}
//   </div>
// );

//JSX in Reacct Components: React uses componenets to build UIs. They are independent and reusable bits of code.
// function Car() {
//   const brand = "Ford";
//   const model = "Mustang";
//   return (
//     <>
//       <h2>My Car</h2>
//       <p>It is a {brand} {model}.</p>
//     </>
//   );
// }

// createRoot(document.getElementById('root')).render(
//   <Car />
// )

//JSX Expressions:
// function Car() {
//   return (
//     <>
//       <h1>My car</h1>
//       <p>It has {218 * 1.36} horsepower</p>
//     </>
//   );
// }

// createRoot(document.getElementById('root')).render(
//   <Car />
// )

//JSX Expressions using Variables:
// function Car() {
//   const hp = 218 * 1.36;
//   return (
//     <>
//       <h1>My car</h1>
//       <p>It has {hp} horsepower</p>
//     </>
//   );
// }

// createRoot(document.getElementById('root')).render(
//   <Car />
// )

//JSX with Function Calls
// function kwtohp(kw) {
//   return kw * 1.36;
// }

// function Car() {
//   return (
//     <>
//       <h1>My car</h1>
//       <p>It has {kwtohp(218)} horsepower</p>
//     </>
//   );
// }

// createRoot(document.getElementById('root')).render(
//   <Car />
// )

// Object Properties
// function Car() {
//   const myobj = {
//     name: "Fiat",
//     model: "500",
//     color: "white"
//   };
//   return (
//     <>
//       <h1>My car is a {myobj.color} {myobj.name} {myobj.model}</h1>
//     </>
//   );
// }

// createRoot(document.getElementById('root')).render(
//   <Car />
// )

//JSX attributes - use camelCase
// function Saying() {
//   const myfunc = () => {
//     alert("Hello World");
//   };

//   return (
//     //disabled makes it disabled or "false", can specify as false to allow
//     <button onClick={myfunc} disabled={false}>
//       Click me
//     </button>
//   );
// }

// createRoot(document.getElementById("next")).render(<Saying />);

//JSX style Attribute - uses camelCase
// function Car() {
//   const mystyles = {
//     color: "red",
//     fontSize: "20px",
//     backgroundColor: "yellow",
//     width: "fit-content",
//   };

//   return (
//     <>
//       <h1 style={mystyles}>My car</h1>
//     </>
//   );
// }

// createRoot(document.getElementById('demo')).render(
//   <Car />
// )

//Conditions - if statements, React supports if statements but not inside JSX
function IsAllowed() {
  const x = 5;

  return <h1>{x < 10 ? "Allowed" : "Not Allowed"}</h1>;
}

createRoot(document.getElementById("allowed")).render(<IsAllowed />);
//Components are like functions that return HTML
// class components is the old way and function components using Hooks = new way
//Function components:
// function Car() {
//   return (
//     <h2>Hi, I am a car!</h2>
//   );
// }

// createRoot(document.getElementById('next')).render(
//   <Car />
// )

//Arguments are passed into components using props (stand for properties)
//use send arguments into the componenets as HTML attributes
// function Car(props) {
//   return (
//     <h2> I am a {props.color} Car!</h2>
//   );
// }

// createRoot(document.getElementById('next')).render(
//   <Car color="red" /> // pass red to props, Output: I am a red Car!
// )

//Components in Components
// function Car() {
//   return (
//     <h2>I am a Car!</h2>
//   );
// }

// function Garage() {
//   return (
//     <>
//       <h1>Who lives in my Garage</h1>
//       <Car />
//       <Car /> {/* can render multiple times*/}
//     </>
//   )
// }
// createRoot(document.getElementById('next')).render(
//   <Garage />
// );

//two different cars using arguments
// function Car(props) { // have to pass props
//   return (
//     <h2>I am a {props.brand}!</h2>
//   );
// }

// function Garage() {
//   return (
//     <>
//       <h1>Who lives in my Garage</h1>
//       <Car brand="Ford" />
//       <Car brand="BMW" />
//     </>
//   );
// }
// createRoot(document.getElementById('next')).render(
//   <Garage />
// );
// Good practice to create a new .jsx for Vehicles, split components into different files
// At the top of main.jsx, import Vehicle.jsx

// createRoot(document.getElementById('next')).render(
//   <>
//   {<Car />}
//   {<Garage />}
//   </>
// );

// createRoot(document.getElementById('next')).render(
//   <Car brand="Ford" model="Mustang" color="red" year={1969}/>
// );
// let x = "Ford";
// let y = [1964, 1965, 1966];
// let z = {name: "Ford", model: "Mustang"};

// createRoot(document.getElementById('next')).render(
//   // <Car brand={x} />
//   <Car years={y} carinfo={z} />
// );

//Events: onClick = {}
// function Football() {
//   const shoot = () => {
//     alert("Great Shot");
//   }

//   return (
//   <button onClick={shoot}>Take the shot!</button>
//   );
// }

// createRoot(document.getElementById('next')).render(<Football />);

// function Football() {
//   const shoot = (a) => {
//     alert(a);
//   }

//   return (
//     <button onClick={() => shoot("Goal!")}>Take the shot!</button>
//   );
// }

// createRoot(document.getElementById('root')).render(
//   <Football />
// );

// function Football() {
//   const shoot = (a, b) => {
//     alert(b.type);
//     /*
//     'b' represents the React event that triggered the function,
//     in this case the 'click' event
//     */
//   }

//   return (
//     <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
//   );
// }

// createRoot(document.getElementById('next')).render(
//   <Football />
// );

//Conditional rendering: Ternary Operators
// function MissedGoal() {
//   return <h1>MISSED!</h1>;
// }

// function MadeGoal() {
//   return <h1>Goal!</h1>;
// }

// function Goal(props) {
//   const isGoal = props.isGoal;
//   return (
//     <>
//       { isGoal ? <MadeGoal/> : <MissedGoal/> }
//     </>
//   );
// }

// createRoot(document.getElementById('next')).render(
//   <Goal isGoal={false} />
// );

//Render Lists: map() method
// function MyCars() {
//   const cars = ['Ford', 'BMW', 'Audi'];
//   return (
//     <>
//       <h1>My Cars:</h1>
//       <ul>
//         {cars.map((car) => <li>I am a { car }</li>)}
//       </ul>
//     </>
//   );
// }

// createRoot(document.getElementById('next')).render(
//   <MyCars />
// );

//Best practice is to use a key in React Lists, do not use indexes for dynamic lists.
// function MyCars() {
//   const cars = [
//     {id: 1001, brand: 'Ford'},
//     {id: 1002, brand: 'BMW'},
//     {id: 1003, brand: 'Audi'}
//   ];
//   return (
//     <>
//       <h1>My Cars:</h1>
//       <ul>
//         {cars.map((car) => <li key={car.id}>I am a { car.brand }</li>)}
//       </ul>
//     </>
//   );
// }

// createRoot(document.getElementById('next')).render(
//   <MyCars />
// );

//Adding Forms: browser defaults to refreshe each input, not what you want
// function MyForm() {
//   return (
//     <form>
//       <label>Enter your name:
//         <input type="text" />
//       </label>
//     </form>
//   )
// }

// createRoot(document.getElementById('form')).render(
//   <MyForm />
// );

//Instead use Controlled Components by React: useState Hook, onChange
// function MyForm() {
//   const [name, setName] = useState("");

//   function handleChange(e) {
//     setName(e.target.value);
//   }

//   return (
//     <form>
//       <label>Enter your name:
//         <input
//           type="text" 
//           value={name}
//           onChange={handleChange}
//         />
//       </label>
//       <p>Current value: {name}</p>
//     </form>
//   )
// }

// createRoot(document.getElementById('root')).render(
//   <MyForm />
// );

//Submitting Forms:
// function MyForm() {
//   const [name, setName] = useState("");

//   function handleChange(e) {
//     setName(e.target.value);
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     alert(name);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Enter your name:
//         <input
//           type="text" 
//           value={name}
//           onChange={handleChange}
//         />
//       </label>
//       <input type="submit" />
//     </form>
//   )
// }

// createRoot(document.getElementById('next')).render(
//   <MyForm />
// );

//Textarea: use the useState Hook to manage the value of the textarea
//React can now use it like any other input element
// function MyForm() {
//   const [mytxt, setMytxt] = useState("");

//   function handleChange(e) {
//     setMytxt(e.target.value);
//   }

//   return (
//     <form>
//       <label>Write here:
//         <textarea
//           value={mytxt}
//           onChange={handleChange}
//         />
//       </label>
//       <p>Current value: {mytxt}</p>
//     </form>
//   )
// }

// createRoot(document.getElementById('next')).render(
//   <MyForm />
// );

//Select: dropdown list or select box, defined with a value attribute on the select tag

// function MyForm() {
//   const [myCar, setMyCar] = useState("Volvo");

//   const handleChange = (event) => {
//     setMyCar(event.target.value)
//   }

//   return (
//     <form>
//       <select value={myCar} onChange={handleChange}>
//         <option value="Ford">Ford</option>
//         <option value="Volvo">Volvo</option>
//         <option value="Fiat">Fiat</option>
//       </select>
//     </form>
//   );
// }

// createRoot(document.getElementById('next')).render(
//   <MyForm />
// );

//Forms: Multiple Input Fields, either use a useState() for each input or an {} to hold all inputs
// function MyForm() {
//   const [inputs, setInputs] = useState({}); // use {} not ""

//   const handleChange = (e) => { // updated to handle multiple input fields
//     const name = e.target.name;
//     const value = e.target.value;
//     setInputs(values => ({...values, [name]: value}))
//   }

//   return (
//     <form>
//       <label>First name:
//       <input 
//         type="text" 
//         name="firstname" 
//         value={inputs.firstname} 
//         onChange={handleChange}
//       />
//       </label>
//       <label>Last name:
//         <input 
//           type="text" 
//           name="lastname" 
//           value={inputs.lastname} 
//           onChange={handleChange}
//         />
//       </label>
//       <p>Current values: {inputs.firstname} {inputs.lastname}</p>
//     </form>
//   )
// }

// createRoot(document.getElementById('next')).render(
//   <MyForm />
// );

//Forms: checkboxes, use checked attribute instead of value to control its state
//In the handleChange function, use the e.target.type property check if the current input is a checkbox or not.
// function MyForm() {
//   const [inputs, setInputs] = useState({});

//   const handleChange = (e) => {
//     const target = e.target;
//     const value = target.type === 'checkbox' ? target.checked : target.value;
//     const name = target.name;
//     setInputs(values => ({...values, [name]: value}))
//   }

//   const handleSubmit = (event) => {
//     let fillings = '';
//     if (inputs.tomato) fillings += 'tomato';
//     if (inputs.onion) {
//       if (inputs.tomato) fillings += ' and ';
//       fillings += 'onion';
//     }
//     if (fillings == '') fillings = 'no fillings';
//     alert(`${inputs.firstname} wants a burger with ${fillings}`);
//     event.preventDefault();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>My name is:
//       <input 
//         type="text" 
//         name="firstname" 
//         value={inputs.firstname} 
//         onChange={handleChange}
//       />
//       </label>

//       <p>I want a burger with:</p>
//       <label>Tomato:
//       <input 
//         type="checkbox" 
//         name="tomato" 
//         checked={inputs.tomato} 
//         onChange={handleChange}
//       />
//       </label>
//       <label>Onion:
//         <input 
//           type="checkbox" 
//           name="onion" 
//           checked={inputs.onion} 
//           onChange={handleChange}
//         />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// createRoot(document.getElementById('next')).render(
//   <MyForm />
// );

//Forms: Radio Buttons
// function MyForm() {
//   const [selectedFruit, setSelectedFruit] = useState('banana');

//   const handleChange = (event) => {
//     setSelectedFruit(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     alert(`Your favorite fruit is: ${selectedFruit}`);
//     event.preventDefault();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <p>Select your favorite fruit:</p>
//       <label>
//         <input 
//           type="radio" 
//           name="fruit" 
//           value="apple" 
//           checked={selectedFruit === 'apple'} 
//           onChange={handleChange} 
//         /> Apple
//       </label>
//       <br />
//       <label>
//         <input 
//           type="radio" 
//           name="fruit" 
//           value="banana" 
//           checked={selectedFruit === 'banana'} 
//           onChange={handleChange} 
//         /> Banana
//       </label>
//       <br />
//       <label>
//         <input 
//           type="radio" 
//           name="fruit" 
//           value="orange" 
//           checked={selectedFruit === 'cherry'} 
//           onChange={handleChange} 
//         /> Cherry
//       </label>
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// createRoot(document.getElementById('root')).render(
//   <MyForm />
// );

// React Portals: for components like modals, tooltips, dialogs, floating menus, notifications
//Creating a Modal with Portal - can use with any UI element that needs to "break out" of its container's layout
// function Modal({ isOpen, onClose, children }) {
//   if (!isOpen) return null;

//   return createPortal(
//     <div style={{
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       backgroundColor: 'rgba(0, 0, 0, 0.5)',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center'
//     }}>
//       <div style={{
//         background: 'white',
//         padding: '20px',
//         borderRadius: '8px'
//       }}>
//         {children}
//         <button onClick={onClose}>Close</button>
//       </div>
//     </div>,
//     document.body
//   );
// }

// function MyApp() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <h1>My App</h1>
//       <button onClick={() => setIsOpen(true)}>
//         Open Modal
//       </button>

//       <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
//         <h2>Modal Content</h2>
//         <p>This content is rendered outside the App component!</p>
//       </Modal>
//     </div>
//   );
// }

// createRoot(document.getElementById('next')).render(
//   <MyApp />
// )

//Event Bubbling in Portals - creates a floating button outside container, updates both parent and floating button when clicked
// function PortalButton({ onClick, children }) {
//   return createPortal(
//     <button 
//       onClick={onClick}
//       style={{
//         position: 'fixed',
//         bottom: '20px',
//         right: '20px',
//         padding: '10px',
//         background: 'blue',
//         color: 'white'
//       }}>
//       {children}
//     </button>,
//     document.body
//   );
// }

// function App() {
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);

//   return (
//     <div
//       style={{
//         padding: '20px',
//         border: '2px solid black',
//         margin: '20px'
//       }}
//       onClick={() => {
//         setCount1(c => c + 1);
//       }}>
//       <h2>Div Clicked: {count1}</h2>
//       <h2>Button Clicked: {count2}</h2>      
//       <p>The floating button is rendered outside this box using a portal,
//           but its clicks still bubble up to this parent div!</p>
//       <p>Try to click the div element as well, to see the count increase</p>
      
//       <PortalButton
//         onClick={(e) => {
//           // This runs first
//           setCount2(c => c + 1);
//         }}>
//         Floating Button
//       </PortalButton>
//     </div>
//   );
// }

// createRoot(document.getElementById('root')).render(
//   <App />
// );

//React Suspense - lets you display an alternative HTML while waiting for code or data to load
// can be a component, text, or any valid content
//use cases: data fetching, loading components dynamically with React.lazy()
// import { Suspense } from 'react';
// import MyFruits from './Fruits';
// function App() {
//   return (
//     <div>
//       <Suspense fallback={<div>Loading...</div>}>
//         <MyFruits />
//       </Suspense>
//     </div>
//   );
// }

// createRoot(document.getElementById('root')).render(
//   <App />
// );

//Suspense, using lazy - lets you load a component dynamically
// const Cars = lazy(() => import('./Cars'));

// function App() {
//   return (
//     <div>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Cars />
//       </Suspense>
//     </div>
//   );
// }

// createRoot(document.getElementById('root')).render(
//   <App />
// );

//Example of one Suspense component can wrap multiple lazy components:
// header, content, and sidebar all in seperate files, imported in (I didn't make these files)
// import { createRoot } from 'react-dom/client';
// import { Suspense, lazy } from 'react';

// const Header = lazy(() => import('./Header'));
// const Content = lazy(() => import('./Content'));
// const Sidebar = lazy(() => import('./Sidebar'));

// function App() {
//   return (
//     <div>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Header />
//         <div style={{ display: 'flex' }}>
//           <Sidebar />
//           <Content />
//         </div>
//       </Suspense>
//     </div>
//   );
// }

// createRoot(document.getElementById('root')).render(
//   <App />
// );

//Styling React using CSS - use camelCase backgroundColor
// Inline Styling Example:
// const Header = () => {
//   return (
//     <>
//       <h1 style={{color: "red"}}>Hello Style!</h1>
//       <p>Add a little style!</p>
//     </>
//   );
// }
// createRoot(document.getElementById('next')).render(
//   <Header />
// )

//Example of creating a style object
// const Header = () => {
//   const myStyle = {
//     color: "white",
//     backgroundColor: "DodgerBlue",
//     padding: "10px",
//     fontFamily: "Sans-Serif"
//   };
//   return (
//     <>
//       <h1 style={myStyle}>Hello Style!</h1>
//       <p>Add a little style!</p>
//     </>
//   );
// }
// createRoot(document.getElementById('next')).render(
//   <Header />
// )

// CSS Stylesheet - MyStylesheet.css
// import './MyStylesheet.css';

// const Header = () => {
//   return (
//     <>
//       <h1>Hello Style!</h1>
//       <p>Add a little style!.</p>
//     </>
//   );
// }

// createRoot(document.getElementById('next')).render(
//   <Header />
// );

//CSS Modules - convenient for components placed in separate files
//use my-style.module.css
// import styles from './my-style.module.css'; 
  
// const Car = () => {
//   return <h1 className={styles.bigred}>Hello Car!</h1>;
// }
  
// createRoot(document.getElementById('next')).render(
//   <Car />
// );

// import styles from './Button.module.css';

// function App() {
//   return (
//     <div>
//       <button className={styles.mybutton}>
//         My Button
//       </button>
//     </div>
//   );
// }

// createRoot(document.getElementById('next')).render(
//   <App />
// );


//2 buttons with different styling
// import styles from './Button.module.css';

// function App() {
//   return (
//     <div>
//       <button className={`${styles.mybutton} ${styles.primary}`}>
//         My Primary Button
//       </button>
//       <button className={`${styles.mybutton} ${styles.secondary}`}>
//         My Secondary Button
//       </button>
//     </div>
//   );
// }
// createRoot(document.getElementById('next')).render(
//   <App />
// );

//Composing Classes
// import styles from './Button.module.css';
// function App() {
//   return (
//     <div>
//       <button className={styles.primary}>
//         Primary Button
//       </button>
//       <button className={styles.secondary}>
//         Secondary Button
//       </button>
//     </div>
//   );
// }
// createRoot(document.getElementById('next')).render(
//   <App />
// );

//Global Classes: :global syntax in css file, className=""
// import styles from './BlueHeader.module.css';

// function App() {
//   return (
//     <div>
//       <h1 className="myheader">
//         My Header
//       </h1>
//     </div>
//   );
// }
// createRoot(document.getElementById('next')).render(
//   <App />
// );


// Combine Global and Local classes
// import styles from './MyStyles.module.css';

// function App() {
//   return (
//     <div>
//       <h1 className="myheader">
//         My Header
//       </h1>
//       <p className={styles.myparagraph}>
//         My Paragraph
//       </p>
//     </div>
//   );
// }
// createRoot(document.getElementById('next')).render(
//   <App />
// );

//CSS-in-JS, write CSS directly into JavaScript code
// using  the popular styled-components library, npm install styled-components
// import styled from 'styled-components';

// const MyHeader = styled.h1`
//   padding: 10px 20px;
//   background-color: #007bff;
//   color: white;
// `;

// function App() {
//   return (
//     <>
//       <MyHeader>Welcome!</MyHeader>
//     </>
//   );
// }
// createRoot(document.getElementById('next')).render(
//   <App />
// );

//Props in Styled Components, CSS-in-JS
// import styled from 'styled-components';

// const Button = styled.button`
//   padding: 10px 20px;
//   border: none;
//   border-radius: 4px;
//   background-color: ${props => props.btntype === 'primary' ? '#007bff' : '#6c757d'};
//   color: white;
//   cursor: pointer;
// `;

// function App() {
//   return (
//     <div>
//       <Button btntype="primary">Primary Button</Button>
//       <br />
//       <br />
//       <Button>Secondary Button</Button>
//     </div>
//   );
// }
// createRoot(document.getElementById('next')).render(
//   <App />
// );

//Extending Styles - let multiple elements have the same styles to extend existing styled componenets
// import styled from 'styled-components';

// const Button = styled.button`
//   padding: 10px 20px;
//   border: none;
//   border-radius: 4px;
//   color: white;
//   cursor: pointer;
// `;

// const PrimaryButton = styled(Button)`
//   background-color: #007bff;
// `;

// const SuccessButton = styled(Button)`
//   background-color: #28a745;
// `;

// function App() {
//   return (
//     <div>
//       <PrimaryButton>Primary</PrimaryButton>
//       <SuccessButton>Success</SuccessButton>
//     </div>
//   );
// }
// createRoot(document.getElementById('next')).render(
//   <App />
// );

//Component-Scoped Styles - files created in CSS-in-JS are scoped to the component
//They are given unique names and can only be used in the component that imports them.

//Global Styles - will be given normal class names and available for all components
// import { createGlobalStyle } from 'styled-components';

// const GlobalStyle = createGlobalStyle`
//   h1 {
//     color: white;
//     background-color: purple;
//     font-family: Arial, sans-serif;
//   }

//   .myparagraph {
//     font-family: courier, monospace;
//     color: blue;
//   }
// `;

// function App() {
//   return (
//     <>
//       <GlobalStyle />
//       <h1>Welcome!</h1>
//       <p className="myparagraph">This paragraph is styled with global styles.</p>
//     </>
//   );
// }
// createRoot(document.getElementById('next')).render(
//   <App />
// );

//React Router - library that provides routing capabilities for React applications
  // Create multiple pages in your single-page application
  // Handle URL parameters and query strings
  // Manage browser history and navigation
  // Create nested routes and layouts
  // Implement protected routes for authentication
  // Without a router, your React application would be limited to a single page with no way to navigate between different views.
   //Install: npm install react-router-dom
     //Wrap your app with BrowserRouter

// Example: 
//     function App() {
//   return (
//     <BrowserRouter>
//       {/* Your app content */}
//     </BrowserRouter>
//   );
// }

//Create Views - can put each in a different file
// function Home() {
//   return <h1>Home Page</h1>;
// }

// function About() {
//   return <h1>About Page</h1>;
// }

// function Contact() {
//   return <h1>Contact Page</h1>;
// }

//Basic Routing - uses 3 main components
  //Link: Creates navigation links that update the URL
  //Routes: A container for all your route definitions
  //Route: Defines a mapping between a URL path and a component

//Example:
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// function Home() {
//   return <h1>Home Page</h1>;
// }

// function About() {
//   return <h1>About Page</h1>;
// }

// function Contact() {
//   return <h1>Contact Page</h1>;
// }

// function App() {
//   return (
//     <BrowserRouter>
//       {/* Navigation */}
//       <nav>
//         <Link to="/">Home</Link> |{" "}
//         <Link to="/about">About</Link> |{" "}
//         <Link to="/contact">Contact</Link>
//       </nav>

//       {/* Routes */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
// createRoot(document.getElementById('next')).render(
//   <App />
// );

//Nested Routes - Route inside a Route
  //Nested routes allow you change parts of the page when you navigate to a new URL, while other parts is not changed or reloaded, almost like having a page within a page.
  //Need to import the Outlet component from 'react-router-dom'

// import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

// function Home() {
//   return <h1>Home Page</h1>;
// }

// function Products() {
//   return (
//     <div>
//       <h1>Products Page</h1>
//       <nav style={{ marginBottom: '20px' }}>
//         <Link to="/products/car">Cars</Link> |{" "}
//         <Link to="/products/bike">Bikes</Link>
//       </nav> 
//       <Outlet /> 
//     </div>
//   );
// }

// function CarProducts() {
//   return (
//     <div>
//       <h2>Cars</h2>
//       <ul>
//         <li>Audi</li>
//         <li>BMW</li>
//         <li>Volvo</li>
//       </ul>
//     </div>
//   );
// }

// function BikeProducts() {
//   return (
//     <div>
//       <h2>Bikes</h2>
//       <ul>
//         <li>Yamaha</li>
//         <li>Suzuki</li>
//         <li>Honda</li>
//       </ul>
//     </div>
//   );
// }

// function Contact() {
//   return <h1>Contact Page</h1>;
// }

// function App() {
//   return (
//     <BrowserRouter>
//       {/* Navigation */}
//       <nav>
//         <Link to="/">Home</Link> |{" "}
//         <Link to="/products">Products</Link> |{" "}
//         <Link to="/contact">Contact</Link>
//       </nav>

//       {/* Routes */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<Products />}>
//           <Route path="car" element={<CarProducts />} />
//           <Route path="bike" element={<BikeProducts />} />
//         </Route>
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
// createRoot(document.getElementById('next')).render(
//   <App />
// );

//Style Active Links - NavLink, import NavLink component
// import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
// // Style function for active links
// const navLinkStyles = ({ isActive }) => ({
//   color: isActive ? '#007bff' : '#333',
//   textDecoration: isActive ? 'none' : 'underline',
//   fontWeight: isActive ? 'bold' : 'normal',
//   padding: '5px 10px'
// });

// function Home() {
//   return <h1>Home Page</h1>;
// }

// function About() {
//   return <h1>About Page</h1>;
// }

// function Contact() {
//   return <h1>Contact Page</h1>;
// }

// function App() {
//   return (
//     <BrowserRouter>
//       {/* Navigation with NavLink for active styling */}
//       <nav style={{ marginBottom: '20px' }}>
//         <NavLink to="/" style={navLinkStyles}>Home</NavLink> |{" "}
//         <NavLink to="/about" style={navLinkStyles}>About</NavLink> |{" "}
//         <NavLink to="/contact" style={navLinkStyles}>Contact</NavLink>
//       </nav>

//       {/* Routes */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
// createRoot(document.getElementById('next')).render(
//   <App />
// );


//URL Parameters: In the path http://localhost:5173/customer/Tobias, Tobias is the URL parameter
// to access parameters React Router provides the useParams hook
// use :parameter at end of the path 
// import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

// function Info() {
//   const { firstname } = useParams();
//   return <h1>Hello, {firstname}!</h1>;
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <nav>
//         <Link to="/customer/Emil">Emil</Link> | 
//         <Link to="/customer/Tobias">Tobias</Link> |
//         <Link to="/customer/Linus">Linus</Link>
//       </nav>

//       <Routes>
//         <Route path="/customer/:firstname" element={<Info />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
// createRoot(document.getElementById('next')).render(
//   <App />
// );



//Framer Motion Animations - npm install framer-motion
// import { motion } from "framer-motion";

// function MyAnimatedComponent() {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 3 }} // was 1
//     >
//       This is an animated div.
//     </motion.div>
//   );
// }
// createRoot(document.getElementById('next')).render(
//   <MyAnimatedComponent />
// );

//React Transitions - keeps your React App responsive during heavy updates
// import { useTransition } from 'react';

// function SearchBar() {
//   const [text, setText] = useState('');
//   const [results, setResults] = useState('');
//   const [isPending, startTransition] = useTransition();

//   const handleChange = (e) => {
//     // Urgent: Update input right away
//     setText(e.target.value);

//     // Non-urgent: Update search results
//     startTransition(() => {
//       setResults(e.target.value);
//     });
//   };

//   return (
//     <div>
//       <input value={text} onChange={handleChange} />
//       {isPending ? (
//         <p>Loading...</p>
//       ) : (
//         <p>Search results for: {results}</p>
//       )}
//     </div>
//   );
// }
// createRoot(document.getElementById('next')).render(
//   <App />
// );

//React forwardRef - let's component pass a reference to one of its children
//use cases: focusing input elements, triggering animations, integrate with third-party libraries
// only use if you need direct access to a DOM element.
// import { forwardRef, useRef } from 'react';

// const MyInput = forwardRef((props, ref) => (
//   <input ref={ref} {...props} />
// ));

// function App() {
//   const inputRef = useRef();

//   const focusInput = () => {
//     inputRef.current.focus();
//   };

//   return (
//     <div>
//       <MyInput ref={inputRef} placeholder="Type here..." />
//       <button onClick={focusInput}>Focus Input</button>
//     </div>
//   );
// }

// createRoot(document.getElementById('next')).render(
//   <App />
// );

//HOC or Higher Order Components - wrapper that adds extra features
// This is our HOC - it adds a border to any component
// function withBorder(WrappedComponent) {
//   return function NewComponent(props) {
//     return (
//       <div style={{ border: '2px solid blue', padding: '10px' }}>
//         <WrappedComponent {...props} />
//       </div>
//     );
//   };
// }

// // Simple component without border
// function Greeting({ name }) {
//   return <h1>Hello, {name}!</h1>;
// }

// // Create a new component with border
// const GreetingWithBorder = withBorder(Greeting);

// function App() {
//   return (
//     <div>
//       <Greeting name="John" />
//       <GreetingWithBorder name="Jane" />
//     </div>
//   );
// }

// createRoot(document.getElementById('next')).render(
//   <App />
// );

//React Sass Styling
//Sass is a CSS pre-processor, sass files are executed on the server and sends CSS to browser
//adds extra features to CSS like variables, nesting, mixins, and more
//npm install sass
// import './MyStyle.scss';

// function MyHeader() {
//   return (
//     <h1>My Header</h1>
//   );
// }
// createRoot(document.getElementById('next')).render(
//   <MyHeader />
// );

//Sass Modules
//sass:color module has the option to make a color darker or lighter
// import './MyStyle.scss';

// function MyHeader() {
//   return (
//     <div>
//       <h1>My Header 1</h1>
//       <h2>My Header 2</h2>
//       <h3>My Header 3</h3>
//     </div>
//   );
// }

// createRoot(document.getElementById('form')).render(
//   <MyHeader />
// );

//Hooks are functions that let you "hook into" React state and lifecycle features from funcitonal components, 
//here use useState Hook to keep track of the application state.
//State means the application data or properties that need to be tracked
// function FavoriteColor() {
//   const [color, setColor] = useState("red");

//   return (
//     <>
//       <h1>My favorite color is {color}!</h1>
//       <button
//         type="button"
//         onClick={() => setColor("blue")}
//       >Blue</button>
//       <button
//         type="button"
//         onClick={() => setColor("red")}
//       >Red</button>
//       <button
//         type="button"
//         onClick={() => setColor("pink")}
//       >Pink</button>
//       <button
//         type="button"
//         onClick={() => setColor("green")}
//       >Green</button>
//     </>
//   );
// }

// createRoot(document.getElementById('root')).render(
//   <FavoriteColor />
// );

//useState Hook - it accepts an initial state and returns two values
// the current state and a function that updates the state
// import { useState } from "react";
// color, is our current state and setColor, is the function that is used to update our state
// initial state is set to "red".

// function FavoriteColor() {
//   const [color, setColor] = useState("red");

//     return <h1>My favorite color is {color}!</h1>
// }

// createRoot(document.getElementById('root')).render(
//   <FavoriteColor />
// );

//update State use state updater function 
// function FavoriteColor() {
//   const [color, setColor] = useState("red");

//   return (
//     <>
//       <h1>My favorite color is {color}!</h1>
//       <button
//         type="button"
//         onClick={() => setColor("blue")}
//       >Blue</button>
//     </>
//   )
// }

// createRoot(document.getElementById('root')).render(
//   <FavoriteColor />
// );

//Create a single Hook that holds an object:
// function MyCar() {
//   const [car, setCar] = useState({
//     brand: "Ford",
//     model: "Mustang",
//     year: "1964",
//     color: "red"
//   });

//   const updateColor = () => {
//     setCar(previousState => {
//      return { ...previousState, color: "blue" }
//   });
// }
//   return (
//     <>
//       <h1>My {car.brand}</h1>
//       <p>
//         It is a {car.color} {car.model} from {car.year}.
//       </p>
//       <button 
//        type="button"
//         onClick={updateColor}
//       >Blue</button>
//     </>
//   )
 
// }


// createRoot(document.getElementById('root')).render(
//   <MyCar />
// );

//When state is updated, the entire state gets overwritten
//Use spread operator if only wanting to update a certain item
// const updateColor = () => {
//   setCar(previousState => {
//     return { ...previousState, color: "blue" }
//   });
// }

//useEffect Hook: allow you to perform side effects in components
//fetching data, directly updating the DOM, and timers
//accepts 2 arguments, second one is optional
//useEffect runs on every render, always include the second parameter which accepts an array, pass an array.

//Timer: use setTimeout() to count 1 second after initial render
// import {useEffect} from 'react';
// function Timer() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 1000);
//     });
//     return <h1>I've rendered {count} times</h1>;
//   }

// createRoot(document.getElementById('next')).render(
//   <Timer />
// );

// import {useEffect} from 'react';
// function Timer() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 1000);
//     }, []);//add array brackets here to only render once
//     return <h1>I've rendered {count} times</h1>;
//   }

// createRoot(document.getElementById('next')).render(
//   <Timer />
// );

//If the count variable is updates, the effect will run again.
// import { useEffect } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);
//   const [calculation, setCalculation] = useState(0);

//   useEffect(() => {
//     setCalculation(() => count * 2);
//   }, [count]) // add the count variable here

//   return (
//     <>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount((c) => c + 1)}>+</button>
//       <p>Calculation: {calculation}</p>
//     </>
//   );
// }
// createRoot(document.getElementById('next')).render(
//   <Counter />
// );

//Effect Cleanup - use to reduce memory leaks
//Timeouts, subscriptions, event listeners, and other effects should be disposed of once no longer needed
//include a return function at end of the useEffect Hook

// import { useEffect } from 'react';

// function Timer() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let timer = setTimeout(() => { // to clear timer we have to name it
//       setCount((count) => count + 1);
//     }, 1000);

//     return () => clearTimeout(timer) // use timer here
//   }, []);

//   return <h1>I've rendered {count} times!</h1>;
// }

// createRoot(document.getElementById('root')).render(
//   <Timer />
// );

//useContext Hook - Context is a way to manage state globally
// can be used with useState to share state between deeply nested components
//Example without Context:
// function Component1() {
//   const [user, setUser] = useState("Linus");

//   return (
//     <>
//       <h1>{`Hello ${user}!`}</h1>
//       <Component2 user={user} />
//     </>
//   );
// }

// function Component2({ user }) {
//   return (
//     <>
//       <h1>Component 2</h1>
//       <Component3 user={user} /> {/*Prop drilling*/}
//     </>
//   );
// }

// function Component3({ user }) {
//   return (
//     <>
//       <h1>Component 3</h1>
//       <h2>{`Hello ${user} again!`}</h2>
//     </>
//   );
// }

// createRoot(document.getElementById('root')).render(
//   <Component1 />
// );

//The Problem above is you have to pass props, prop drilling
//Solution: create context and use the context provider to wrap components that need the state Context

// import { createContext, useContext } from 'react';
// const UserContext = createContext(); //createContext

// function Component1() {
//   const [user, setUser] = useState("Linus");

//   return (
//     <UserContext.Provider value={user}>
//       <h1>{`Hello ${user}!`}</h1>
//       <Component2 />
//     </UserContext.Provider>
//   );
// }

// function Component2() {
//   return (
//     <>
//       <h1>Component 2</h1>
//       <Component3 />
//     </>
//   );
// }

// function Component3() {
//   const user = useContext(UserContext);

//   return (
//     <>
//       <h1>Component 3</h1>
//       <h2>{`Hello ${user} again!`}</h2>
//     </>
//   );
// }

// createRoot(document.getElementById('next')).render(
//   <Component1 />
// );

//useRef Hook - persist values between renders
//used to store a mutable value that does not cause a re-render when updated
//used to access DOM element directly
// initialize useRef with  the value 0: useRef(0)

// import { useRef, useEffect} from 'react';

// function App() {
//   const [inputValue, setInputValue] = useState("");
//   const count = useRef(0);//useRef only returns one item. an Object called current. const count = {current: 0}
// // access the count by using count.current

//   useEffect(() => {
//     count.current = count.current + 1;
//   });

//   return (
//     <>
//       <p>Type in the input field:</p>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <h1>Render Count: {count.current}</h1>
//     </>
//   );
// }

// createRoot(document.getElementById('root')).render(
//   <App />
// );

//DOM elements
// import { useRef } from 'react';
// function App() {
//   const inputElement = useRef();

//   const focusInput = () => {
//     inputElement.current.focus();
//   };

//   return (
//     <>
//       <input type="text" ref={inputElement} />
//       <button onClick={focusInput}>Focus Input</button>
//     </>
//   );
// }

// createRoot(document.getElementById('root')).render(
//   <App />
// );

//Tracking State Changes
// import { useRef, useEffect} from 'react';
// function App() {
//   const [inputValue, setInputValue] = useState("");
//   const previousInputValue = useRef("");

//   useEffect(() => {
//     previousInputValue.current = inputValue;
//   }, [inputValue]);

//   return (
//     <>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <h2>Current Value: {inputValue}</h2>
//       <h2>Previous Value: {previousInputValue.current}</h2>
//     </>
//   );
// }

// createRoot(document.getElementById('root')).render(
//   <App />
// );

//useReducer Hook - allows for custom state logic, accepts 3 arguments
//useReducer(reducer, initialState, init) (reducer function, a value, init is used to initialize state), returns the current staet and a dispatch method
// import { useReducer } from 'react';

// const initialScore = [
//   {
//     id: 1,
//     score: 0,
//     name: "John",
//   },
//   {
//     id: 2,
//     score: 0,
//     name: "Sally",
//   },
// ];

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "INCREASE":
//       return state.map((player) => {
//         if (player.id === action.id) {
//           return { ...player, score: player.score + 1 };
//         } else {
//           return player;
//         }
//       });
//     default:
//       return state;
//   }
// };

// function Score() {
//   const [score, dispatch] = useReducer(reducer, initialScore);

//   const handleIncrease = (player) => {
//     dispatch({ type: "INCREASE", id: player.id });
//   };

//   return (
//     <>
//       {score.map((player) => (
//         <div key={player.id}>
//           <label>
//             <input
//               type="button"
//               onClick={() => handleIncrease(player)}
//               value={player.name}
//             />
//             {player.score}
//           </label>
//         </div>
//       ))}
//     </>
//   );
// }

// createRoot(document.getElementById('root')).render(
//   <Score />
// );

//useCallback Hook - used to memoize a callback function meaning caching the result of a function, so it doesn't need to be recalculated
//useCallback returns a memoized function; useMemo returns a memoized value
// accepts 2 arguments useCallback(callback, dependencies)

//Example Without useCallback:
// Child component that receives a function prop
// const Button = React.memo(({ onClick, text }) => {
//   alert(`Child ${text} button rendered`);
//   return <button onClick={onClick}>{text}</button>;
// });

// // Parent component without useCallback
// function WithoutCallbackExample() {
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);

//   // This function is recreated on every render
//   const handleClick1 = () => {
//     setCount1(count1 + 1);
//   };

//   const handleClick2 = () => {
//     setCount2(count2 + 1);
//   };

//   alert("Parent rendered");
//   return (
//     <div>
//       <h2>Without useCallback:</h2>
//       <p>Count 1: {count1}</p>
//       <p>Count 2: {count2}</p>
//       <Button onClick={handleClick1} text="Button 1" />
//       <Button onClick={handleClick2} text="Button 2" />
//     </div>
//   );
// }

// createRoot(document.getElementById('root')).render(
//   <WithoutCallbackExample />
// );  


//With useCallback:
// 

//useMemo: returns a memoized value, helps with performance
//Example of a poor performing function

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState([]);
//   const calculation = expensiveCalculation(count);

//   const increment = () => {
//     setCount((c) => c + 1);
//   };
//   const addTodo = () => {
//     setTodos((t) => [...t, "New Todo"]);
//   };

//   return (
//     <div>
//       <div>
//         <h2>My Todos</h2>
//         {todos.map((todo, index) => {
//           return <p key={index}>{todo}</p>;
//         })}
//         <button onClick={addTodo}>Add Todo</button>
//       </div>
//       <hr />
//       <div>
//         Count: {count}
//         <button onClick={increment}>+</button>
//         <h2>Expensive Calculation</h2>
//         {calculation}
//         <p>Note that this example executes the expensive function also when you click on the Add Todo button.</p>
//       </div>
//     </div>
//   );
// };

// const expensiveCalculation = (num) => {
//   console.log("Calculating...");
//   for (let i = 0; i < 1000000000; i++) {
//     num += 1;
//   }
//   return num;
// };

// createRoot(document.getElementById('root')).render(
//   <App />
// );

//same function now with useMemo
// import { useMemo } from 'react'

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState([]);
//   const calculation = useMemo(() => expensiveCalculation(count), [count]);

//   const increment = () => {
//     setCount((c) => c + 1);
//   };
//   const addTodo = () => {
//     setTodos((t) => [...t, "New Todo"]);
//   };

//   return (
//     <div>
//       <div>
//         <h2>My Todos</h2>
//         {todos.map((todo, index) => {
//           return <p key={index}>{todo}</p>;
//         })}
//         <button onClick={addTodo}>Add Todo</button>
//       </div>
//       <hr />
//       <div>
//         Count: {count}
//         <button onClick={increment}>+</button>
//         <h2>Expensive Calculation</h2>
//         {calculation}
//       </div>
//     </div>
//   );
// };

// const expensiveCalculation = (num) => {
//   console.log("Calculating...");
//   for (let i = 0; i < 1000000000; i++) {
//     num += 1;
//   }
//   return num;
// };

// createRoot(document.getElementById('root')).render(
//   <App />
// );

//Custom Hooks - 
//Build a Hook Exercise:

//First an example without a custom Hook, fetching data from a URL and displaying it.
// import { useEffect } from 'react';


// const Home = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//       .then((res) => res.json())
//       .then((data) => setData(data));
//  }, []);

//   return (
//     <>
//       {data &&
//         data.map((item) => {
//           return <p key={item.id}>{item.title}</p>;
//         })}
//     </>
//   );
// };

// createRoot(document.getElementById('root')).render(
//   <Home />
// );

//We may need the logic behind the fetch in other components, so turn that into a custom Hook
// move fetch logic to a new file to be used as a custom Hook
import useFetch from "../useFetchNotes";

const Home = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};

createRoot(document.getElementById('root')).render(
  <Home />
);