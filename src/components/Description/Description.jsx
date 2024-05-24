import css from './Description.module.css'

export default function Description(props) {
    
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>

    )

}