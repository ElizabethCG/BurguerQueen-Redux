import React, { Component } from 'react';
import { connect } from 'react-redux';

class OrderOverview extends Component {

  render() {
    const pedido = this.props.meals.menuChoices.map((menuChoice, i) => {
      return (
        <p key = {i}>{menuChoice}</p>
      )
    })

    const precio = this.props.meals.menuPrices.map((menuPrice, i) => {
      return (
        <p key= {i}>{menuPrice}</p>
      )
    })

    const total = this.props.meals.menuPrices.reduce((prev, act, i) => {
      return parseInt(prev) + parseInt(act);
    }, 0)


    return (

      <div>
        <hr />
        <p>RESUMEN PEDIDO</p>
        <span>Nombre Cliente: {this.props.cliente}</span>
        <div>{pedido}</div >
        <div>{precio}</div>
        <p>{total}</p>
      </div>

    );
  }
}


const mapStateToProps = (state) => {
  return {
    ...state
  };
}


export default connect(
  mapStateToProps
)(OrderOverview);
