import React from "react";
import axios from "axios";

export default class Newres extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeReview = this.onChangeReview.bind(this);

    this.state = {
      username: "",
      review: "",
    };
  }

  onChangeUserName(e) {
    this.setState({ username: e.target.value });
  }

  onChangeReview(e) {
    this.setState({ review: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const resObject = {
      username: this.state.username,
      review: this.state.review,
    };

    axios
      .post("http://localhost:5000/restaurant/addRes", resObject)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    this.setState({ username: "", review: "" });
  }

  render() {
    return (
      
      <div className="wrapper" style={{margin:"20px"}}>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label><h2>User Name</h2></label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.onChangeUserName}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label><h2>Review</h2></label>
            <textarea   type="text"
              value={this.state.review}
              onChange={this.onChangeReview}
              className="form-control">
          
             </textarea>
          </div>
          <div className="form-group">
         
            <input
              type="submit"
              value="Submit"
              className="btn btn-success btn-block"
            />
          </div>
        </form>
      </div>
    );
  }
}
