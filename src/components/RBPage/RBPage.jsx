import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRB } from '../../redux/actions/playerActions';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { TEAM_ACTIONS } from '../../redux/actions/teamActions';

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
    players: state.playerReducer
});

class RBPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            runningbacks: []
        }
    }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        this.props.dispatch(fetchRB());
    }

    handleSelect = (event) => {
        let pickedPlayer = this.props.players.runningbacks.Players[event.target.value]
        console.log(pickedPlayer);
        this.setState({
            runningbacks: [...this.state.runningbacks, pickedPlayer]
        })
    }

    deleteFromState = (property) => {
        let newState = this.state.runningbacks.filter(player => {
            return player.playerId !== property
        })
        this.setState({
            runningbacks: newState
        })
    }

    goToWr = (event) => {
        console.log(this.state);

        event.preventDefault();
        this.props.dispatch({ type: TEAM_ACTIONS.ADD_RBS, payload: this.state })
        this.props.history.push('/wr')
        console.log(this.state);

    }

    render() {
        let rbList;
        if (this.props.players.runningbacks.Players) {
            rbList = this.props.players.runningbacks.Players.map((RB, index) => {
                return (
                    <option key={index} value={index}>{RB.displayName}</option>
                )
            })
        }

        let pickedPlayersList = this.state.runningbacks.map(RB => {
            return <div>
                {RB.displayName} {/*<button onClick={() => this.deleteFromState(RB.playerId)}>DELETE</button> */}
            </div>
        })

        return (
            <div>
                <form onSubmit={this.goToWr}>
                    <h1>Select Runningbacks</h1>
                    <select onChange={this.handleSelect}>
                        {rbList}
                    </select>
                    {pickedPlayersList}
                    <Button type="submit" variant="contained">NEXT</Button>
                </form>
            </div>
        )
    }
}

const StyledRBPage = withStyles(styles)(RBPage);
export default connect(mapStateToProps)(StyledRBPage);