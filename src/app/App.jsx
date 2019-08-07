import React from 'react';
import './App.css';
import * as Act from './action';
import creatStore from './reduxModel';
import { connect } from 'react-redux';
import { createStore } from 'redux';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentDidMount(){
    
  }
  render() {
    return (
      <div className="App" onClick={() => {
        this.props.dispatch(Act.reducersaAct({ data: 'dashuage' }))
      }
      }>
        fawnenboTest
      </div >
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state, 'state')
  return {
    app: state
  }
}
export default connect(mapStateToProps)(App);
