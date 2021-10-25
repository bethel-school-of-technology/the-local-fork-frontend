// From the office hours. 
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Profile() {

    const [data, setData] = useState( []);
    

    useEffect(() => {
        axios.get(`http://localhost:5000/api/user/profile/`).then(res => {
        console.log(res);
        setData(res)
    });
    }, [])

        return (  <ul>
            <li><h1>Hello. This is the profilepage</h1></li>
            {data.map(d => (
                <div>
                    <li>{data.firstname}</li>
                    <li>{data.lastname}</li>
                    <li>{data.city}</li>
                    <li>{data.tagline}</li>
                    <li>{data.username}</li>
                </div>
               
            ))} 
       
                </ul>
        );

}
export default Profile











//Time with Adib...
// import React, { useState, useEffect } from "react";
// import UserService from '../services/user.service'

// //test
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlBIZXJuIiwiX2lkIjoiNjE2ZDUwNDI1Y2FiMGJkYmViZWU3NmI1IiwiaWF0IjoxNjM0OTMxNDQ2LCJleHAiOjE2MzUwMDM0NDZ9.yca_2yFx6b1dljKDG0GrxD5L0SdMbTnyVH2mgJBBYPg';

// function Profile() {
//   const [data, setData] = useState([]);

// //   async function fetchStuff() {
// //     await axios
// //     .get(`http://localhost:5000/api/user/profile/`, {
// //       headers: { Authorization: `Bearer ${token}` }
// //     })
// //     .then((res) => {
// //       console.log(res);
// //       // setData(res);
// //     });
// //   }
//   useEffect(() => {
//     // fetchStuff()
//     UserService.getProfile()
//   }, []);

//   return (
//     <ul>
//       <li>
//         <h1>Hello. This is the profilepage</h1>
//       </li>
//       {data.map((data) => (
//         <div>
//           <li>{data.firstname}</li>
//           <li>{data.lastname}</li>
//           <li>{data.city}</li>
//           <li>{data.tagline}</li>
//           <li>{data.username}</li>
//         </div>
//       ))}
//     </ul>
//   );
// }
// export default Profile;