import React from "react";
import { FaStar } from "react-icons/fa";
import { useState } from "react/cjs/react.development";
import axios from "axios";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function App() {
  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (value) => {
    setHoverValue(value);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  axios.post('http://localhost:5000/review/addReview').then(result => {
    //const token = result.data;
    //localStorage.setItem("mytoken",JSON.stringify(token));
    console.log(result)
});

  return (
    <div style={styles.container}>
      <h2>Don't be shy... Leave a rating!</h2>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              style={{
                marginRight: 10,
                cursor: "pointer",
              }}
              color={
                (hoverValue || currentValue) > index
                  ? colors.orange
                  : colors.grey
              }
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
            />
          );
        })}
      </div>
      <textarea placeholder="Leave a review" style={styles.textarea} />
      <button style={styles.button}>Submit</button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    margin: "20px 0",
    minHeight: 100,
    padding: 10
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10
  },
};

export default App;

// export default class Favorites extends React.Component {
//   render() {
//     return (
//       <ul>
//         <li>
//           <h1>User Favorites Page</h1>
//         </li>
//       </ul>
//     );
//   }
//}