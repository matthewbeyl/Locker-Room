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

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        this.props.dispatch(fetchTE());
    }

    // propName and await??
    // handleSelect = propName => async (event) => {
    //     console.log(event.target.value);
    //     await this.setState({
    //         [propName]: event.target.value,
    //     })
    //     console.log(this.state);
    // }

    handleSelect = (event) => {
        let pickedPlayer = this.props.players.tightends.Players[event.target.value]
        console.log(pickedPlayer);
    }

    goToK = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: TEAM_ACTIONS.SELECT_PLAYER, payload: this.state })
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
        return (
            <div>
                <form onSubmit={this.goToK}>
                    <h1>Select Tight Ends</h1>
                    <select onChange={this.handleSelect}>
                        {teList}
                    </select>
                    <select onChange={this.handleSelect}>
                        {teList}
                    </select>
                    <Button type="submit" variant="contained">NEXT</Button>
                </form>
            </div>
        )
    }
}

const StyledTEPage = withStyles(styles)(TEPage);
export default connect(mapStateToProps)(StyledTEPage);