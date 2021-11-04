import axios from "axios";
import React, { useState, useEffect } from "react";

const Res = "http://localhost:5000/restaurant/";

export default function Home() {
  const [post, setPost] = useState(null);
  console.log(post);
  // const [name, setName] = useState('');
  //   console.log(post);   THIS IS THE WORKING ONE

  useEffect(() => {
    axios.get(Res).then((response) => {
      setPost(response.data.restaurants);
      //   setName(response)
      console.log(response.data.restaurants);
    });
  }, []);

  if (!post) return null;

  const currentRests = post.map((rest, id) => (
    <li key={id}>
      <h1>{rest.name}</h1>
      {/* <h1>{rest.review}</h1> */}
      <h3>{rest.location}</h3>
    </li>
  ));

  return (
    <ul>
      {currentRests}
      {/* <li>{name}</li> */}
      {/* <li>{post.location}</li>
      <li>{post.hours}</li>
      <li>{post.rating}</li> */}
    </ul>
  );
}

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
