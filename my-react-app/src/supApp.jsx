import "./App.css";
import MyForm from "./supMyForm.jsx";
import FlashcardLoader from "./supFlashcardLoader.jsx";
import "./MyForm.css";
import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import SignIn from "./SignIn";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => setUser(user));
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );
    return () => listener.subscription.unsubscribe();
  }, []);

  return (
    <div>
          <button onClick={() => supabase.auth.signOut()}>Sign Out</button>
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
                {user ? (
                <MyForm user={user} />
              ) : (
                <SignIn />
              )}
              </div>
            </div>
          </div>
    </div>
  );
}

export default App;

// In terminal: npm run dev
