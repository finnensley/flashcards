import "./App.css";
import MyForm from "./MyForm.jsx";
import FlashcardLoader from "./FlashcardLoader.jsx";
import FlipboxAnimation from "./FlipboxAnimation.jsx";
import DbCall from "./dbApiCall.jsx";
import {motion} from "framer-motion";


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
        <FlashcardLoader />
        </div>
        <div>
        <DbCall />
        </div>
    </div>
 );
}

export default App;


// In terminal: npm run dev