import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fsHeart } from "@fortawesome/free-solid-svg-icons";
import Today from "./Today";

export default class LikePage extends Component {
  state = {
    count:
      typeof sessionStorage.getItem("likesCount") == "string"
        ? parseInt(sessionStorage.getItem("likesCount"))
        : 0,
    like: false,
  };
  componentDidMount() {
    console.log("Componente renderizado en el DOM");
  }

  componentDidUpdate(prevProps, prevState) {
    sessionStorage.setItem("likesCount", this.state.count);
    console.log(prevProps);
    console.log(prevState);
  }

  addLikeOnClickHandler = () => {
    this.setState({
      count: this.state.count + 1,
      like: true,
    });
  };

  removeLikeOnClickHandler = () => {
    this.setState({
      count: this.state.count - 1,
      like: false,
    });
  };

  render() {
    return (
      <div className="container my-3">
        <div className="row">
          <div className="col-4">
            <Today />
          </div>

          <div className="col offset-5 text-end">
            <label className="pe-2">
              {this.state.like ? "Me gusta" : "Te gusta la página?"}
            </label>
            <FontAwesomeIcon
              icon={this.state.like ? fsHeart : faHeart}
              onClick={
                this.state.like
                  ? this.removeLikeOnClickHandler
                  : this.addLikeOnClickHandler
              }
            />
            <p className="text-end">Likes : {this.state.count}</p>
          </div>
        </div>
      </div>
    );
  }
}
