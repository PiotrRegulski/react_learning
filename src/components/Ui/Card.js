
import './Card.css';

 export default function Card(props){
    const classes='card ' + props.className;
    return <div className={classes}>{props.children}</div>;
}

// export default Card;

// tworzenie stylu dla diva karty