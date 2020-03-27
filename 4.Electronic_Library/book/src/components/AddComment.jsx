import React from "react";

class AddComment extends React.PureComponent {

    state = {
      commentText: ''
    }
  
    commentTextChangeHandler = e => {
      this.setState({ commentText: e.target.value })
    }
  
    submitHandler = e => {
      e.preventDefault();
      this.props.addCommentHandler(this.state.commentText)
      this.setState({ commentText: '' })
    }
  
    render() {      
      return (<form onSubmit={this.submitHandler}>
                <div>
                <textarea type="text" placeholder="Enter your comment" onChange={this.commentTextChangeHandler} value={this.state.commentText}/>
                <button type="submit">Send comment</button>
                </div>
            </form>);
    }
  }
  
  export default AddComment;