import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { USER_ACTIONS } from '../../redux/actions/userActions';
// import { PLAYER_ACTIONS } from '../../redux/actions/playerActions';
import Axios from 'axios';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },

});

const mapStateToProps = state => ({
    user: state.user,
    // players: state.playerReducer,
    team: state.teamReducer
});

class ConfirmPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            team: []
        }
    }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    }

    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
          this.props.history.push('home');
        }
      }

    goToTeam = (event) => {
        event.preventDefault();
        let players = []
        for (let key in this.props.team.teamReducer) {
            console.log(this.props.team.teamReducer);
            this.props.team.teamReducer[key].map((playersFromForm, index) => {
                for (let key1 in playersFromForm) {
                    let tempPlayers = playersFromForm[key1].map(player => {
                        return player
                    })
                    players = players.length > 0 ? [...players, ...tempPlayers] : [...tempPlayers];
                }
            })
        }
        this.getTeamId()
            .then(response => {
                let teamId = response[0].id;
                this.sendToDB(teamId, players);
            }).catch(err => {
                console.log(err);
            });
        this.props.history.push('/team')
    }

    getTeamId() {
        return Axios.post('/api/template/join')
            .then((response) => {
                console.log(response.data);
                return response.data
            }).catch((error) => {
                console.log('Error - ', error);
                return error
            })
    }

    sendToDB = (teamId, players) => {
        console.log(players);
        // send teamId along with players
        Axios.post('/api/template/player', { teamId: teamId, players: players })
            .then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log('Error - ', error);
            })
    }

    render() {

        return (
            <div>
                <h1>Congratulations!</h1>
                <p>
                    Your team is ready to go! Click Next to save your team and proceed to management!
                </p>
                <form onSubmit={this.goToTeam}>

                    <Button type="submit" variant="contained">NEXT</Button>
                </form>
                {/* {players} */}
            </div>
        )
    }
}

const StyledConfirmPage = withStyles(styles)(ConfirmPage);
export default connect(mapStateToProps)(StyledConfirmPage);