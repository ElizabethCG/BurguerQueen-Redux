import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBreakFast, selectLunch } from '../actions/meals';


class MenuChoices extends Component {
  constructor(...props) {
    super(...props);

    this.state = {
      showResume: false,
    }

    this.handleClick = this.handleClick.bind(this);
    
  }

  handleClick(event) {
    this.props.onClickHandler2(event)
  };


  render() {

    const menu = this.props.menu.map((men, i) => {

      if (men.comida === this.props.meal) {
        return (
          <div key= {men.tipo}>
            <button name={men.tipo} value={men.precio} onClick={(event) => { this.props.breakfast(event.target) }}>{men.tipo}</button>
          </div>
        )
      }
      return(<p key = {men.tipo}></p>)
    })

    return (
      <div>
        {menu}
      </div>
    )
  }
}




const mapStateToProps = (state) => {
  return {
    ...state
  };
}


const mapDispatchToProps = (dispatch) => {
  return {
    breakfast: selectBreakFast(dispatch),
    lunch: selectLunch(dispatch),
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuChoices);
