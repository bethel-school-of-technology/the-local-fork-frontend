import React from "react";
import axios from "axios";

export default class Newres extends React.Component {
  constructor(props) {
    super(props)
  
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeLo = this.onChangeLo.bind(this);
    this.onChangeHours = this.onChangeHours.bind(this);
    // this.onChangeAvailability = this.onChangeAvailability.bind(this);
    this.onChangeRating = this.onChangeRating.bind(this);
    // this.onChangeMenu = this.onChangeMenu.bind(this);
    // this.onChangeDeleted = this.onChangeDeleted.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  
    this.state = {
          name: "",
          location: "",
          hours: "",
          // availability: "",
          rating: "",
          // menu: "",
          // deleted:""
    }//Need to contuine to update everything. 
  }
  
  onChangeName(e) {
    this.setState({ name: e.target.value })
  }
  
  onChangeLo(e) {
    this.setState({ location: e.target.value })
  }

  onChangeHours(e) {
    this.setState({ hours: e.target.value })
  }

  // onChangeAvailability(e) {
  //   this.setState({ availability: e.target.value })
  // }

  onChangeRating(e) {
    this.setState({ rating: e.target.value })
  }

  // onChangeMenu(e) {
  //   this.setState({ menu: e.target.value })
  // }

  // onChangeDeleted(e) {
  //   this.setState({ deleted: e.target.value })
  // }
  
  onSubmit(e) {
    e.preventDefault()
  
    const resObject = {
       name: this.state.name,
       location: this.state.location,
        hours: this.state.hours,
        // availability: this.state.availability,
        rating: this.state.rating,
        // menu: this.state.menu,
        // deleted: this.state.deleted
    }; 
  
    axios.post('http://localhost:5000/restaurant/addRes', resObject)
        .then((res) => {
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
        });
  
    this.setState({ name:'', location:'', hours:'', rating: ''})
    // this.setState({ name:'', location:'', hours:'', availability:'', rating: '', menu: '', deleted:'' })
  }
  
  
  render() {
    return (
        <div className="wrapper">
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>  Name</label>
                    <input type="text" value={this.state.name} onChange={this.onChangeName} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Location</label>
                    <input type="text" value={this.state.location} onChange={this.onChangeLo} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Hours</label>
                    <input type="text" value={this.state.hours} onChange={this.onChangeHours} className="form-control" />
                </div>
                {/* <div className="form-group">
                    <label>Availability</label>
                    <input type="text" value={this.state.availability} onChange={this.onChangeAvailability} className="form-control" />
                </div> */}
                <div className="form-group">
                    <label>Rating</label>
                    <input type="text" value={this.state.rating} onChange={this.onChangeRating} className="form-control" />
                </div> 
                {/* <div className="form-group">
                    <label>Menu</label>
                    <input type="text" value={this.state.menu} onChange={this.onChangeMenu} className="form-control" />
                </div> <div className="form-group">
                    <label>Deleted</label>
                    <input type="text" value={this.state.deleted} onChange={this.onChangeDeleted} className="form-control" />
                </div> */}
                <div className="form-group">
                    <input type="submit" value="Submit" className="btn btn-success btn-block" />
                </div>
            </form>
        </div>
    )
  }
  }
