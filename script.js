const apiKey = "oqqFU5lnrqOeNJIXJgwJOd8aVjpmKLXaX4wN8xrh";
const linuxBtn = document.getElementById("Linux");
const linuxUrl = `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=10&category=linux`;
const htmlBtn = document.getElementById("HTML");
const htmlUrl = `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=10&category=html`;
const reactBtn = document.getElementById("React");
const reactUrl = `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=10&category=react`;
const devOpsBtn = document.getElementById("DevOps");
const devOpsUrl = `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=10&category=devops`;
const leetCodeBtn = document.getElementById("LeetCode");
const leetCodeUrl = 'https://leetcode-api.p.rapidapi.com/leetcode/top-100?skip=3&limit=10' 
const questionInput = document.getElementById("questionInput");

linuxBtn.addEventListener("click", () => {
    fetchQuiz(linuxUrl);
})

htmlBtn.addEventListener("click", () => {
    fetchQuiz(htmlUrl);
})

reactBtn.addEventListener("click", () => {
    fetchQuiz(reactUrl);
})

devOpsBtn.addEventListener("click", () => {
    fetchQuiz(devOpsUrl);
})

leetCodeBtn.addEventListener("click", () => {
    fetchQuiz(leetCodeUrl);
})
   

async function fetchQuiz(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        //handle data
        displayData(data);
    } catch (error) {
        console.error("Error fetching quiz: ", error);
        displayError(error.message);
    }
}

//not working for everything, look up
function escapeHTML(str) {
    if (!str) return "";
    return str.replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;");
}

function displayData(data) {
    // console.log("display called with:", typeof data);
    document.getElementById("errorMessage").textContent = "";

    if (!Array.isArray(data)) {

        //display object 
        let objHTML = "<div>API did not return questions. Response:</div><ul>";
        for (const key in data) {
            objHTML += `<li><strong>${escapeHTML(key)}:</strong> ${escapeHTML(String(data[key]))}</li>`;
        }
        objHTML += "</ul>";
        document.getElementById("choices").innerHTML = objHTML;
        return;
    }

    let allQuestionsHTML = "";

    data.forEach((questionObj, idx) => {
        let answersHTML = "";
        // console.log(`Question ${idx + 1} answers:`, questionObj.answers);
        for (const key in questionObj.answers) {
            if (questionObj.answers[key]) {
                answersHTML += `<option value="${escapeHTML(key)}">${escapeHTML(questionObj.answers[key])}</option>`;

            }
        }

        let correctAnswerText = "";
        for (const key in questionObj.correct_answers) {
            if (questionObj.correct_answers[key] === "true") {
                //key is like "answer_b_correct", so get "answer_b"
                const answerKey = key.replace("_correct", "");
                correctAnswerText = questionObj.answers[answerKey];
                break;
            }
        }
        
        allQuestionsHTML += `
        <div class="question-block">
          <h3>Question ${idx + 1}: ${questionObj.question}</h3>
          <div>Category: ${questionObj.category}</div>
          <div>Level: ${questionObj.difficulty}</div>
          <div>Description: ${questionObj.description || ""}</div>
          <div>Answer Choices: 
            <select>
            ${answersHTML}
            </select>
        </div>
          <div>Correct Answer: ${escapeHTML(correctAnswerText || "N/A")}</div>
        </div>
    `;
    });


    document.getElementById("choices").innerHTML = allQuestionsHTML;
    document.getElementById("category").textContent = "";
    document.getElementById("difficultyLevel").textContent = "";
    document.getElementById("description").textContent = "";
    document.getElementById("question").textContent = "";
 }

 function displayError(message) {
    document.getElementById("errorMessage").textContent = message;
 }
    
