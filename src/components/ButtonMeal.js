import React, { Component } from 'react';
import {connect} from 'react-redux';

class ButtonMeal extends Component{
  constructor(props){
    super(props);



   this.state = {
     cont: 0,

   }

    console.log("Props > "+JSON.stringify(props.color));
    this.handleClick = this.handleClick.bind(this);
  }

  // handleClick(){
  //   this.props.onClickHandler('orange');
  // }


  handleClick(event){
    this.setState({
      ...this.state,
     cont : this.state.cont + 1})
    console.log(this.state.cont)

   this.props.onClickHandler3(event,this.state.cont)

    };



  render(){
    return (
      <div>

      <button name="Desayuno"     style={{color : this.props.color}} onClick={this.handleClick}>Desayuno       </button>
      <button name="Menú diario"  style={{color : this.props.color}} onClick={this.handleClick}>Almuerzo y Cena</button>
  </div>
  );

  }
}

const mapStateToProps = (state)=>{
  return {
    ...state
  };
}

export default connect(
  mapStateToProps
)(ButtonMeal);
