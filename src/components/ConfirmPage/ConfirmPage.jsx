import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { PLAYER_ACTIONS } from '../../redux/actions/playerActions';
// import Axios from 'axios';

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

    // confirmTeam = () => {
    //     console.log(this.props.team.quarterbacks);
    //     Axios.post('/api/template', this.props.team.quarterbacks)
    //     .then((response) => {
    //         console.log(response);
    //     }).catch((error) => {
    //         console.log('error: ', error);
    //     })
    // }

    goToTeam = (event) => {
        event.preventDefault();
        // this.props.dispatch({ type: TEAM_ACTIONS.ADD_DEFS, payload: this.state })
        // this.confirmTeam();
        this.props.history.push('/team')
    }

    render() {
        console.log(this.props.team);
        // let teamList;
        // if (this.props.team) {
        //     teamList = this.props.map((Players, index) => {
        //         return (
        //             <option key={index}>{Players.displayName}</option>
        //         )
        //     })
        // }
        let players = []
        for(let key in this.props.team) {
            this.props.team[key].map((playersFromForm, index) => {
                for(let key1 in playersFromForm){
                    let tempPlayers = playersFromForm[key1].map(player => {
                        console.log(player);
                        console.log(player.displayName);
                        
                        return [ <p>{player.displayName}</p>]
                    })
                    players = players.length > 0 ? [...players, tempPlayers] : [tempPlayers];
                }
            })
        }

        
        return (
            <div>                
                <form onSubmit={this.goToTeam}>
                {/* {JSON.stringify(this.props.team.quarterbacks)}
                {JSON.stringify(this.props.team.runningbacks)}
                {JSON.stringify(this.props.team.widereceivers)}
                {JSON.stringify(this.props.team.tightends)}
                {JSON.stringify(this.props.team.kickers)}
                {JSON.stringify(this.props.team.defenses)} */}
                {players}
                {/* {teamList} */}
                    <Button type="submit" variant="contained">NEXT</Button>
                </form> 
            </div>
        )
    }
}

const StyledConfirmPage = withStyles(styles)(ConfirmPage);
export default connect(mapStateToProps)(StyledConfirmPage);