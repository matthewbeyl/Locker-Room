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

    componentDidMount() {
      this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        this.props.dispatch(fetchDEF());
    }

    // propName and await??
    handleSelect = propName => async (event) => {
        console.log(event.target.value);
        await this.setState({
            [propName]: event.target.value,
        })
        console.log(this.state);
    }

    goToTeam = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: TEAM_ACTIONS.SELECT_PLAYER, payload: this.state })
        this.props.history.push('/team')
    }

    render() {
        let defList;
        if (this.props.players.defenses.Players) {
            defList = this.props.players.defenses.Players.map((DEF, index) => {
                return (
                    <option key={index}>{DEF.displayName}</option>
                )
            })
        }
        return (
            <div>
                <form onSubmit={this.goToTeam}>
                    <h1>Select Defense(s)</h1>
                        <select onChange={this.handleSelect('DEF1')}>
                            {defList}
                        </select>
                        <select onChange={this.handleSelect('DEF2')}>
                            {defList}
                        </select>
                    <Button type="submit" variant="contained">NEXT</Button>
                </form>
            </div>
        )
    }
}

const StyledDEFPage = withStyles(styles)(DEFPage);
export default connect(mapStateToProps)(StyledDEFPage);