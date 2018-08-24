import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { TEAM_ACTIONS } from '../../redux/actions/teamActions';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
   display: "flex",
   flexDirection: "row",
   flexWrap: "wrap",
   padding: "6%"
  },
  playerCard: {
    margin: "1% 1% 1% 1%"
  }
};

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

    let {classes} = this.props
    console.log(this.props.userTeam.userTeamReducer);

    const teamCards = this.props.userTeam.userTeamReducer.map((userPlayer, index) => {
      // return (<Card key={index}>{userPlayer.displayName}</Card>)
      return (<Card className={classes.playerCard}>
        <img alt='' src="http://wingsfm.com/wp-content/uploads/2017/01/1408678004000-GenericFootball.jpg" height='200px' width='auto' />
        
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2" key={index}>
            {userPlayer.displayName}
          </Typography>
        </CardContent>
        <CardActions>
        </CardActions>
      </Card>)
    })

    let content = null;

    if (this.props.user.userName) {
      content = (
        <div className={classes.card}>
          
          
          {teamCards}
          
        </div>
      );
    }

    return (
      <div>
        <Nav />
        <h1>{this.props.user.userName}'s team</h1>
        {content}
      </div>
    );
  }
}

const StyledTeamPage = withStyles(styles)(TeamPage);
export default connect(mapStateToProps)(StyledTeamPage);

// export default connect(mapStateToProps)(TeamPage);