const pythonBtn = document.getElementById("Python");

pythonBtn.addEventListener("click", () => {
  Python();
});

const url = 'https://python-quiz-questions.p.rapidapi.com/v1/python_questions?count=3&difficulty_easy=true&difficulty_medium=true&difficulty_hard=true&type_multiple_choice=true&type_snippets=true&type_text_input=true&topic_python_basics=true&topic_data_types_and_operations=true&topic_data_structures=true&topic_control_flow=true&topic_functions=true&topic_modules_and_packages=true&topic_file_handling=true&topic_object_oriented_programming=true&topic_exception_handling=true&topic_advanced_topics=true';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '61515043b6msh494267fcc3f13f9p108597jsn289575ba76fe',
		'x-rapidapi-host': 'python-quiz-questions.p.rapidapi.com'
	}
};

async function Python() {
try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);

    let html = "";

    result.forEach((q, idx) => { 
       html += `<div class="question-box">
        <h3>Question ${idx + 1}: ${q.question.text}<h3>
        <div>Topic: ${q.topic}</div>
        <div>Difficulty: ${q.difficulty}<div>
        ${q.question.source ? `<pre>${q.question.source.join('\n')}</pre>` : ""}
          <div>Answer Choices: 
        ${q.answers ? `<ul>` + q.answers.map(a =>          
            `<li${a.correct ? ' style="font-weight:bold;color:green;"' : ''}>${a.answer}</li>`
        ).join("") + `</ul>` : ""}
        ${q.snippets ? `<pre>${q.snippets.visibleSnippets.join('\n')}</pre>` : ""}
        </div>
        <div>${q.explanation && q.explanation[0] ? q.explanation[0].content.join("<br>") : ""}</div>
      </div><hr>`; 
    });

    document.getElementById("questions").innerHTML = html;
  } catch (error) {
    console.error(error);
    document.getElementById("questions").textContent = "Error loading questions.";
  };
};

//result:
//[{"id":1261,"topic":"Object-Oriented Programming","type":"snippets","difficulty":"medium","question":{"text":"Which method is used to customize the behavior of the `len()` function for user-defined classes?","source":["class BookCollection:"," def __init__(self, books):"," self.books = books"," "," def [Snippet](self):"," return [Snippet](self.books)","","my_books = BookCollection(['Book1', 'Book2', 'Book3'])","","print([Snippet](my_books))","# Output: 3"]},"snippets":{"visibleSnippets":["len","len","__len__","__len__"],"correctSnippets":["__len__","len","len"]},"explanation":[{"type":"text","content":["The `__len__` method is used to define the behavior of the `len()` function for a custom object.","","In this example, it returns the number of books in the `BookCollection` instance."]}]},
// {"id":1027,"topic":"Data Structures","type":"multipleChoice","difficulty":"medium","question":{"text":"Which data structure is immutable (cannot be changed) in Python?"},"answers":[{"answer":"List"},{"answer":"Set"},{"answer":"Dictionary"},{"answer":"Tuple","correct":true}],"explanation":[{"type":"text","content":["A tuple is immutable to ensure consistent hashability, allowing it to be used as keys in dictionaries or stored in sets.","","Immutability enhances performance and prevents unintended side effects by maintaining data integrity throughout the program."]}]},
// {"id":1011,"topic":"Control Flow","type":"multipleChoice","difficulty":"medium","question":{"text":"What is the output of the following code?","source":["a, b, c = 5, 10, 15","a, b, c = c, a, b","print(a, b, c)"]},"answers":[{"answer":"5 10 15"},{"answer":"10 15 5"},{"answer":"15 5 10","correct":true},{"answer":"15 10 5"}],"explanation":[{"type":"text","content":["The line `a, b, c = c, a, b` reassigns `a` to `c`, `b` to `a`, and `c` to `b`, resulting in the values 15, 5, and 10, respectively."]}]}]

