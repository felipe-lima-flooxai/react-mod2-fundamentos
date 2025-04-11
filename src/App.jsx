import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";



export default function App(props){

return (
    <div id="app">
        <Primeiro></Primeiro>
        <ComParametro titulo="Segundo Componente" subtitulo="Muito Legal!"></ComParametro>
        <Fragmento></Fragmento>
    </div>
)
}