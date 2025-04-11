import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import "./App.css";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";



export default function App(props){

return (
    <div className="App">
        
        <h1>Fundamentos React</h1>

        <div className="Cards">

            <Card titulo="Primeiro Card" color="#FA6900">
                <Primeiro></Primeiro>
            </Card>
            
            <Card titulo="Card Com parâmetro" color="#E94C6F">
                <ComParametro titulo="Segundo Componente" subtitulo="Muito Legal!"></ComParametro>
            </Card>

            <Card titulo="Card envolvido com fragmento" color="#E8B71A">
                <Fragmento></Fragmento>
            </Card>
            
            <Card titulo="Desafio Aleatório" color="#588C73">
                <Aleatorio numeroMin = {10} numeroMax = {20}></Aleatorio>
            </Card>

            <Card titulo="Componente com Filhos" color="#00C8F8">
                <Familia sobrenome = "Silva">
                    <FamiliaMembro nome='Pedro'></FamiliaMembro>
                    <FamiliaMembro nome='Ana'></FamiliaMembro>
                    <FamiliaMembro nome='Gustavo'></FamiliaMembro>
                </Familia>
            </Card>

            <Card titulo="Lista Alunos" color="#588C73">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="Tabela Produtos" color="#FA6900">
                <TabelaProdutos></TabelaProdutos>
            </Card>

        </div>

        
    </div>
)
}