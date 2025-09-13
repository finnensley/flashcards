import "./App.css";
import MyForm from "./supMyForm.jsx";
import FlashcardLoader from "./supFlashcardLoader.jsx";
import { motion } from "framer-motion";
import "./MyForm.css";

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>DevFlashCards</h1>
        <button id="toggleModeBtn">💡</button>
      </header>
      <div className="flashcard-container">
        <FlashcardLoader />
      </div>
      <div className="create-flashcard">
        <h2>Create A Flashcard</h2>
        <div>
          <MyForm />
        </div>
      </div>
    </div>
  );
}

export default App;

// In terminal: npm run dev
