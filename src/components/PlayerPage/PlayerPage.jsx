import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav'

import { USER_ACTIONS } from "../../redux/actions/userActions";

import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    menu: {
        width: 200,
    },
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
});

let id = 0;
function createData(firstName, lastName, number, position, height, weight, college) {
    id += 1;
    return { id, firstName, lastName, number, position, height, weight, college};
}

const rows = [
    createData('Aaron', 'Rodgers', 12, 'QB', `6'2"`, 225, 'California'),
];

const mapStateToProps = state => ({
    user: state.user,
});

class PlayerPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            playerToDisplay: ''
        }
    }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    }

    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
            this.props.history.push('home');
        }
    }

    render() {
        const { classes } = this.props;
        let content = null;

        console.log(this.state);
        console.log(this.state.playerToDisplay);

        if (this.props.user.userName) {
            content = (
                <div>
                    <h1>Player Page</h1>
                </div>
            );
        }

        return (
            <div>
                {content}
                <Paper className={classes.root}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Aaron_rodgers_2014.jpg/600px-Aaron_rodgers_2014.jpg" alt="Aaron_Rodgers"/>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <CustomTableCell>First Name</CustomTableCell>
                                <CustomTableCell>Last Name</CustomTableCell>
                                <CustomTableCell numeric>Number</CustomTableCell>
                                <CustomTableCell >Postion</CustomTableCell>
                                <CustomTableCell >Height</CustomTableCell>
                                <CustomTableCell numeric>Weight</CustomTableCell>
                                <CustomTableCell >College</CustomTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map(row => {
                                return (
                                    <TableRow className={classes.row} key={row.id}>
                                        {/* <CustomTableCell component="th" scope="row">
                                            {row.name}
                                        </CustomTableCell> */}
                                        <CustomTableCell numeric>{row.firstName}</CustomTableCell>
                                        <CustomTableCell numeric>{row.lastName}</CustomTableCell>
                                        <CustomTableCell numeric>{row.number}</CustomTableCell>
                                        <CustomTableCell numeric>{row.position}</CustomTableCell>
                                        <CustomTableCell numeric>{row.height}</CustomTableCell>
                                        <CustomTableCell numeric>{row.weight}</CustomTableCell>
                                        <CustomTableCell numeric>{row.college}</CustomTableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                    
                </Paper>
            </div>
        )
    }
}

const StyledPlayerPage = withStyles(styles)(PlayerPage);
export default connect(mapStateToProps)(StyledPlayerPage)