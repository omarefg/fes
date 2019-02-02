import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducer from './Reducers';
import Routes from './Routes';

class App extends Component {
  constructor(props) {
    super(props);
    this.enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
    this.store = createStore(Reducer, {}, this.enhancer);
  }
  render() { 
    return (
      <Provider store={this.store}>
        <Routes />
      </Provider>
    );
  }
}
 
export default App;
