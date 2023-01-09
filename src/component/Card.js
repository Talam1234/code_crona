import React from 'react'
import { Link } from "react-router-dom";
import './covid.css';

const Card = (props) => {
    const colors = ["red","#01433e","brown","#011d35","#43011e","#3b0143","rgb(71, 101, 1)","#472D2D","#D49B54","#FA58B6"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return (
        <Link className='card' to={props.data} style={{backgroundColor: randomColor}}>
            <span style={{backgroundColor: randomColor}}>state code</span>
            <h5 className='card_main' style={{backgroundColor: randomColor}}>{props.data}</h5>
        </Link>
    )   
}

export default Card
