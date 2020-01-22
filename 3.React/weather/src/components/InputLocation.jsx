import React from 'react';

class InputLocation extends React.Component{
  constructor(props) {
    super(props);
    this.state = {location: ""};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);   
  }

  render() {
    return (
      <div>
        <div>{this.props.days}</div>
        <div className="ui category search">
        <form onSubmit={this.onSubmit} className="ui form">
          <h3 className="ChangeText">Change your location:</h3>
          <br />
          <div className="ui icon input">
            <input
              className="prompt"
              type="text"
              placeholder="Search city..."
              value={this.state.term}
              onChange={this.handleChange}
            />
            <div id="error">
            </div>
          </div>
        </form>
        </div>
      </div>
    )
  }


}


export default InputLocation;
