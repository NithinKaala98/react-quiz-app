import React, {useState} from 'react';
import './App.css';

function App() {

const [showResult, setResult] = useState(false);
const [score, setScore] = useState(0);
const [currentqun, setCurrentqun] = useState(0);

const questions = [
  {
    text: "Which of the following can read and render HTML web pages ",
    options: [
      { id: 0, text: "Server", isCorrect: false },
      { id: 1, text: "head task", isCorrect: false },
      { id: 2, text: "empty", isCorrect: false },
      { id: 3, text: "Web server", isCorrect: true },
    ],
  },
  {
    text: "Among the following operators identify the one which is used to allocate memory to array variables in JavaScript?",
    options: [
      { id: 0, text: "new", isCorrect: true },
      { id: 1, text: "new malloc", isCorrect: false },
      { id: 2, text: "alloc", isCorrect: false },
      { id: 3, text: "malloc", isCorrect: false },
    ],
  },
  {
    text: "The latest HTML standard is?",
    options: [
      { id: 0, text: "HTML 4.0", isCorrect: false },
      { id: 1, text: "HTML 5.0", isCorrect: true },
      { id: 2, text: "HTML 6.0", isCorrect: false },
      { id: 3, text: "SGML", isCorrect: false },
    ],
  },
  {
    text: "Identify the range of byte data types in JavaScript?",
    options: [
      { id: 0, text: "-10 to 9", isCorrect: false },
      { id: 1, text: "-128 to 127", isCorrect: true },
      { id: 2, text: "-3257162 to 3257163", isCorrect: false },
      { id: 3, text: "-2435678665 to 2435678666", isCorrect: false },
    ],
  },
  {
    text: "Why were cookies designed?",
    options: [
      { id: 0, text: "For Client-side programmming", isCorrect: false },
      { id: 1, text: "For server-side progamming", isCorrect: true },
      { id: 2, text: "both", isCorrect: false },
      { id: 3, text: "none of the above", isCorrect: false },
    ],
  },
  {
    text: "What are variables used in JavaScript programs",
    options: [
      { id: 0, text: "varing randomly", isCorrect: false },
      { id: 1, text: "storing numbers, dates & other valueS", isCorrect: true },
      { id: 2, text: "used as header file", isCorrect: false },
      { id: 3, text: "none of the above", isCorrect: false },
    ],
  },
  {
    text: "Identify the incorrect HTML tag among the following?",
    options: [
      { id: 0, text: "input tag", isCorrect: false },
      { id: 1, text: "list tag", isCorrect: true },
      { id: 2, text: "array", isCorrect: false },
      { id: 3, text: "select tag", isCorrect: false },
    ],
  },
  {
    text: "Which of the following attribute is used for merging two or more adjacent columns?",
    options: [
      { id: 0, text: "ROWSPAN", isCorrect: false },
      { id: 1, text: "CELLSPACING", isCorrect: false},
      { id: 2, text: "COLSPAN", isCorrect: true  },
      { id: 3, text: "CELLPADDING", isCorrect: false },
    ],
  },
  {
    text: "Identify the empty or void element in HTML?",
    options: [
      { id: 0, text: "<br>", isCorrect: true },
      { id: 1, text: "<sup>", isCorrect: false },
      { id: 2, text: "<p>>", isCorrect: false },
      { id: 3, text: "<abbr>", isCorrect: false },
    ],
  },
  {
    text: "A website is a _______  cookie.?",
    options: [
      { id: 0, text: "volatile", isCorrect: false },
      { id: 1, text: "in transient", isCorrect: false },
      { id: 2, text: "transient", isCorrect: true },
      { id: 3, text: "non-volatile", isCorrect: false },
    ],
  },
];

const optionClicked = (isCorrect) => {
  // Increment the score
  if (isCorrect) {
    setScore(score + 1);
  }

  if (currentqun + 1 < questions.length) {
    setCurrentqun(currentqun + 1);
  } else {
    setResult(true);
  }
};

/* Resets the game back to default */
const restartGame = () => {
  setScore(0);
  setCurrentqun(0);
  setResult(false);
};

  return (
    <div className="App">
      
          {/* Headere */}
          <h1> MCQ's Quiz</h1>

          {/*current */}
          <h2>current score {score}</h2>

          { showResult ?
          
          <div className='result'>
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
    
          :

  
          <div className='qun-card'>
            <h2>  Question: {currentqun + 1} out of {questions.length}
            </h2>
            <h3 className="qun-text">{questions[currentqun].text}</h3>


            <ul>
            {questions[currentqun].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
          </div>
  }
</div>
          
  );
}

export default App;
