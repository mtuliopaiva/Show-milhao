// CSS
import './App.css';

// Data
import questions from './data/questions.json';

// Components
import StartScreen from './components/StartScreen/StartScreen';

// Hooks
import { useState } from 'react';
import GameScreen from './components/GameScreen/GameScreen';
import GameOverScreen from './components/GameOverScreen/GameOverScreen';

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const startGame = () => {
    setGameStage(stages[1].name)
  }
  const giveUp = () => {
    setGameStage(stages[2].name)

  }

  const aleatoryQuestion = () => {
    const numberOfQuestions = questions.questions.length;
    const aleatoryNum = Math.floor(Math.random() * numberOfQuestions);

    return questions.questions[aleatoryNum];
    // console.log(questions.questions[aleatoryNum].question_text);

    // console.log(questions.questions[aleatoryNum].answers);

  }



  const [gameStage, setGameStage] = useState(stages[0].name);


  // const question = questions.questions[1];
  return (
    <div className="App">
      {gameStage == "start" && <StartScreen startGame={startGame} />}
      {gameStage == "game" && <GameScreen giveUp={giveUp} question={aleatoryQuestion()}/>}
      {gameStage == "end" && <GameOverScreen />}

    </div>
  );
}

export default App;


