import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from '../../../node_modules/axios';

class QBPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            playerList: []
        }
    }

    componentDidMount() {
        console.log('component mounted');
        this.getQuarterbacks();
    }

    getQuarterbacks() {
        Axios({
            method: 'GET',
            url: 'https://www.fantasyfootballnerd.com/service/players/json/qft55ekjyswk/QB'
        }).then((response) => {
            console.log(response.players);
        })
    }

    render() {

        return (
            <div>
                <div>
                    QB PAGE
        </div>
            </div>
        )
    }
}
// componentDidMount() {
//     console.log('component mounted');
//     // THIS IS A GOOD PLACE TO MAKE INITIAL GIT REQUEST
//     this.getPlanets();
//   }

//   getPlanets() {

//     axios({
//       method: 'GET',
//       url: 'https://swapi.co/api/planets/?format=json'
//     }).then((response) => {
//       console.log(response.data.results);
//       let planetData = response.data.results
//       this.setState({
//         planetsList: planetData.map((planetData) => {
//           return {
//             name: planetData.name,
//             diameter: planetData.diameter
//           }
//         })
//       })
//     })
//   }

export default connect()(QBPage)