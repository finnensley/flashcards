import React, { useState, useEffect } from "react";

function DbCall() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/questions") // Match backend port and endpoint
      .then((response) => response.json())
      .then((data) => {
        console.log("Questions:", data);
        setQuestions(data);
      })
      .catch((error) => console.error("Error fetching data", error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/answers") // Match backend port and endpoint
      .then((response) => response.json())
      .then((data) => setAnswers(data))
      .catch((error) => console.error("Error fetching data", error));
  }, []);

  return (
    <div>
      <h1>Questions</h1>
      <ul>
        {questions.map((item) => (
          <li key={item.question_id}>
            {item.question_text}({item.category}, {item.difficulty})
          </li> /*Adjust based on your table columns */
        ))}
      </ul>
      <h1>Answers</h1>
      <ul>
        {answers.map((item) => (
          <li key={item.option_id}>
            QID: {item.question_id} - {item.option_text}{" "}
            {item.is_correct ? "(Correct)" : ""}
          </li> /*Adjust based on your table columns */
        ))}
      </ul>
    </div>
  );
}

export default DbCall;
