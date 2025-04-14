import React, { Component } from 'react';
import "./Contador.css"

class CalculadoraSimples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: 0,
      taxa: 0
    };
  }

  somar = () => {
    this.setState({ 
      valor: this.state.valor + Number(this.state.taxa) 
    });
  };

  subtrair = () => {
    this.setState({ 
      valor: this.state.valor - Number(this.state.taxa) 
    });
  };

  handleTaxaChange = (e) => {
    this.setState({ taxa: e.target.value });
  };

  render() {
    return (
      <div className='Contador'>
        <h2>Calculadora Simples</h2>
        
        <div>
          <label>Taxa: </label>
          <input
            type="number"
            value={this.state.taxa}
            onChange={this.handleTaxaChange}
          />
        </div>
        
        <div>
          Resultado: {this.state.valor}
        </div>
        
        <div>
          <button onClick={this.somar}>+</button>
          <button onClick={this.subtrair}>-</button>
        </div>
      </div>
    );
  }
}

export default CalculadoraSimples;