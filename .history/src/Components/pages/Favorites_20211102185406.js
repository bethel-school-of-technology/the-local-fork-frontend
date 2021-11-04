import React from "react";
import { FaStar } from "react-icons/fa";


const colors = {
    orange: "#FFBA5A",
    grey:  "#a9a9a9"
}


function App() {
    return (
        <div>
            <h2>Restaurant Ratings</h2>
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }
}

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
