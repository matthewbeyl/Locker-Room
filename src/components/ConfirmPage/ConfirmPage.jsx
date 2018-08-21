import React, { Component } from 'react';
import { connect } from 'react-redux';


import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { USER_ACTIONS } from '../../redux/actions/userActions';
// import { PLAYER_ACTIONS } from '../../redux/actions/playerActions';
import Axios from 'axios';


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
    //     console.log(this.props.team);
    //     Axios.post('/api/template/player', this.props.team)
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

    sendToDB = (players) => {
        console.log(players);
        Axios.post('/api/template/player', players)
        .then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log('error: ', error);
        })
    }

    render() {
        console.log(this.props.team);
        
        let players = []
        for(let key in this.props.team) {
            this.props.team[key].map((playersFromForm, index) => {
                for(let key1 in playersFromForm){
                    let tempPlayers = playersFromForm[key1].map(player => {
                        console.log(player);
                        console.log(player.displayName);
                        
                        return  player
                    })
                    players = players.length > 0 ? [...players, ...tempPlayers] : [...tempPlayers];
                }
            })
        }

        this.sendToDB(players);

        
        return (
            <div>                
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