import React from "react"
import produtos from "../../data/produtos"
import "./TabelaProdutos.css"


export default props =>{

    function getLinhas(){
        return produtos.map((produto, id)=>{
            return  (<tr className={id % 2 == 0? "Par" : "Impar"} key={produto.id}>
                        <td>{produto.id}</td>
                        <td>{produto.nome}</td>
                        <td>R${produto.preco.toFixed(2)}</td>
                    </tr>)
        })
    }

    return (<div className="TabelaProdutos">

        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>
                {getLinhas()}
            </tbody>

        </table>

    </div>) 

}