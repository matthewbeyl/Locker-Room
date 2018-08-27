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
import Paper from '@material-ui/core/Paper';


const styles = {
  card: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: "6%"
  },
  playerCard: {
    margin: "1% 1% 1% 1%"
  },
};

const mapStateToProps = state => ({
  user: state.user,
  userTeam: state.teamReducer,
});

class TeamPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      playerToDisplay: ''
    }
  }

  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    this.props.dispatch({ type: TEAM_ACTIONS.FETCH_TEAM });
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  // handleClick = (event) => {
  //   let clickedPlayer = this.props.userPlayer[event.target.value]
  //   console.log(clickedPlayer);
  //   this.setState({
  //     quarterbacks: [...this.state.playerToDisplay, clickedPlayer]
  //   })
  // }

  goToPlayer = (event) => {
    event.preventDefault();
    // this.props.dispatch({ type: TEAM_ACTIONS.DISPLAY_PLAYER, payload: this.state })
    this.props.history.push('/player')
  };

  render() {

    let { classes } = this.props
    console.log(this.props.userTeam.userTeamReducer);

    const teamCards = this.props.userTeam.userTeamReducer.map((userPlayer, index) => {
      // return (<Card key={index}>{userPlayer.displayName}</Card>)
      return (<Card className={classes.playerCard}>
        <img alt='player image' src="http://wingsfm.com/wp-content/uploads/2017/01/1408678004000-GenericFootball.jpg" height='150px' width='auto' />
        {/* <img alt='player image' src="" /> */}
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2" key={index}>
            {userPlayer.displayName}
          </Typography>
        </CardContent>
        <CardActions>
          <form onSubmit={this.goToPlayer}>
            <Button type="submit" size="small" variant="contained">
              See More
          </Button>
          </form>
        </CardActions>
      </Card>)
    })

    let content = null;

    if (this.props.user.userName) {
      content = (
        <div className={classes.card}>


          {teamCards}
          <Card className={classes.addPlayerCard}>
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
              </Typography>
            </CardContent>
            <CardActions>
            </CardActions>
          </Card>
        </div>
      );
    }

    return (
      <div>
        <h1>{this.props.user.userName}'s team</h1>
        {content}
      </div>
    );
  }
}

const StyledTeamPage = withStyles(styles)(TeamPage);
export default connect(mapStateToProps)(StyledTeamPage);