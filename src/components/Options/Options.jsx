import css from './Options.module.css'

export default function Options (props) {
    
    return (
        <div>
            <button type='button'>{props.btnTxt1}</button>
            <button type='button'>{props.btnTxt2}</button>
            <button type='button'>{props.btnTxt3}</button>
            <button type='button'>{props.btnTxt4}</button>
    </div>


)


}