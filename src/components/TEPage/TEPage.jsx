import React, { Component } from 'react';
import { connect } from 'react-redux';

class TEPage extends Component {


  render() {

    return (
      <div>
        <div>
            TE PAGE
        </div>
      </div>
    )
  }
}

export default connect()(TEPage)