import React, { Component, Fragment } from 'react'

class NextPokemon extends Component {
  render() {
    console.log('props', this.props)
    return (
      <Fragment>
        <button onClick={this.props.nextBtn}>Next Pokemon</button>
      </Fragment>
    );
  }
}
 
export default NextPokemon;