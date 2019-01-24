import React, {Component, Fragment} from 'react';
import './Pallete.css';

class Pallete extends Component{

  render(){
    const { colors, onClick } = this.props;
    const colorList = colors.map((color) => (
      <div className={`color ${color.selected ? 'selected' : ''}`}
          style={{background: color.color, fontSize:"0px"}}
          key={color.color}
          onClick={onClick}
          color={color.color}>{color.color}</div>
    ));
    return(
      <Fragment>{colorList}</Fragment>
    );
  }
}

export default Pallete;
