import "./App.css";

// React
import { useCallback, useState } from "react";
import { useEffect } from "react";

//DataBase
import { wordsList } from "./data/words";

//Components
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

const stages = [
  {id: 1, name:"start"},
  {id: 2, name:"game"},
  {id: 3, name:"END"},
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);
  
  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] =useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(3)
  const [score, setScore] = useState(0)

  const pickWordAndCategory = () => {
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
    //pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)];
    
    return {word, category}
  }

  pickWordAndCategory()


  //starts th secret word game
  const startGame = () => {
    //pcik word and pick category
    const { word, category } = pickWordAndCategory();
    console.log( category)
    console.log(word)
    console.log(word, category)

    //Create arrays of letters
    let wordLetters = word.split("");

    wordLetters = wordLetters.map((l) => l.toLowerCase())

    console.log(wordLetters)
    
    // Fill States
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  };


  //process the letter input
  const verifyLetter = () =>{
    setGameStage(stages[2].name);
    console.log("verificando Letras");
  };

  //Retry play again
  const RetryPlay =() =>{
    setGameStage(stages[0].name);
    console.log("Voltando para o game");
  };

  return (
    <div className="App">
      
   
      {gameStage === "start" && <StartScreen startGame={startGame} />}

      {gameStage === "game" && <Game 
      verifyLetter={verifyLetter}  
      pickedWord={pickedWord} 
      pickedCategory={pickedCategory} 
      letters={letters}
      guessedLetters={guessedLetters}
      wrongLetters={wrongLetters}
      guesses={guesses}
      score={score}
      />}

      {gameStage === "END" && <GameOver RetryPlay={RetryPlay}/>}
    </div>
  );
}


export default App;
