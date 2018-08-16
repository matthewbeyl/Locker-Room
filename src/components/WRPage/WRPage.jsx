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

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        this.props.dispatch(fetchWR());
    }

    // propName and await??
    handleSelect = propName => async (event) => {
        console.log(event.target.value);
        await this.setState({
            [propName]: event.target.value,
        })
        console.log(this.state);
    }

    goToTe = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: TEAM_ACTIONS.SELECT_PLAYER, payload: this.state })
        this.props.history.push('/te')
    }

    render() {
        let wrList;
        if (this.props.players.widereceivers.Players) {
            wrList = this.props.players.widereceivers.Players.map((WR, index) => {
                return (
                    <option key={index}>{WR.displayName}</option>
                )
            })
        }
        return (
            <div>
                <form onSubmit={this.goToTe}>
                    <h1>Select Wide Receivers</h1>
                    <select onChange={this.handleSelect('WR1')}>
                        {wrList}
                    </select>
                    <select onChange={this.handleSelect('WR2')}>
                        {wrList}
                    </select>
                    <select onChange={this.handleSelect('WR3')}>
                        {wrList}
                    </select>
                    <select onChange={this.handleSelect('WR4')}>
                        {wrList}
                    </select>
                    <Button type="submit" variant="contained">NEXT</Button>
                </form>
            </div>
        )
    }
}

const StyledWRPage = withStyles(styles)(WRPage);
export default connect(mapStateToProps)(StyledWRPage);