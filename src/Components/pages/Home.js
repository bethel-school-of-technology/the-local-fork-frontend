import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Row from "react-bootstrap/Row";
import Figure from "react-bootstrap/Figure";
import FigureImage from "react-bootstrap/FigureImage";
import FigureCaption from "react-bootstrap/FigureCaption";
import { Data } from "@react-google-maps/api";


function Home({ restSearchData, typing }) {
  const [resData, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/restaurant/`).then((res) => {
      setData(res.data.restaurants);
      console.log(res.data.restaurants)
    });
  }, []);

  return (
    <div>
      {typing ? (

        // Search Typing
        <div>
          <Row className="container">
            {restSearchData.map((data, id) => (
              <div key={id} className="" id="card-wrapper">

                <Figure className="card-con">
                  <Link to={`/Restaurants/${data._id}`}>
                    {data.image?.length > 0 &&
                      <FigureImage
                        src={data?.image[0]} />}
                  </Link>

                  <FigureCaption>
                      <h4> {data.name} </h4>
                     
                      <h6>{data.location} </h6>
                     
                      {data.hours}
                      <br />
                      <Link to={`/Restaurants/${data._id}`}>View more</Link>
                    </FigureCaption>
                
                </Figure>
              </div>
            ))}
          </Row>
        </div>

      ) : (

        // Search Button
        <div>
          <Row>
            {resData.map((data, id) => (
              <div key={id} className="" id="card-wrapper">
                  
                  <Figure className="card-con">
                    <Link to={`/Restaurants/${data._id}`}>
                      {data.image?.length > 0 &&
                        <FigureImage
                          src={data?.image[0]} />}
                    </Link>

                    <FigureCaption>
                      <h4> {data.name} </h4>
                     
                      <h6>{data.location}</h6>
                    
                      {data.hours}
                      <br />
                      <Link to={`/Restaurants/${data._id}`}>View more</Link>
                    </FigureCaption>
                  </Figure>
                </div>
              )
            )}
          </Row>
        </div>
      )} 
    </div>
  );
}

export default Home;
