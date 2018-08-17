import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQB } from '../../redux/actions/playerActions';
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

class QBPage extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            currentPlayer : []
        }
    }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        this.props.dispatch(fetchQB());
    }

    // propName and await??
    // handleSelect = propName => async(event) => {
    //     console.log(event.target.value);
    //     await this.setState({
    //         [propName]: event.target.value,
    //     })
    //     console.log(this.state);
    // }

    handleSelect = (event) => {
        let pickedPlayer = this.props.players.quarterbacks.Players[event.target.value]
        console.log(pickedPlayer);
        // this.setState({
        //     currentPlayer : [...pickedPlayer]
        // })
        // console.log(this.state);
    }

    goToRb = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: TEAM_ACTIONS.SELECT_PLAYER, payload: this.state })
        this.props.history.push('/rb')
    }

    render() {
        let qbList;
        if (this.props.players.quarterbacks.Players) {
            qbList = this.props.players.quarterbacks.Players.map((QB, index) => {
                return (
                    <option key={index} value={index}>{QB.displayName}</option>
                )
            })
        }

        return (
            <div>
                <form onSubmit={this.goToRb}>
                    <h1>Select Quarterbacks</h1>
                    <select onChange={this.handleSelect}>
                        {qbList}
                    </select>
                    <select onChange={this.handleSelect}>
                        {qbList}
                    </select>
                    <Button type="submit" variant="contained">NEXT</Button>
                </form>
            </div>
        )
    }
}

const StyledQBPage = withStyles(styles)(QBPage);
export default connect(mapStateToProps)(StyledQBPage);