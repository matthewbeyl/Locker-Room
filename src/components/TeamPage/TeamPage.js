import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { fetchTeam, TEAM_ACTIONS } from '../../redux/actions/teamActions';


const mapStateToProps = state => ({
  user: state.user,
  userTeam: state.teamReducer,
});

class TeamPage extends Component {



  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    this.props.dispatch({ type: TEAM_ACTIONS.FETCH_TEAM });
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  render() {
    console.log(this.props.userTeam.userTeamReducer);
    
    
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <h1>{ this.props.user.userName }'s team</h1>
        </div>
      );
    }

    return (
      <div>
        <Nav />
        { content }
        {JSON.stringify(this.props.userTeam.userTeamReducer)}
      </div>
    );
  }
}

export default connect(mapStateToProps)(TeamPage);