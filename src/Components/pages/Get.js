import React from 'react';
import axios from 'axios';


export default class Get extends React.Component {
    state = {
        persons: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
        console.log(res);
        this.setState({persons: res.data });        
    });
    }

    render() {
        return  <ul>
            <li><h1>Hello. This is the get page</h1></li>
            <br/>
            {this.state.persons.map(person => (
        <li key={person.id}>{person.name}</li>))} 
        
                </ul>;
        
    }
}
