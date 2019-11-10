import React, { Component } from "react";
import { CommentSelectUser, CommentInputForm, CommentsCard } from "./Comment";

class Comment extends Component {
  state = {
    comments: [],
    user: ""
  };

  setUser = n => this.setState({ user: n });

  addingComment = comment =>
    this.setState(({ comments }) => ({ comments: [...comments, comment] }));

  render() {
    const { comments, user } = this.state;
    return (
      <div className="comment">
        <CommentSelectUser set={this.setUser} />
        <CommentInputForm addComment={this.addingComment} user={user} />
        <CommentsCard comments={comments} />
      </div>
    );
  }
}

export default Comment;
