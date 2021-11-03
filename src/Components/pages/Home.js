import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../searchbar';
import DisplaySearch from './DisplaySearch';

function Home({restSearchData}) {

    const [data, setData] = useState([]);


    console.log(restSearchData)




    useEffect(() => {
        axios.get(`http://localhost:5000/restaurant/addRes`).then(res => {
            console.log(res);
            setData(res.data)


        });
    }, [])

    return (
        <div>
            <ul>
                <li></li>
                <li>{data.name}</li>
{/* 
                {data.map(d => (
                <div>
                    <li>{data.name}</li>
                    <li>{d.location}</li>
                    <li>{d.hours}</li>
                    <li>{data.availability}</li>
                    <li>{data.rating}</li>
                    <li>{data.menu}</li>
                    <li>{data.deleted}</li>
                </div>
               
            ))}  */}

            {/* {!restSearchData.length === 0 ?  */}
            {restSearchData.map((data, i) => (
                <div>
                    {data.name}
                    
                </div>
            )) 
            //  <div>hi</div>   
        }

            </ul>
    
        </div>
    );

}




export default Home





















// import React from 'react';
// // import axios from 'axios';


// export default class Home extends React.Component {
//     state = {
//         // persons: []
//     }

//     // componentDidMount() {
//     //     axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
//     //     console.log(res);
//     //     this.setState({persons: res.data });        
//     // });
//     // }

//     render() {
//         return  <ul>
//             <li><h1>Home Page</h1></li>
//             </ul>

//     }
// }
