import React, { useState } from "react";
import "./FlashcardLoader.css";

const apiKey = "oqqFU5lnrqOeNJIXJgwJOd8aVjpmKLXaX4wN8xrh";
const urls = {
  Linux: `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=10&category=linux`,
  HTML: `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=10&category=html`,
  React: `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=10&category=react`,
  DevOps: `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=10&category=devops`,
  LeetCode: `https://leetcode-api.p.rapidapi.com/leetcode/top-100?skip=3&limit=10`,
};

function escapeHTML(str) {
  if (!str) return "";
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function FlashcardLoader() {
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState("");

  async function fetchQuiz(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setError("");
      setQuestions(Array.isArray(data) ? data : []);
      if (!Array.isArray(data)) setError("API did not return questions.");
    } catch (err) {
      setError(err.message);
      setQuestions([]);
    }
  }
  function handleClick(category) {
    fetchQuiz(urls[category]);
  }

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
        {questions.map((q, idx) => (
          <div className="question-block" key={idx}>
            <div className="question-block-inner">
              <div className="question-block-front">
                  <h3>
                    Question {idx + 1}: {q.question}
                  </h3>
                  <div>Category: {q.category}</div>
                  <div>Level: {q.difficulty}</div>
                  <div>Description: {q.description || ""}</div>
                  <div>
                    Answer Choices:
                    <select>
                      {q.answers &&
                        Object.keys(q.answers).map((key) =>
                          q.answers[key] ? (
                            <option key={key} value={escapeHTML(key)}>
                              {escapeHTML(q.answers[key])}
                            </option>
                          ) : null
                        )}
                    </select>
                  </div>
                </div>
                <div className="question-block-back">
                  <div>
                    Correct Answer:{" "}
                    {q.correct_answers
                      ? Object.keys(q.correct_answers).find(
                          (key) => q.correct_answers[key] === "true"
                        )
                      : "N/A"}
                  </div>
                  {/*can add more info here if needed */}
                </div>
              </div>
            </div>
        ))}
      </div>
    </div>
 );
}

export default FlashcardLoader;
