import React from 'react';
import styles from './App.less';
import * as Act from './modle/action';
// import creatStore from './reduxModel';
import { connect } from 'react-redux';
import { createStore } from 'redux';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentDidMount() {
    console.log(styles, 'stylesstyles')
  }
  render() {
    return (
      <div className={styles.App} onClick={() => {
        this.props.dispatch(Act.reducersaAct({ data: 'dashuage' }))
      }
      }>
        <div className={styles.AppLogo}>fawnenboTest</div>
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
