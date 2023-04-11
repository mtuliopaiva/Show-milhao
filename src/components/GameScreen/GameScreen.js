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
          <div className={styles.content}>
            <div className={styles.question}>
              <h3>{question.question_text}</h3>
            </div>
            <div className={styles.alternatives}>
              <p>1 {question.answers[0].answer_text}</p>
              <p>2 {question.answers[1].answer_text}</p>
              <p>3 {question.answers[2].answer_text}</p>
              <p>4 {question.answers[3].answer_text}</p>
            </div>
          </div>

          <div className={styles.container}>

            <button onClick={giveUp}>Parar</button>
            <button onClick={giveUp}>Confirma</button>

          </div>
          <div className={styles.containerThree}>
            <div className={styles.card}>
              <span>Perde tudo</span>
              <p>Errar</p>
            </div>
            <div className={styles.card}>
              <span>R$ 30 mil</span>
              <p>Parar</p>
            </div>
            <div className={styles.card}>
              <span>R$ 50 mil</span>
              <p>Acertar</p>
            </div>

          </div>
        </div>
        <div className={styles.columnTwo}>
          <div className={styles.bar}>R$ 1.000.000</div>
          <div className={styles.bar}>R$ 500.000</div>
          <div className={styles.bar}>R$ 300.000</div>
          <div className={styles.bar}>R$ 200.000</div>
          <div className={styles.bar}>R$ 100.000</div>
          <div className={styles.bar}>R$ 75.000</div>
          <div className={styles.bar}>R$ 50.000</div>
          <div className={styles.bar}>R$ 30.000</div>
          <div className={styles.bar}>R$ 10.000</div>
          <div className={styles.bar}>R$ 5.000</div>
        </div>

      </div>

    </div>
  )
}

export default GameScreen