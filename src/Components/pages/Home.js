//The one We wired up
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row'
import Figure from 'react-bootstrap/Figure'
import FigureImage from 'react-bootstrap/FigureImage'
import FigureCaption from 'react-bootstrap/FigureCaption'

// import SearchBar from '../searchbar';
// import DisplaySearch from './DisplaySearch';

function Home({ restSearchData, typing,  }) {
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
    <div>
     
      {typing ? ( 
        <div >
          <Row>
          {restSearchData.map((data, id) => (
            <div key={id} className="col-lg-3 col-sm-6">
              <Figure>
                <FigureImage
                  width={171}
                  height={180}
                  alt="171x180"
                  src="https://twohealthykitchens.com/wp-content/uploads/2015/12/Christmas-Salad-Recipe-Wreath.jpg"
                  style={{ width: "20rem"}} />
                <FigureCaption>
                  {data.name}
                  <br/>
                  {data.location}
                  <br/>
                  <Link to={`/Restaurants/${data.name}`}>View more</Link>
                </FigureCaption>
                
                  {/* <button onClick={() => getRes(rest.name)}>Click me</button> */}
                  {/* <button  onClick={() => getRes(rest.name),goRes} >Click me</button> */}
                  
                  {/* <button onClick={goRes}>Click me</button> */}
               
              </Figure>
              
            </div>
           
          ))}
          </Row>
        </div>
      ) : (
        <div>
          <Row>
          {restSearchData.map((data, id) =>  id < 3 &&(
            <div key={id} className="col-lg-3 col-sm-6">
               <Figure>
               <Link to={`/Restaurants/${data.name}`}>
                <FigureImage
                  variant="top"
                  src="https://twohealthykitchens.com/wp-content/uploads/2015/12/Christmas-Salad-Recipe-Wreath.jpg"
                  style={{ width: "20rem" }}
                /></Link>
                <FigureCaption>
                  {data.name}
                  <br/>
                  {data.location}
                  <br/>
                 
                </FigureCaption>
                
                  {/* <button onClick={() => getRes(data.name)}>Click me</button> */}
                  {/* <button  onClick={() => getRes(rest.name),goRes} >Click me</button> */}
        
                  {/* <button onClick={goRes}>Click me</button> */}
               
              </Figure>
             
            </div>
          ))}
         </Row>
        </div>
      )}
      
    </div>
  );
}

export default Home;



// <div>
// <Row>
// {restSearchData.map((data, id) =>  id < 3 &&(
//   <div key={id} className="col-lg-3 col-sm-6">
//      <Card>
//       <Card.Img
//         variant="top"
//         src="https://twohealthykitchens.com/wp-content/uploads/2015/12/Christmas-Salad-Recipe-Wreath.jpg"
//         style={{ width: "12rem" }}
//       />
//       <Card.Body>
//         <Card.Title>{data.name}</Card.Title>
//         <Card.Text>{data.location}</Card.Text>
//       </Card.Body>
//       <Card.Footer>
//         {/* <button onClick={() => getRes(data.name)}>Click me</button> */}
//         {/* <button  onClick={() => getRes(rest.name),goRes} >Click me</button> */}
//   <Link to={`/Restaurants/${data.name}`}>View more</Link>
//         {/* <button onClick={goRes}>Click me</button> */}
//       </Card.Footer>
//     </Card>
   
//   </div>
// ))}
// </Row>
// </div>
// )}

// </div>
// );
// }