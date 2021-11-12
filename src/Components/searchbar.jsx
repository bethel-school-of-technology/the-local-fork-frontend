import React, { useContext } from "react";

import RestContext from "../Utils/RestContext";
import { Button, Row, xs, Col, Form, FormControl, InputGroup } from "react-bootstrap";


const SearchBar = ({ handleSubmit, query, findRestaurant }) => {

    const context = useContext(RestContext);



    return (
        <div>

            <Form onSubmit={handleSubmit}>
                
                <Row className="align-items-right">
                    <Col xs="auto">
                        
                        <Form.Control type="text"
                            value={query}
                            onChange={findRestaurant}
                            style={{borderRadius: "100px"}} />
                    </Col>
                    <Col>
                        <Button type="submit" className="mb-2" >Search</Button>
                    </Col>
                </Row>
            </Form>

        </div>
    )
}

export default SearchBar;

