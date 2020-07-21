import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainComponent from './components/MainComponent';
import QuestionComponent from './components/QuestionComponent';
import ResultComponent from './components/ResultComponent';
import Header from './components/Header';
import './styles/App.scss';

function App() {

  const [questions, setQuestions] = useState([
    {
      id: 1,
      content: "문제문제 1번 문제",
      option_1: "첫번째 선택지",
      checked_1: true,
      option_2: "두번째 선택지",
      checked_2: false,
    },
    {
      id: 2,
      content: "문제문제 2번 문제",
      option_1: "첫번째 선택지",
      checked_1: false,
      option_2: "두번째 선택지",
      checked_2: true,
    },
  ]);

  return (
    <div className="App">
      <Router>
      <div>
      <Header/>
          <Switch>
            <Route exact path="/" component={MainComponent}/>
            <Route path="/question" render={()=> <QuestionComponent questionlist={questions} setQuestions={setQuestions} />}/>
            <Route path="/result" component={ResultComponent}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
