import React, {useContext} from "react";

import RestContext from "../Utils/RestContext";


const SearchBar = ({handleSubmit, query, findRestaurant}) => {

    const context = useContext(RestContext);



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

