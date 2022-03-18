import { useSelector } from "react-redux";
import styles from "./Score.module.css";

function Score(props) {
  const { questionHistory, filteredQuestionsIds } = useSelector(
    (state) => state.questionData
  );

  const totalQuestions = filteredQuestionsIds.length;
  const { correct, incorrect, unmarked } = questionHistory;
  console.log(
    "%c --> %cline:8%cscoreData",
    "color:#fff;background:#ee6f57;padding:3px;border-radius:2px",
    "color:#fff;background:#1f3c88;padding:3px;border-radius:2px",
    "color:#fff;background:rgb(38, 157, 128);padding:3px;border-radius:2px",
    questionHistory
  );
  const correctAmount = tallyItemsInObject(correct);
  const incorrectAmount = tallyItemsInObject(incorrect);
  const unmarkedAmount = tallyItemsInObject(unmarked);
  const totalCompleted = correctAmount + incorrectAmount + unmarkedAmount;

  console.log(
    "%c --> %cline:17%cquestionsCompleted",
    "color:#fff;background:#ee6f57;padding:3px;border-radius:2px",
    "color:#fff;background:#1f3c88;padding:3px;border-radius:2px",
    "color:#fff;background:rgb(56, 13, 49);padding:3px;border-radius:2px",
    totalCompleted
  );

  function tallyItemsInObject(obj) {
    let output = 0;
    for (const i in obj) {
      output++;
    }
    return output;
  }
  return (
    <div id="iq-session-results" className={styles["outer-wrap"]}>
      {props.title && <h1 className={styles["subtitle"]}>props.title</h1>}

      <div id="results-controls" className={styles["inner-wrap"]}>
        <div id="correct-incorrect-unmarked" className={styles["inner-wrap"]}>
          {props.showCorrect && (
            <div id="correct" className={styles["inner-wrap"]}>
              {correctAmount}
              <span> Correct </span>
            </div>
          )}
          {props.showIncorrect && (
            <div id="correct" className={styles["inner-wrap"]}>
              {incorrectAmount}
              <span> Incorrect </span>
            </div>
          )}
          {props.showUnmarked && (
            <div id="correct" className={styles["inner-wrap"]}>
              {unmarkedAmount}
              <span> Unmarked </span>
            </div>
          )}
        </div>
        {props.showCount && (
          <div id="count" className={styles["inner-wrap"]}>
            {totalCompleted}
            <span> questions completed of </span>
            {totalQuestions}
          </div>
        )}
        {props.showResetBtn && (
          <button id="reset-btn" className={styles["inner-wrap button"]}>
            Reset Session
          </button>
        )}
      </div>
    </div>
  );
}

export default Score;
