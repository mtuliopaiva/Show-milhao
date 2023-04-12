import styles from './GameScreen.module.css';



const GameScreen = ({ giveUp, question }) => {

  // Looking for the right answer
  const answers = question.answers;
  const foundItem = answers.find(item => item.is_correct === true);

  
  console.log(foundItem);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(question);
    console.log("Enviado!");
  }
  const cashStage = [
    { phase: 10, value: 1 },
    { phase: 9, value: 500 },
    { phase: 8, value: 300 },
    { phase: 7, value: 200 },
    { phase: 6, value: 100 },
    { phase: 5, value: 75 },
    { phase: 4, value: 50 },
    { phase: 3, value: 30 },
    { phase: 2, value: 10 },
    { phase: 1, value: 5 },
  ];
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.columnOne}>
          <h2>
            <span className={styles.show}>Show</span>
            <span className={styles.do}>do</span>
            <span className={styles.milhao}>Milhão</span>
          </h2>
          <div className={styles.content}>
            <div className={styles.question}>
              <h3>{question.question_text}</h3>
            </div>
            <form onSubmit={handleSubmit} className={styles.alternatives}>
              {question.answers.map((alternatives, index) => (
                <label key={index}>
                  <input type="checkbox" />
                  <span className='alternatives'>{alternatives.answer_text}</span>
                </label>
              ))}
              <div className={styles.container}>
                <button onClick={giveUp}>Parar</button>
                <button type="submit">Confirma</button>
              </div>
            </form>
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
          {cashStage.map((cash, index) => (
            <p key={index} className={styles.bar} style={{ width: cash.phase * 10 + '%' }}>
              {cash.value === 1 ? cash.value + " MILHÃO" : cash.value + " MIL"}  </p>
          ))}
        </div>

      </div>

    </div>
  )
}

export default GameScreen