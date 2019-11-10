import React, { Component } from "react";
import { uid } from "react-uid";
import shortid from "shortid";

const users = ["chaal", "pritam", "ashok", "sathish", "pavi"];

export class CommentSelectUser extends Component {
  state = {
    user: "no user selected"
  };

  selectUser = name => {
    this.setState({ user: name });
    this.props.set(name);
  };

  render() {
    const { user } = this.state;
    return (
      <div className="comment-select-user">
        {users.map(u => (
          <button key={uid(u)} onClick={() => this.selectUser(u)}>
            {u}
          </button>
        ))}
        <p>{user}</p>
      </div>
    );
  }
}

export class CommentInputForm extends Component {
  state = {
    comment: "",
    inputTime: "",
    btnDisable: true
  };

  handleChange = e =>
    this.setState({
      comment: e.target.value,
      btnDisable: e.target.value ? false : true
    });

  handleSubmit = e => {
    e.preventDefault();
    this.props.addComment({
      user: this.props.user,
      comment: this.state.comment,
      commentId: shortid.generate(),
      time: new Date().toLocaleString()
    });
    this.setState({ comment: "", btnDisable: true });
  };

  render() {
    const { comment, btnDisable } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="comment"
          value={comment}
          placeholder="Add a comment..."
          onChange={this.handleChange}
        />
        <button type="submit" disabled={btnDisable}>
          Post
        </button>
      </form>
    );
  }
}

export class CommentLikeButton extends Component {
  state = {
    liked: false,
    count: 0
  };
  likeIncrementCounter = () =>
    this.setState(({ count }) => ({ count: count + 1, liked: true }));

  likeDecrementCounter = () =>
    this.setState(({ count }) => ({ count: count - 1, liked: false }));

  render() {
    const { count, liked } = this.state;
    return (
      <div className="comment-like-button">
        {liked ? (
          <p onClick={this.likeDecrementCounter}>&#9829;</p>
        ) : (
          <p onClick={this.likeIncrementCounter}>&#9825;</p>
        )}

        <p>{count}</p>
      </div>
    );
  }
}

export class CommentsCard extends Component {
  state = {
    reply: false
  };

  render() {
    const { comments } = this.props;
    return (
      <div className="comments">
        {comments &&
          comments.map(c => (
            <div className="c-block" key={uid(c)}>
              <div className="c-left">
                <p>
                  <span>{c.user}</span>
                  {c.comment}
                </p>
                <p>
                  {c.time} <span>Reply</span>
                </p>
              </div>
              <div className="c-right">
                <CommentLikeButton />
              </div>
            </div>
          ))}
      </div>
    );
  }
}
