import React, { Component } from 'react';
import { connect } from 'react-redux';

class RBPage extends Component {


  render() {

    return (
      <div>
        <div>
            RB PAGE
        </div>
      </div>
    )
  }
}

export default connect()(RBPage)