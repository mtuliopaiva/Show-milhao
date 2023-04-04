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
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"},
];

function App() {
  const startGame = () => {
    setGameStage(stages[1].name)
  }

  const [gameStage, setGameStage] = useState(stages[1].name);


  const theme = questions.questions[0].question_text;
  return (
    <div className="App">
      {gameStage =="start" && <StartScreen startGame={startGame}/>}
      {gameStage =="game" && <GameScreen />}
      {gameStage =="end" && <GameOverScreen />}

    </div>
  );
}

export default App;


