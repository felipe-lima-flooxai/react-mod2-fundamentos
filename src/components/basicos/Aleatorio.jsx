import React from "react"


export default function Aleatorio(props) {

    let min = props.numeroMin;
    let max = props.numeroMax;

    const aleatorio = Math.random() * (max - min) + min;

    return (
        <div>
            <h2><strong>Componente para Valor aleatório</strong></h2>
            <p>Valor mínimo: {props.numeroMin}</p>
            <p>Valor máximo: {props.numeroMax}</p>
            <p>Valor aleatório: {aleatorio}</p>
        </div>

    )

}