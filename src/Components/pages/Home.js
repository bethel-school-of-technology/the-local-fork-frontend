import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Row from "react-bootstrap/Row";
import Figure from "react-bootstrap/Figure";
import FigureImage from "react-bootstrap/FigureImage";
import FigureCaption from "react-bootstrap/FigureCaption";

function Home({ restSearchData, typing }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/restaurant/`).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div>
      {typing ? (
        <div>
          <Row>
            {restSearchData.map((data, id) => (
              <div key={id} className="col-lg-3 col-sm-6">
                <Figure>
                  <FigureImage
                    width={171}
                    height={180}
                    alt="171x180"
                    src="https://twohealthykitchens.com/wp-content/uploads/2015/12/Christmas-Salad-Recipe-Wreath.jpg"
                    style={{ width: "20rem" }}
                  />
                  <FigureCaption>
                    {data.name}
                    <br />
                    {data.location}
                    <br />
                    <Link to={`/Restaurants/${data._id}`}>View more</Link>
                  </FigureCaption>
                </Figure>
              </div>
            ))}
          </Row>
        </div>
      ) : (
        <div>
          <Row>
            {restSearchData.map(
              (data, id) =>
                 (
                  <div key={id} className="col-lg-3 col-sm-6">
                    <Figure>
                      <Link to={`/Restaurants/${data._id}`}>
                        <FigureImage
                          variant="top"
                          src="https://twohealthykitchens.com/wp-content/uploads/2015/12/Christmas-Salad-Recipe-Wreath.jpg"
                          style={{ width: "20rem" }}
                        />
                      </Link>
                      <FigureCaption>
                        {data.name}
                        <br />
                        {data.location}
                        {data.hours}
                        <br />
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
