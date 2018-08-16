import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWR } from '../../redux/actions/playerActions';
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

class WRPage extends Component {

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        this.props.dispatch(fetchWR());
    }

    goToTe = (event) => {
        event.preventDefault();
        // this.props.dispatch({ type: 'ADD_PLAYER', payload: this.state.tightend })
        this.props.history.push('/te')
    }

    render() {
        let wrList;
        if (this.props.players.widereceivers.Players) {
            wrList = this.props.players.widereceivers.Players.map((WR, index) => {
                return (
                    <option value="WR" key={index}>{WR.displayName}</option>
                )
            }) 
        }
        return (
            <div>
                <form onSubmit={this.goToTe}>
                    <h1>Select Wide Receivers</h1>
                    <select>
                        {wrList}
                    </select>
                    <select>
                        {wrList}
                    </select>
                    <select>
                        {wrList}
                    </select>
                    <select>
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