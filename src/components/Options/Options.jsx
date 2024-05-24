import css from './Options.module.css'


export default function Options({ btnTxt1, btnTxt2, btnTxt3, btnTxt4, updateFeedback, resetFeedback }) {
  return (
    <div>
      <button type='button' onClick={() => updateFeedback('good')}>{btnTxt1}</button>
      <button type='button' onClick={() => updateFeedback('neutral')}>{btnTxt2}</button>
      <button type='button' onClick={() => updateFeedback('bad')}>{btnTxt3}</button>
      <button type='button' onClick={resetFeedback}>{btnTxt4}</button>
    </div>
  );
}