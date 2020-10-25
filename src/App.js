import React, {  } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainComponent from './components/MainComponent';
import QuestionComponent from './components/QuestionComponent';
import ResultComponent from './components/ResultComponent';
import Header from './components/Header';
import './styles/App.scss';

function App() {

  return (
    <div className="App">
      <Router>
        <div>
        <Header/>
          <Switch>
            <Route exact path="/" component={MainComponent}/>
            <Route path="/question" component={QuestionComponent}/>
            <Route path="/result" component={ResultComponent}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
