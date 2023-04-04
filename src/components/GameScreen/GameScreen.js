import styles from './GameScreen.module.css';


const GameScreen = () => {
  return (
    <div>
      <h1>Tela do Jogo</h1>
      <div class="grid grid-cols-3 gap-4">
        <div class="col">Column 1</div>
        <div class="col">Column 2</div>
        <div class="col">Column 3</div>
      </div>

    </div>
  )
}

export default GameScreen