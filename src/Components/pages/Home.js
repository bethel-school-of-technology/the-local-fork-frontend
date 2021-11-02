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
        // console.log(response.data.restaurants)
    });
  }, []);

  if (!post) return null;
 
  const currentRests = post.map((rest, id) => (
    <li key={id}>
      <h1>{rest.name}</h1>
      <h1>{rest.review}</h1>
      <h3>{rest.hours}</h3>
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

//The main code Ive been working on.
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Home() {

//     const [data, setData] = useState( []);

//     useEffect(() => {
//         axios.get(`http://localhost:5000/restaurant/Res2`).then(data => {

//         console.log(data);
//         setData(data)
//     });
//     }, [])

//         return (  <ul>
//             <li>Hello!</li>
//             <li>{data.name}</li>
//             <li></li>
//             {/* {data.map(d => (
//                 <div>
//                     <li>{data.name}</li>
//                     <li>{d.location}</li>
//                     <li>{d.hours}</li>
//                     <li>{data.availability}</li>
//                     <li>{data.rating}</li>
//                     <li>{data.menu}</li>
//                     <li>{data.deleted}</li>
//                 </div>

//             ))}  */}

//                 </ul>
//         );

// }
// export default Home

// // From the office hours.
// import React, { useState, useEffect } from "react";
// // import axios from 'axios';

// function Home() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const resData = JSON.stringify(data);
//     console.log(resData.Restaurant);
//     setData(resData.Restaurant);
//   }, []);

//   return (
//     <ul>
//       <h1>Welcome!</h1>
//       {/* <h2>This is {data.name} Page</h2> */}
//       {/* <div>
//         <li>First Name:   {data.firstname}</li>
//         <li>Last Name:   {data.lastname}</li>
//         <li>City:   {data.city}</li>
//         <li>Tagline:  {data.tagline}</li>
//         <li>Username:   {data.username}</li>
//       </div> */}
//     </ul>
//   );
// }
// export default Home;

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

// import React from 'react';
// import axios from 'axios';

// export default class Home extends React.Component {
//     state = {
//       name: []
//     }

//     componentDidMount() {
//         axios.get(`http://localhost:5000/restaurant/resources`).then(res => {
//         console.log(res);
//         this.setState({name: res.data });
//     });
//     }

//     render() {
//         return  <ul>
//             <li><h1>Home Page</h1></li>
//             <li>{}</li>
//             </ul>

//     }
// }
