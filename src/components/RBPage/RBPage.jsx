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

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        this.props.dispatch(fetchRB());
    }

    // propName and await??
    handleSelect = propName => async (event) => {
        console.log(event.target.value);
        await this.setState({
            [propName]: event.target.value,
        })
        console.log(this.state);
    }

    goToWr = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: TEAM_ACTIONS.SELECT_PLAYER, payload: this.state })
        this.props.history.push('/wr')
    }

    render() {
        let rbList;
        if (this.props.players.runningbacks.Players) {
            rbList = this.props.players.runningbacks.Players.map((RB, index) => {
                return (
                    <option key={index}>{RB.displayName}</option>
                )
            })
        }

        return (
            <div>
                <form onSubmit={this.goToWr}>
                    <h1>Select Runningbacks</h1>
                    <select onChange={this.handleSelect('RB1')}>
                        {rbList}
                    </select>
                    <select onChange={this.handleSelect('RB2')}>
                        {rbList}
                    </select>
                    <select onChange={this.handleSelect('RB3')}>
                        {rbList}
                    </select>
                    <select onChange={this.handleSelect('RB4')}>
                        {rbList}
                    </select>
                    <Button type="submit" variant="contained">NEXT</Button>
                </form>
            </div>
        )
    }
}

const StyledRBPage = withStyles(styles)(RBPage);
export default connect(mapStateToProps)(StyledRBPage);