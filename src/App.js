import React,{Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput.js'
import UserOutput from './UserOutput/UserOutput.js'


class App extends Component{
  state={
    Users: [
      {name: 'Sachin'}
    ]
  };

  switchUserHandler = (username) => {
    console.log('was clicked');
    this.setState({
      Users: [
        {name: username}
      ]
    });
  }

  userChangeHandler = (event) => {
    console.log('occured');
    this.setState({
      Users: [
        {name: event.target.value}
      ]
    });
  }
   render()
   {
    const style={
      backgroundColor: 'green',
      font: 'inherit',
      border: '1x solid blue',
      padding: '18px',
      cursor: 'pointer',
      color: 'white'
    };
      return(
        <div className="App">
          <UserInput changed={this.userChangeHandler} value={this.state.Users[0].name} />
          <button onClick={this.switchUserHandler.bind(this,'swati')} style={style} >Change</button>
          <UserOutput username={this.state.Users[0].name} />
        </div>
      );
   };
}

export default App;