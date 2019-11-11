import React from "react";
import Post from "./Post";
import "./instagram.scss";
import Leftcard from "./Leftcard";

// import { Route } from "react-router-dom";

class Title extends React.Component {
  render() {
    return (
      <div className="head">
        <div className="navi">
          <div className="navi-card">
            <div className="insta-icons">
              <h1>
                <i className="fab fa-instagram" />
                <i className="fa fa-minus" />
                𝕴𝖓𝖘𝖙𝖆𝖌𝖗𝖆𝖒
              </h1>
            </div>
            <div className="search">
              <input type="text" placeholder="search" />
            </div>
            <div className="creaters">
              <div className="direction">
                <i className="fa fa-compass" />
              </div>
              <div className="heart">
                <i className="fa fa-heart" />
              </div>
              <div className="profile">
                <i className="fa fa-user" />
              </div>
            </div>
          </div>
        </div>
        <div className="contain">
          <div className="right-card">
            <div className="top">
              <div className="profile">
                {/* <i className="far fa-circle" /> */}
                <img src="https://placeimg.com/50/50/place" alt="" />
              </div>
              <h2>nane pavi </h2>
              <i className="fas fa-ellipsis-h" />
            </div>
            <div className="body">
              <Post />
            </div>
          </div>
          <div className="l-c">
            <Leftcard />
          </div>
        </div>
      </div>
    );
  }
}

export default Title;
