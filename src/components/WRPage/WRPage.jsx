import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWR } from '../../redux/actions/playerActions';
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

class WRPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            widereceivers: []
        }
    }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        this.props.dispatch(fetchWR());
    }

    handleSelect = (event) => {
        let pickedPlayer = this.props.players.widereceivers.Players[event.target.value]
        console.log(pickedPlayer);
        this.setState({
            widereceivers: [...this.state.widereceivers, pickedPlayer]
        })
    }

    deleteFromState = (property) => {
        let newState = this.state.widereceivers.filter(player => {
            return player.playerId !== property
        })
        this.setState({
            widereceivers: newState
        })
    }
    goToTe = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: TEAM_ACTIONS.ADD_WRS, payload: this.state })
        this.props.history.push('/te')
    }

    render() {
        let wrList;
        if (this.props.players.widereceivers.Players) {
            wrList = this.props.players.widereceivers.Players.map((WR, index) => {
                return (
                    <option key={index} value={index}>{WR.displayName}</option>
                )
            })
        }

        let pickedPlayersList = this.state.widereceivers.map(WR => {
            return <div>
                {WR.displayName} {/*<button onClick={() => this.deleteFromState(WR.playerId)}>DELETE</button> */}
            </div>
        })
        return (
            <div>
                <form onSubmit={this.goToTe}>
                    <h1>Select Wide Receivers</h1>
                    <select onChange={this.handleSelect}>
                        {wrList}
                    </select>
                    {pickedPlayersList}
                    <Button type="submit" variant="contained">NEXT</Button>
                </form>
            </div>
        )
    }
}

const StyledWRPage = withStyles(styles)(WRPage);
export default connect(mapStateToProps)(StyledWRPage);