import "./App.css";
import MyForm from "./MyForm.jsx";
import FlashcardLoader from "./FlashcardLoader.jsx";
import { motion } from "framer-motion";
import FlipboxAnimation from "./FlipboxAnimation.jsx";

function App() {
    return (
    <div className="container">
      <header>
        <h1>Flashcard Study Sessions</h1>
        <button id="toggleModeBtn">Dark Mode</button>
      </header>
      <MyForm />
      <h1>3D Flip Box (Horizontal)</h1>
      <h3>Hover over the box below:</h3>
    <FlipboxAnimation />
       <div>
        {/* <!-- could use a dropdown in form instead --> */}
        
        {/* <!-- <button id="CSS" type="button">CSS</button>
        <button id="JS" type="button">JS</button> --> */}
        <FlashcardLoader />
        </div>
    </div>
 );
}

export default App;
