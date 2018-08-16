import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDEF } from '../../redux/actions/playerActions';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { USER_ACTIONS } from '../../redux/actions/userActions';


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

    goToTeam = (event) => {
        event.preventDefault();
        // this.props.dispatch({ type: 'ADD_PLAYER', payload: this.state.defense })
        this.props.history.push('/team')
    }

    render() {
        let defList;
        if (this.props.players.defenses.Players) {
            defList = this.props.players.defenses.Players.map((DEF, index) => {
                return (
                    <option value="DEF" key={index}>{DEF.displayName}</option>
                )
            })
        }
        return (
            <div>
                <form onSubmit={this.goToTeam}>
                    <h1>Select Defense(s)</h1>
                        <select>
                            {defList}
                        </select>
                        <select>
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