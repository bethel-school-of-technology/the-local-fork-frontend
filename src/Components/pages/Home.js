import React from 'react';
// import axios from 'axios';


export default class Home extends React.Component {
    state = {
        // persons: []
    }

    // componentDidMount() {
    //     axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
    //     console.log(res);
    //     this.setState({persons: res.data });        
    // });
    // }

    render() {
        return  <ul>
            <li><h1>Home Page</h1></li>
            </ul>
        
    }
}
