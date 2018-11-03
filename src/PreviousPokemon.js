import React, { Component,Fragment } from 'react'

class PreviousPokemon extends Component {
  render() {
    // console.log('props', this.props)
    return (
      <Fragment>
        <button onClick={this.props.previousBtn}>Previous Pokemon</button>
      </Fragment>
    );
  }
}
 
export default PreviousPokemon;