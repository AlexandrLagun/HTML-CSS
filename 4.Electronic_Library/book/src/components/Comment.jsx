import React from "react";

class Comment extends React.PureComponent {

    deleteCommentHandler = () => {
        this.props.deleteCommentHandler(this.props.commentAuthorId, this.props.date)
    }

  render() {
    let { commentAuthor, commentText, date, isAdmin } = this.props;
    let commentDate = new Date(date).toLocaleString();
    let deleteComment = isAdmin ? <button  onClick={this.deleteCommentHandler}>delete comment</button> : null;
    return (
      <div>
        <p>{commentAuthor}</p>
        <p>{commentText}</p>
        <p>{commentDate}</p>
        {deleteComment}
      </div>
    );
  }
}

export default Comment;