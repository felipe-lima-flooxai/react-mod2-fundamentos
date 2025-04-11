import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";



export default function App(props){

return (
    <div id="app">
        
        
        <Card titulo="Desafio Aleatório">
            <Primeiro></Primeiro>
        </Card>
        
        <Card titulo="Desafio Aleatório">
            <ComParametro titulo="Segundo Componente" subtitulo="Muito Legal!"></ComParametro>
        </Card>

        <Card titulo="Desafio Aleatório">
            <Fragmento></Fragmento>
        </Card>
        
        <Card titulo="Desafio Aleatório">
            <Aleatorio numeroMin = {10} numeroMax = {20}></Aleatorio>
        </Card>
    </div>
)
}