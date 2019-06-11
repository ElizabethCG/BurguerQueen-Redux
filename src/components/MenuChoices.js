import React, { Component } from 'react';
import {connect} from 'react-redux';
import { turnLightsToRed, turnLightsToYellow, turnLightsToGreen } from '../actions/lights';
import { selectBreakFast, selectLunch } from '../actions/meals';

// import { menu } from '../menu.json';

class MenuChoices extends React.Component{
  constructor(...props){
    super(...props);

    this.state = {

    showResume:false,
    // nuevoProducto:"",
  }
      this.handleClick = this.handleClick.bind(this);
      // this.handleClick3 = this.handleClick3.bind(this);
  }

  handleClick(event){
   this.props.onClickHandler2(event)
    };


    // handleClick3(event){
    //   this.setState({
    //     ...this.state,
    //     nuevoProducto : event.target,
    //     });
    //
    //  {this.props.breakfast(this.state.nuevoProducto)};
    //
    //   };



  render(){
   // console.log("Props > "+JSON.stringify(this.props));
    const menu = this.props.menu.map((men, i) => {

      if (men.comida===this.props.meal){
          return (
            <div>
              <button name={men.tipo} value={men.precio} onClick={(event)=>{this.props.breakfast(event.target)}}>{men.tipo}</button>
            </div>
          )}
        })

  return (
    <div>
          {menu}
    </div>
      )
     }
}




const mapStateToProps = (state)=>{
  return {
    ...state
  };
}


const mapDispatchToProps = (dispatch) => {
  return  {
    breakfast: selectBreakFast(dispatch),
    lunch:selectLunch(dispatch),
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuChoices);
