import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchDEF } from '../../redux/actions/playerActions';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { TEAM_ACTIONS } from '../../redux/actions/teamActions';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
        const { classes } = this.props;

        let defList;
        if (this.props.players.defenses.Players) {
            defList = this.props.players.defenses.Players.map((DEF, index) => {
                return (
                    <MenuItem key={index} value={index}>{DEF.displayName}</MenuItem>
                )
            })
        }

        let pickedPlayersList = this.state.defenses.map(DEF => {
            return <div>
                {DEF.displayName} {/*<button onClick={() => this.deleteFromState(DEF.playerId)}>DELETE</button> */}
            </div>
        })
        return (
            <div>
                <form className={classes.root} autoComplete="off" onSubmit={this.goToConfirm}>
                    <h1>Select Defenses</h1>
                    <FormControl className={classes.formControl}>
                        <Select
                            value=''
                            onChange={this.handleSelect}
                            displayEmpty
                            name="Defenses"
                            className={classes.selectEmpty}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {defList}
                        </Select>
                        <FormHelperText>Select Defenses</FormHelperText>
                    </FormControl>
                    <Button type="submit" variant="contained">NEXT</Button>
                </form>
                {pickedPlayersList}
            </div>
        )
    }
}

const StyledDEFPage = withStyles(styles)(DEFPage);
export default connect(mapStateToProps)(StyledDEFPage);