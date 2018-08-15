import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRB } from '../../redux/actions/playerActions';
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
    runningbacks: state.runningbacks
  });

class RBPage extends Component {

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        this.props.dispatch(fetchRB());
    }

    goToWr = (event) => {
        event.preventDefault();
        // this.props.dispatch({ type: 'ADD_PLAYER', payload: this.state.runningback })
        this.props.history.push('/wr')
    }

    render() {
        let rbList;
        if (this.props.runningbacks.runningbacks.Players) {
            rbList = this.props.runningbacks.runningbacks.Players.map((RB, index) => {
                return (
                    <option value="RB1" key={index}>{RB.displayName}</option>
                )
            })
        }
        return (
            <div>
                <form onSubmit={this.goToWr}>
                    <h1>Select Runningback(s)</h1>
                    <select>
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