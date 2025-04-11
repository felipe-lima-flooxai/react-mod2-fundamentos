import React from "react"


export default props =>{

    const paridade = props.numero % 2 == 0;

    return (
        <div>
            {paridade ? <span>Par</span> : <span>Impar</span>}
        </div>
    )

}