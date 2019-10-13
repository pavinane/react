import React from "react";
import "./post.scss";
class Post extends React.Component {
  render() {
    return (
      <div className="post">
        <img src="https://placeimg.com/500/500/place" alt="" />
      </div>
    );
  }
}

class Like extends React.Component {
  state = {
    showIcon: false
  };

  showIc = () => this.setState(({ showIcon }) => ({ showIcon: !showIcon }));

  render() {
    const { showIcon } = this.state;
    return (
      <div className="like">
        {/* {showIcon ? "fas fa-heart" : "far fa-heart"} */}
        <i
          className={showIcon ? "fas fa-heart" : "far fa-heart"}
          onClick={this.showIc}
        ></i>
      </div>
    );
  }
}
class Bookmark extends React.Component {
  state = {
    showIcon: false
  };

  showIc = () => this.setState(({ showIcon }) => ({ showIcon: !showIcon }));

  render() {
    const { showIcon } = this.state;
    return (
      <div className="bookmak">
        <i
          className={showIcon ? "fas fa-bookmark" : "far fa-bookmark"}
          onClick={this.showIc}
        ></i>
      </div>
    );
  }
}

class Comment extends React.Component {
  state = {
    showIcon: false
  };
  showIc = () => this.setState(({ showIcon }) => ({ showIcon: !showIcon }));

  render() {
    const { showIcon } = this.state;
    return (
      <div className="comment">
        <i
          className={showIcon ? "far fa-comment" : "far fa-comment"}
          onClick={this.showIc}
        ></i>
        {showIcon && <input type="pavi" />}
      </div>
    );
  }
}
class Share extends React.Component {
  state = {
    showIcon: false
  };
  showIc = () => this.setState(({ showIcon }) => ({ showIcon: !showIcon }));

  render() {
    const { showIcon } = this.state;
    return (
      <div className="share">
        <i
          className={
            showIcon ? "fab fa-telegram-plane" : "fab fa-telegram-plane"
          }
          onClick={this.showIc}
        ></i>
        {showIcon && (
          <div className="option">
            <i class="fab fa-whatsapp"></i>
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
            <i class="fas fa-link"></i>
          </div>
        )}
      </div>
    );
  }
}

class PostImage extends React.Component {
  render() {
    return (
      <div className="post-image">
        <div className="post">
          <Post />
        </div>
        <div className="sym">
          <div className="three">
            <Like />
            <Share />
            <Comment />
          </div>
          <div className="book">
            <Bookmark />
          </div>
        </div>
      </div>
    );
  }
}
export default PostImage;
