import styles from './StartScreen.module.css';

const StartScreen = ({ startGame }) => {
    return (
        <div>

            <div className={styles.container}>
                <h1>
                    <span className={styles.show}>Show</span>
                    <span  className={styles.do}>do</span>
                    <span className={styles.milhao}>Milhão</span>
                </h1>
            </div>
            <button onClick={startGame}>Play</button>
        </div>
    )
}

export default StartScreen