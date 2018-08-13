import React, { Component } from 'react';
import { connect } from 'react-redux';

class DEFPage extends Component {


  render() {

    return (
      <div>
        <div>
            DEF PAGE
        </div>
      </div>
    )
  }
}

export default connect()(DEFPage)