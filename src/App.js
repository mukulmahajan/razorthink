import React,{ Fragment} from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Full_Img from './components/Full_Img';

function App() {
  return (
    <Router>
  <Fragment>
  
    
    <Switch>
    <Route exact path='/' component={Navbar} />
    <Route exact path='/Full_img' component={Full_Img} />

    </Switch>
  </Fragment>
  </Router>
  );
}

export default App;
