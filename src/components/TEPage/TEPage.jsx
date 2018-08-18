import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { fetchTE } from '../../redux/actions/playerActions';
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

class TEPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tightends: []
        }
    }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        this.props.dispatch(fetchTE());
    }

    handleSelect = (event) => {
        let pickedPlayer = this.props.players.tightends.Players[event.target.value]
        console.log(pickedPlayer);
        this.setState({
            tightends: [...this.state.tightends, pickedPlayer]
        })
    }

    deleteFromState = (property) => {
        let newState = this.state.tightends.filter(player => {
            return player.playerId !== property
        })
        this.setState({
            tightends: newState
        })
    }

    goToK = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: TEAM_ACTIONS.ADD_TES, payload: this.state })
        this.props.history.push('/k')
    }

    render() {
        let teList;
        if (this.props.players.tightends.Players) {
            teList = this.props.players.tightends.Players.map((TE, index) => {
                return (
                    <option key={index} value={index}>{TE.displayName}</option>
                )
            })
        }
        
        let pickedPlayersList = this.state.tightends.map(TE => {
            return <div>
                {TE.displayName} <button onClick={() => this.deleteFromState(TE.playerId)}>DELETE</button>
            </div>
        })
        return (
            <div>
                <form onSubmit={this.goToK}>
                    <h1>Select Tight Ends</h1>
                    <select onChange={this.handleSelect}>
                        {teList}
                    </select>
                    {pickedPlayersList}                    
                    <Button type="submit" variant="contained">NEXT</Button>
                </form>
            </div>
        )
    }
}

const StyledTEPage = withStyles(styles)(TEPage);
export default connect(mapStateToProps)(StyledTEPage);