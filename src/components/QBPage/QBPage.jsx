import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchQB } from '../../redux/actions/playerActions';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { TEAM_ACTIONS } from '../../redux/actions/teamActions';

import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
    root: {
        width: '90%',
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
            quarterbacks: [],
        }
    }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        this.props.dispatch(fetchQB());
    }

    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
            this.props.history.push('home');
        }
    }

    handleSelect = (event) => {
        let pickedPlayer = this.props.players.quarterbacks.Players[event.target.value]
        console.log(pickedPlayer);
        this.setState({
            quarterbacks: [...this.state.quarterbacks, pickedPlayer]
        })
    }

    deleteFromState = (property) => {
        let newState = this.state.quarterbacks.filter(player => {
            return player.playerId !== property
        })
        this.setState({
            quarterbacks: newState
        })
    }

    goToRb = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: TEAM_ACTIONS.ADD_QBS, payload: this.state })
        this.props.history.push('/rb')
    };

    render() {
        const { classes } = this.props;
        

        let qbList;
        if (this.props.players.quarterbacks.Players) {
            qbList = this.props.players.quarterbacks.Players.map((QB, index) => {
                return (
                    <MenuItem key={index} value={index}>{QB.displayName}</MenuItem>
                )
            })
        }

        let pickedPlayersList = this.state.quarterbacks.map(QB => {
            return <div>
                {QB.displayName} <button onClick={() => this.deleteFromState(QB.playerId)}>REMOVE</button>
            </div>
        })

        return (
            <div>
            <div>
                <Paper>
                <form className={classes.root} autoComplete="off" onSubmit={this.goToRb}>
                    <h1>Select Quarterbacks</h1>
                    <FormControl className={classes.formControl}>
                        <Select
                            value=''
                            onChange={this.handleSelect}
                            displayEmpty
                            name="Quarterbacks"
                            className={classes.selectEmpty}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {qbList}
                        </Select>
                        <FormHelperText>Select Quarterbacks</FormHelperText>
                    </FormControl>
                    <Button type="submit" variant="contained">NEXT</Button>
                </form>
                </Paper>
                {pickedPlayersList}
            </div>
            </div>
        )
    }
}

const StyledQBPage = withStyles(styles)(QBPage);
export default connect(mapStateToProps)(StyledQBPage);