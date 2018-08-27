import React, { Component } from 'react';
import { connect } from 'react-redux';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { fetchTE } from '../../redux/actions/playerActions';
import { TEAM_ACTIONS } from '../../redux/actions/teamActions';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
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

    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
          this.props.history.push('home');
        }
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
        const { classes } = this.props;

        let teList;
        if (this.props.players.tightends.Players) {
            teList = this.props.players.tightends.Players.map((TE, index) => {
                return (
                    <MenuItem key={index} value={index}>{TE.displayName}</MenuItem>
                )
            })
        }
        
        let pickedPlayersList = this.state.tightends.map(TE => {
            return <div>
                {TE.displayName} <button onClick={() => this.deleteFromState(TE.playerId)}>REMOVE</button>
            </div>
        })
        return (
            <div>
                <Paper>
                <form className={classes.root} autoComplete="off" onSubmit={this.goToK}>
                    <h1>Select tightends</h1>
                    <FormControl className={classes.formControl}>
                        <Select
                            value=''
                            onChange={this.handleSelect}
                            displayEmpty
                            name="tightends"
                            className={classes.selectEmpty}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {teList}
                        </Select>
                        <FormHelperText>Select tightends</FormHelperText>
                    </FormControl>
                    <Button type="submit" variant="contained">NEXT</Button>
                </form>
                </Paper>
                {pickedPlayersList}
            </div>
        )
    }
}

const StyledTEPage = withStyles(styles)(TEPage);
export default connect(mapStateToProps)(StyledTEPage);