import React from 'react'

const GameOver = ({RetryPlay}) => {
  return (
    <div>
      <h1>Game Over</h1>
      <button onClick={RetryPlay}>Jogar Novamente</button>
    </div>
  )
}

export default GameOver