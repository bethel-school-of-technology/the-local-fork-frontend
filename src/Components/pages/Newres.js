import React from "react";
import axios from "axios";

export default class Newres extends React.Component {
  constructor(props) {
    super(props)

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeReview = this.onChangeReview.bind(this);
    this.onChangeRating = this.onChangeRating.bind(this);
    this.onChangeRev = this.onChangeRev.bind(this);
    this.onChangeRes = this.onChangeRes.bind(this);
    this.onSubmit = this.onSubmit.bind(this);  //Don't forget this....

    this.state = {
      title: "",
      review: "",
      rating: "",
      res: "",
      rev: "",
    }
  }

  onChangeTitle(e) {
    this.setState({ title: e.target.value });
  }

  onChangeReview(e) {
    this.setState({ review: e.target.value });
  }

  onChangeRating(e) {
    this.setState({ rating: e.target.value });
  }
  onChangeRes(e) {
    this.setState({ res: e.target.value });
  }
  onChangeRev(e) {
    this.setState({ rev: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault()

    const revObject = {
      title: this.state.title,
      review: this.state.review,
      rating: this.state.rating,
      res: this.state.res,
      rev: this.state.rev
    }; 

    axios.post("http://localhost:5000/review/addNewReview", revObject)
      .then((res) => {
        console.log(res.data);
      }).catch((error) => {
        console.log(error);
      });

    this.setState({ title: "", review: "", rating:"", res:"", rev:"" })
  }

  render() {
    return (
      
      <div className="wrapper" style={{margin:"20px"}}>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              value={this.state.title}
              onChange={this.onChangeTitle}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Review</label>
            <textarea   
            type="text"
              value={this.state.review}
              onChange={this.onChangeReview}
              className="form-control">
          
             </textarea>
          </div>
          <div className="form-group">
            <label>Rating</label>
            <input
              type="number"
              value={this.state.rating}
              onChange={this.onChangeRating}
              className="form-control"
            />
          </div>
         
          <div className="form-group">
            <label>ResId</label>
            <input
              type="text"
              value={this.state.res}
              onChange={this.onChangeRes}
              className="form-control"
            />
          </div>
         
          <div className="form-group">
            <label>RevId</label>
            <input
              type="text"
              value={this.state.rev}
              onChange={this.onChangeRev}
              className="form-control"
            />
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
    )
  }
}
