import React, {useState, useEffect} from "react";
import axios from 'axios';


const SearchBar = () => {

    const [query, setQuery] = useState("");

    const url = "http://localhost:5000/restaurant/search";

    const findRestaurant = (e) => {
        e.preventDefault();
        setQuery(e.target.value);
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        axios.post(url, {query: query}).then(response => {
            console.log(response);
        })
        console.log(query)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={query} 
                onChange={findRestaurant}/>
                <button type="submit" >Search</button>
            </form>
        </div>
    )
}

export default SearchBar;