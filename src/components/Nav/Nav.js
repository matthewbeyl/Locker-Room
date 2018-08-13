import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { triggerLogout } from '../../redux/actions/loginActions';
import { connect } from 'react-redux';

class Nav extends Component {

  logout = () => {
    this.props.dispatch(triggerLogout());
    // this.props.history.push('home');
  }

  render() {

    return (
      <div className="navbar">
        <div>
          <button onClick={this.logout} className="logOut"> Log Out
          </button>
        </div>
      </div>
    )
  }
}

export default connect()(Nav)