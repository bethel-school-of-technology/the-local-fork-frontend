//The one We wired up
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";
import "../Home.css"

// import SearchBar from '../searchbar';
// import DisplaySearch from './DisplaySearch';

function Home({ restSearchData, typing, history }) {
  const [data, setData] = useState([]);

  // console.log(restSearchData)

  useEffect(() => {
    // console.log(typing);

    axios.get(`http://localhost:5000/restaurant/`).then((res) => {
      // console.log(res);
      setData(res.data);
      // console.log(data)
    });
  }, []);

  //I need to try and copy thw above

  // const getRes = (name) => {
  //       console.log(name); 
  //       history.push("/Restaurants" + name);

  //     //   // axios.get(`${Res}/${name}`).then((response) => {
  //     //   //   console.log(response);
  //     //   //   localStorage.setItem("restourantData", JSON.stringify(response.data));
  //     //   // });
  //     };

  return (
    <div className="homePage" >

      {typing ? (
        <div className="row" >
          {restSearchData.map((data, id) => (
            <div key={id}
              className="col-lg-3 col-sm-6">
              <Card >
                <Card.Img
                  variant="top"
                  src="https://twohealthykitchens.com/wp-content/uploads/2015/12/Christmas-Salad-Recipe-Wreath.jpg"
                  style={{ width: "12rem" }} />

                <Card.Body className="card">
                  <Card.Title className="title" >{data.name}</Card.Title>
                  <Card.Text>{data.location}</Card.Text>
                </Card.Body>

                <Card.Footer>
                  {/* <button onClick={() => getRes(rest.name)}>Click me</button> */}
                  {/* <button  onClick={() => getRes(rest.name),goRes} >Click me</button> */}
                  <Link to={`/Restaurants/${data.name}`}>View more</Link>
                  {/* <button onClick={goRes}>Click me</button> */}
                </Card.Footer>

              </Card>
            </div>
          ))}
        </div>
      ) : (
        <div>
          {restSearchData.map((data, id) => id < 3 && (
            <div key={id} className="col-lg-3 col-sm-6">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://twohealthykitchens.com/wp-content/uploads/2015/12/Christmas-Salad-Recipe-Wreath.jpg"
                  style={{ width: "12rem" }}/>

                <Card.Body>
                  <Card.Title>{data.name}</Card.Title>
                  <Card.Text>{data.location}</Card.Text>
                </Card.Body>
                
                <Card.Footer>
                  {/* <button onClick={() => getRes(data.name)}>Click me</button> */}
                  {/* <button  onClick={() => getRes(rest.name),goRes} >Click me</button> */}
                  <Link to={`/Restaurants/${data.name}`}>View more</Link>
                  {/* <button onClick={goRes}>Click me</button> */}
                </Card.Footer>
              </Card>

            </div>
          ))}

        </div>
      )}
    </div>
  );
}

export default Home;

{
  /* {!restSearchData.length === 0 ?  */
}
{
  /* {restSearchData.map((data, id) => <div>{data.name}</div>)} */
}
