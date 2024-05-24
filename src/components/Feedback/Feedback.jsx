import css from './Feedback.module.css'

export default function Feedback({feedback,totalFeedback, positiveFeedbackPercentage}) {
    
    return (
        <div className={css.feedback}>
              <p className={css.stat}>Good: {feedback.good}</p>
            <p className={css.stat}>Neutral: {feedback.neutral}</p>
            <p className={css.stat}>Bad: {feedback.bad}</p>
            <p className={css.stat}>Total: {totalFeedback}</p>
             <p className={css.stat}>Positive: {positiveFeedbackPercentage}%</p>
    </div>
)


}