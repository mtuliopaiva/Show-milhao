import styles from './GameScreen.module.css';



const GameScreen = ({ giveUp, question }) => {
  console.log(question.answers);
  return (
    <div>
      <h1>Tela do Jogo</h1>
      <div className={styles.container}>
        <div className={styles.columnOne}>Coluna 1
          <h2>
            <span className={styles.show}>Show</span>
            <span className={styles.do}>do</span>
            <span className={styles.milhao}>Milhão</span>
          </h2>
          <h3>{question.question_text}</h3>
          <p>1 {question.answers[0].answer_text}</p>
          <p>2 {question.answers[1].answer_text}</p>
          <p>3 {question.answers[2].answer_text}</p>
          <p>4 {question.answers[3].answer_text}</p>

          <div className={styles.container}>

            <button onClick={giveUp}>Parar</button>
            <button onClick={giveUp}>Confirma</button>

          </div>
          <div className={styles.containerThree}>
            <div>
              Card 1
            <p>Errar</p>
            </div>
            <div>
              Card 2
            <p>Parar</p>
            </div>
            <div>
              Card 3
            <p>Acertar</p>
            </div>

          </div>
        </div>
        <div className={styles.columnTwo}>Coluna 2</div>

      </div>

    </div>
  )
}

export default GameScreen