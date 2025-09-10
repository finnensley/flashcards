import React, { useState } from "react";
import "./FlashcardLoader.css";
import {motion} from "framer-motion";

const apiKey = "oqqFU5lnrqOeNJIXJgwJOd8aVjpmKLXaX4wN8xrh";
const urls = {
  Linux: `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=10&category=linux`,
  HTML: `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=10&category=html`,
  React: `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=10&category=react`,
  DevOps: `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=10&category=devops`,
  LeetCode: `https://leetcode-api.p.rapidapi.com/leetcode/top-100?skip=3&limit=10`,
  Javascript: `http://localhost:8080/questions`,
};


  /*Add CSS, if find api*/


function escapeHTML(str) {
  if (!str) return "";
  // return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return str;
}

function FlashcardLoader() {
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState("");
  const [flipped, setFlipped] = useState({});
  const [selected, setSelected] = useState({});
  const [currentIdx, setCurrentIdx] = useState(0);

  async function fetchQuiz(url) {
    console.log("fetchQuiz called with url:", url);
    try {
      //If local JS, fetch both questions and answers and combine, can delete this if rework tables in db to one table with both q's and a's
      if (url === urls.Javascript) {
        const qRes = await fetch(url);
        const questionsData = await qRes.json();
        console.log("QuestionsData:", questionsData);

        const aRes = await fetch("http://localhost:8080/answers");
        const answerData = await aRes.json();
        console.log("AnswerData:", answerData);

        // Combine answers with questions
        const combined = questionsData.map(q => ({
          ...q,
          answers: answerData
          .filter(a => a.question_id === q.question_id)
          .reduce((acc, a) => {
            acc[String(a.option_id)] = a.option_text;
            return acc;
          }, {}),
          correct_answers: answerData
          .filter(a => a.question_id === q.question_id)
          .reduce((acc, a) => {
            acc[String(a.option_id)] = a.is_correct ? "true" : "false";
            return acc;
          }, {})
        }));
        setQuestions(combined);
      } else {

      //For API categories, just set questions
      const response = await fetch(url);
      const data = await response.json();
      setQuestions(Array.isArray(data) ? data : []);
      }
      setError("");
      setCurrentIdx(0); // Always start at first card
    } catch (err) {
      setError(err.message);
      setQuestions([]);
    }
  }

  function handleClick(category) {
    fetchQuiz(urls[category]);
  }

  function handleSelection(idx) {
    setFlipped((prev) => ({ ...prev, [idx]: true }));
  }

  function handleFlipBack(idx) {
    setFlipped((prev) => ({ ...prev, [idx]: false }));
    setSelected((prev) => ({ ...prev, [idx]: "" })); // Resets to Choose One:
  }

  // function getChars() {
  //   const first8chars = answers[key].slice[...7,,]

  // }
 
  return (
    <div>
      <h2>Load Session By Category</h2>
      {/* loops through all the keys of the urls object{Linux, HTML, etc.} */}
      {/* for each key it creates a button with the category name as its label */}
      {/* onClick handler calls handleClick(cat), which fetches data for that category) */}
      {Object.keys(urls).map((cat) => (
        <button key={cat} onClick={() => handleClick(cat)}>
          {cat}
        </button>
      ))}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        {questions.length > 0 && questions[currentIdx] && (
            <motion.div
            key={currentIdx}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            >
            <div className="question-block" key={currentIdx}>
              <div
                className={`question-block-inner${
                  flipped[currentIdx] ? " flipped" : ""
                }`}
              >
                <div className="question-block-front">
                  <h3>
                    Question {currentIdx + 1}: {questions[currentIdx].question_text || questions[currentIdx].question}
                  </h3>
                  <br />
                  <div className="choices">
                    Answer Choices:
                    <select
                      value={selected[currentIdx] || ""}
                      onChange={(e) => {
                        setSelected((prev) => ({
                          ...prev,
                          [currentIdx]: e.target.value,
                        }));
                        handleSelection(currentIdx);
                      }}
                    >
                      <option value="">Choose one:</option>
                      {questions[currentIdx].answers &&
                        Object.keys(questions[currentIdx].answers).map((key) =>
                          questions[currentIdx].answers[key] ? (
                            <option key={key} value={escapeHTML(key)}>
                              {escapeHTML(questions[currentIdx].answers[key])}
                            </option>
                          ) : null
                        )}
                    </select>
                  </div>
                  <div className="row">
                    <div className="category">
                      Category: {questions[currentIdx].category}
                    </div>
                    <div className="level">
                      Level: {questions[currentIdx].difficulty}
                    </div>
                  </div>
                  {/* <div>Description: {q.description || ""}</div> */}
                </div>
                <div
                  className="question-block-back"
                  onClick={() => handleFlipBack(currentIdx)}
                >
                  <div className="answer-center">
                    Correct Answer:{" "}
                      {(() => {
                        const correctKey = Object.keys(questions[currentIdx].correct_answers).find(
                          (key) => questions[currentIdx].correct_answers[key] === "true"
                        );
                        if (!correctKey) return "N/A";
                        // Remove "_correct" from the key to get the answer key
                        const answerKey = correctKey.replace("_correct", "");
                        return questions[currentIdx].answers[answerKey] || "N/A";
                      })()} 
                  </div>
                  <p className="flip-to-front">(Click to flip back)</p>
                </div>
              </div>
            </div>
            </motion.div>
        )}
        {questions.length > 0 && currentIdx < questions.length - 1 && (
          <motion.button
           animate={{ opacity: 1 }}
           whileHover={{ scale: 1.1 }}
           onClick={() => setCurrentIdx(currentIdx + 1)}>
            Next
          </motion.button>
        )}

        {questions.length > 0 && currentIdx > 0 && (
          <button onClick={() => setCurrentIdx(currentIdx - 1)}>
            Previous
          </button>
        )}
      </div>
    </div>
  );
}

export default FlashcardLoader;
