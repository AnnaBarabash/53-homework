import '../css/Card.css'

import { Counter } from './Counter'

export default function Card(props) {
    const {
        title,
        subtitle,
        genre,
        iNumber,
        src,
    } = props;

    return(
        <div className = 'card'>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <h5>{genre}</h5>
            <p>{iNumber ?? 'unknown'}</p>
            <img className = 'src' src={src}  alt = {title}/>
            <Counter/>
        </div>
    )
}

