import css from './Options.module.css'


export default function Options({ btnTxt1, btnTxt2, btnTxt3, btnTxt4, updateFeedback, resetFeedback, totalFeedback}) {
  return (
    <div className={css.options}>
      <button type='button' className={css.button} onClick={() => updateFeedback('good')}>{btnTxt1}</button>
      <button type='button' className={css.button} onClick={() => updateFeedback('neutral')}>{btnTxt2}</button>
      <button type='button' className={css.button} onClick={() => updateFeedback('bad')}>{btnTxt3}</button>
        
           {totalFeedback > 0 && (
        <button type='button'  className={`${css.button} ${css.resetButton}`} onClick={resetFeedback}>{btnTxt4}</button>
      )}
     
    </div>
  );
}