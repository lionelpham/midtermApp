import React from 'react';
import {Provider} from 'react-redux'
import {store} from './helpers'

import './App.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import "../node_modules/bootstrap-css-only/css/bootstrap.min.css";
import "../node_modules/mdbreact/dist/css/mdb.css";
import {loadUser} from './actions/authActions'
import MainApp from './containers/MainApp'

/*eslint-disable*/
class App extends React.Component {
  componentDidMount(){
    // store.dispatch(loadUser())
  }

  render() {
    return (
      <Provider store={store}>
        <MainApp/>
      </Provider>
    );
  }
}

export default App;
