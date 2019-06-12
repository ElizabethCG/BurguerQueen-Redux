import React, { Component } from 'react';
import { connect } from 'react-redux';

class ButtonMeal extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(event) {
    this.props.onClickHandler3(event)
  };


  render() {
    return (
      <div>

        <button name="Desayuno"     onClick={this.handleClick}>Desayuno       </button>
        <button name="Menú diario"  onClick={this.handleClick}>Almuerzo y Cena</button>
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
)(ButtonMeal);
