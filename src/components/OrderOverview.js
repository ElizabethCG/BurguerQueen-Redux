import React, {Component} from 'react';
import {connect} from 'react-redux';


class  OrderOverview extends Component{


  render(){
  
    const pedido = this.props.menuPrice.map((menuChoice, i) => {
      return (
        <p>{menuChoice}</p>
      )})


      const precio = this.props.menuPrice.map((menuPrice, i) => {

        return (
          <p>{menuPrice}</p>
        )})


    const total = this.props.menuPrice.reduce((prev, act, i) => {
      return parseInt(prev) + parseInt(act);
    }, 0)
    // console.log("Precio > "+precio)
    console.log("Props > "+JSON.stringify(this.props.meals));



    return (

    <div>

    <hr/>
      <p>RESUMEN PEDIDO</p>
      <span>Nombre Cliente: {this.props.cliente}</span>

      <p>{pedido}</p>
      <p>{precio}</p>
      <p>{total}</p>



      </div>

    );

      console.log("Props > "+JSON.stringify(this.props.meals));
  }
}


const mapStateToProps = (state)=>{
  return {
    ...state
  };
}


export default connect(
  mapStateToProps
)(OrderOverview);
