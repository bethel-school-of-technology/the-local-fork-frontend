// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import Card from "react-bootstrap/Card";
// // import Button from 'react-bootstrap/Button';
// // import Row from 'react-bootstrap/Row'
// // import Col from 'react-bootstrap/Col'

// // import CardGroup from "react-bootstrap/CardGroup";
// // import { getNodeText, getRoles } from "@testing-library/dom";

// const Res = "http://localhost:5000/restaurant/";
// const Search = "http://localhost:5000/restaurant/search";

// export default function Home({searchResults}) {
//   const [post, setPost] = useState(null);
//   console.log(post);
//   // const [name, setName] = useState('');
//   //   console.log(post);   THIS IS THE WORKING ONE

//   useEffect(() => {
//     axios.get(Res).then((response) => {
//       setPost(response.data.restaurants);
//       //   setName(response)
//     });
//   }, []);

//   console.log(searchResults);

//   const getRes = (name) => {
//     console.log(name);

//     axios.get(`${Res}/${name}`).then((response) => {
//       console.log(response);
//       localStorage.setItem("restourantData", JSON.stringify(response.data));
//     });
//   };

//   const goRes = () => {
//     window.location.href = "http://localhost:3000/reviews";
//   };

// // const Example = () => {
// //   const [isTyping, setTyping] = useState(false);
// //   const [change, setChange] = useState("");

// //   useEffect(()  => {
// //     setTyping(true);
// //    }, [change] );

// //    const handleChange = (e) => {
// //      const { value } = e.target;

// //      setChange(value);
// //    };

//   if (!post) return null;
//   console.log(post);

//   const currentReviews = post[0].reviews.map((rest, id) => (
//     <li key={id}>
//       {rest.username}
//       {rest.review}
//     </li>
//   ));

//   const currentRests = post.map((rest, id) => id < 3 && (
//       <div class="col-lg-4 col-sm-6">
//       <Card>
//         <Card.Img
//           variant="top"
//           src="https://twohealthykitchens.com/wp-content/uploads/2015/12/Christmas-Salad-Recipe-Wreath.jpg"
//           style={{ width: "12rem" }}
//         />
//         <Card.Body>
//           <Card.Title>{rest.name}</Card.Title>
//           <Card.Text></Card.Text>
//         </Card.Body>
//         <Card.Footer>
//           <button class="btn btn-primary bth-outline" onClick={() => getRes(rest.name)}>Click me</button>
//           {/* <button  onClick={() => getRes(rest.name),goRes} >Click me</button> */}

//           <button onClick={goRes}>Click me</button>
//         </Card.Footer>
//       </Card>
//       </div>
//   ));

//   {
//     /* <button  onClick={both}>Click me</button> */
//   }

//   return <div class="row">{currentRests}</div>;
// }

//Chads Search.

import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
// import SearchBar from '../searchbar';
// import DisplaySearch from './DisplaySearch';

function Home({ restSearchData, typing }) {
  const [data, setData] = useState([]);

  // console.log(restSearchData)

  useEffect(() => {
    // console.log(typing);

    axios.get(`http://localhost:5000/restaurant/addRes`).then((res) => {
      // console.log(res);
      setData(res.data);
    });
  }, []);

  //I need to try and copy thw above

  return (
    <div>
      {typing ? (
        <ul>
          {restSearchData.map((data, id) => (
            <div key={id}>
              <Card>
              <Card.Title>{data.name}</Card.Title>
              <Card.Title>{data.location}</Card.Title>
              </Card>
            </div>
          ))}
          <Card>
            <Card.Img
              variant="top"
              src="https://twohealthykitchens.com/wp-content/uploads/2015/12/Christmas-Salad-Recipe-Wreath.jpg"
              style={{ width: "12rem" }}
            />
            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
            <Card.Footer>
              {/* <button onClick={() => getRes(rest.name)}>Click me</button> */}
              {/* <button  onClick={() => getRes(rest.name),goRes} >Click me</button> */}

              {/* <button onClick={goRes}>Click me</button> */}
            </Card.Footer>
          </Card>

          {/* {!restSearchData.length === 0 ?  */}
          {/* {restSearchData.map((data, id) => <div>{data.name}</div>)} */}
        </ul>
      ) : (
        <div>all rest</div>
      )}
    </div>
  );
}

export default Home;
