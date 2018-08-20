import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDEF } from '../../redux/actions/playerActions';
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

class DEFPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            defenses: []
        }
    }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        this.props.dispatch(fetchDEF());
    }

    handleSelect = (event) => {
        let pickedPlayer = this.props.players.defenses.Players[event.target.value]
        console.log(pickedPlayer);
        this.setState({
            defenses: [...this.state.defenses, pickedPlayer]
        })
    }

    deleteFromState = (property) => {
        let newState = this.state.defenses.filter(player => {
            return player.playerId !== property
        })
        this.setState({
            defenses: newState
        })
    }

    goToConfirm = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: TEAM_ACTIONS.ADD_DEFS, payload: this.state })
        this.props.history.push('/confirm')
    }

    render() {
        let defList;
        if (this.props.players.defenses.Players) {
            defList = this.props.players.defenses.Players.map((DEF, index) => {
                return (
                    <option key={index} value={index}>{DEF.displayName}</option>
                )
            })
        }

        let pickedPlayerList = this.state.defenses.map(DEF => {
            return <div>
                {DEF.displayName} {/*<button onClick={() => this.deleteFromState(DEF.playerId)}>DELETE</button> */}
            </div>
        })
        return (
            <div>
                <form onSubmit={this.goToConfirm}>
                    <h1>Select Defenses</h1>
                    <select onChange={this.handleSelect}>
                        {defList}
                    </select>
                    {pickedPlayerList}
                    <Button type="submit" variant="contained">NEXT</Button>
                </form>
            </div>
        )
    }
}

const StyledDEFPage = withStyles(styles)(DEFPage);
export default connect(mapStateToProps)(StyledDEFPage);