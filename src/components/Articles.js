import React from 'react'
import Favori from "./Favoris";
import '../ListeArticles.css';

const Articles = (props) => {
        const href = `/photos/${props.photo}`
        return (
            <div id='articleId'>
                <h2>{props.title}</h2>
                <img src={href} alt={props.title} height="100" width="100"/>
                <p id="prix">prix : {props.prix}€</p>
                <p id="taille">taille : {props.taille}</p>
                <Favori/>
            </div>
        )
    }
;

export default Articles;