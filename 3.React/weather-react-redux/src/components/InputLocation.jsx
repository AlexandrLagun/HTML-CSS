import React from 'react';

const InputLocation = props => {
 

  const handleChange = (e) => {
    props.changeCity(e.target.value);   
  }

    return (
      <div>
        
        <div className="ui category search">
        <form className="ui form">
          <h3 className="ChangeText">Change your location:</h3>
          <br />
          <div className="ui icon input">
            <input
              className="prompt"
              type="text"
              placeholder="Search city..."
              value={props.city}
              onChange={handleChange}
            />
            <div id="error">
            </div>
          </div>
        </form>
        </div>
      </div>
    )

}
//<div>{this.props.days}</div>

export default InputLocation;