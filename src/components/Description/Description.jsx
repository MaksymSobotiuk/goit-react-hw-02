import css from './Description.module.css'

export default function Description(props) {
    
    return (
        <div className={css.description}>
            <h1 className={css.title}>{props.title}</h1>
            <p className={css.text}>{props.text}</p>
        </div>

    )

}