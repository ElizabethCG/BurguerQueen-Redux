import React from 'react'
import { menu } from './menu.json';
import {connect} from 'react-redux';
import OrderOverview from './components/OrderOverview';
import MenuChoices from './components/MenuChoices';
import ButtonMeal     from './components/ButtonMeal';
import { turnLightsToRed, turnLightsToYellow, turnLightsToGreen } from './actions/lights';

 class App2 extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = {
      client:"",
       menu,
       menuChoices :[],
       menuPrices : [],
      buttonColor : 'purple',
      showColor: false,
      meal:"",
      showOptions: false,
      newArray: [],

    }

    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }

    handleClick2(event,cont){
      console.log(cont)
      this.setState({
        ...this.state,
         menuPrices : [...this.state.menuPrices, event.target.value],
         menuChoices: [...this.state.menuChoices, event.target.name],
        });
      }

      handleClick3(event){
        this.setState({
          ...this.state,
          meal : event.target.name,
          showOptions: true,
          });
        }

      updateClient(event){
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

        <ButtonMeal   estado= {this.state.showColor} color={this.state.buttonColor} onClickHandler3={this.handleClick3}>Desayuno</ButtonMeal>

        {this.state.showOptions  && (


      <div>
      <label> Nombre cliente </label>
        <input type="text" value={this.state.client} onChange={this.updateClient.bind(this)}/>
        <MenuChoices menu={menu} meal={this.state.meal}  menuChoice={this.state.menuChoices} menuPrice={this.state.menuPrices} onClickHandler2={this.handleClick2}></MenuChoices>

        <OrderOverview menuChoice={ this.state.menuChoices} menuPrice={this.state.menuPrices} cliente=  {this.state.client}
         onChange={this.updateClient.bind(this)}> Muestra resumen del pedido </OrderOverview>

     </div>

 )}
</div>
    )}

}


const mapStateToProps = (state)=>{  //RECIBE EL ESTADO DESDE REDUX Y SE LO ASIGNA A LOS PROPs. SI QUIERO SOLO UN ELEMENTO. PUEDO INDICAR QUÉ
  return {
    ...state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    turnToRed: turnLightsToRed(dispatch),
    turnToYellow: turnLightsToYellow(dispatch),
    turnToGreen: turnLightsToGreen(dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App2);
