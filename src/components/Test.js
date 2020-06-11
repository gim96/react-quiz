import React, {Component} from 'react';

class Test extends React.Component {

  state = {
    user: '',
   
  };

  
  componentDidMount() {
   
    const user =  localStorage.getItem('user');
    this.setState({ user });
  }

  handleFormSubmit = () => {
   
  
    localStorage.setItem('user');
  };


 
  handleChange = (event) => {
    const input = event.target;
    const value = input.type === 'checkbox' ? input.checked : input.value;
 
    this.setState({ [input.name]: value });
  };
 
  handleFormSubmit = () => {};

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>
          User: <input name="user" value={this.state.user} onChange={this.handleChange}/>
        </label>
        <label>
          <input name="rememberMe" checked={this.state.rememberMe} onChange={this.handleChange} type="checkbox"/> Remember me
        </label>
        <button type="submit">Sign In</button>
      </form>
    );
  }
  
}

   export default Test;