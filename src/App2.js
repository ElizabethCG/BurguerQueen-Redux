import React, { Component } from 'react';
import { menu } from './menu.json';
import { connect } from 'react-redux';
import OrderOverview from './components/OrderOverview';
import MenuChoices from './components/MenuChoices';
import ButtonMeal from './components/ButtonMeal';

class App2 extends Component {
  constructor(...args) {
    super(...args)
    this.state = {
      menu,
      client: "",
      showOptions: false,
    }

    this.handleClick3 = this.handleClick3.bind(this);
  }

  handleClick3(event) {
    this.setState({
      ...this.state,
      meal: event.target.name,
      showOptions: true,
    });
  }

  updateClient(event) {
    this.setState({
      ...this.state,
      client: event.target.value
    });
  }


  render() {
    return (
      <div>
        <h1>Burguer Queen</h1>
        <h2>Fast food 24 Hours</h2>

        <ButtonMeal onClickHandler3={this.handleClick3}>Elige meal(Desayuno o AlmuerzoyCena)</ButtonMeal>

        {this.state.showOptions && (


          <div>
            <label> Nombre cliente </label>
            <input type="text" value={this.state.client} onChange={this.updateClient.bind(this)} />

            <MenuChoices menu={menu} meal={this.state.meal} ></MenuChoices>

            <OrderOverview cliente={this.state.client} onChange={this.updateClient.bind(this)}> Muestra resumen del pedido </OrderOverview>

          </div>

        )}
      </div>
    )
  }

}


// const mapStateToProps = (state)=>{  //RECIBE EL ESTADO DESDE REDUX Y SE LO ASIGNA A LOS PROPs. SI QUIERO SOLO UN ELEMENTO. PUEDO INDICAR QUÉ
//   return {
//     ...state
//   };
// };


export default connect(
  // mapStateToProps,
)(App2);
