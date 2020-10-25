import React, { useState } from 'react';
import QuestionList from './QuestionList';
import '../styles/QuestionComponent.scss';
import {Button} from 'react-bootstrap';
import { MdFormatColorText } from 'react-icons/md';

const QuestionComponent = ({ history }) => {

  const [questions, setQuestions] = useState([
    {
      id: 1,
      content: "문제 1",
      option_1: "선택 1",
      checked_1: false,
      option_2: "선택 2",
      checked_2: false,
      type: "",
    },
    {
      id: 2,
      content: "문제 2",
      option_1: "선택 1",
      checked_1: false,
      option_2: "선택 2",
      checked_2: false,
    },


    {
      id: 18,
      option_1: "선택지 1",
      checked_1: false,
      option_2: "선택지 2",
      checked_2: false,
    },
  ]);

  const checkIfAllChecked =()=> {
    let unchecked = "";
    for(let idx=0;idx<questions.length;idx++) {
      if (questions.type === "" || questions.type === undefined) {
        unchecked = questions[idx].id;
        break;
      }
    }
    return unchecked;
  }

  const getResult =()=> {
    let unchecked = checkIfAllChecked();
    if(unchecked !== ""){

      alert(unchecked + "번 문항을 체크해주세요.");
      return;
    }
    console.log(unchecked);
    history.push('/result');
  }

  return (
    <div className="QuestionComponent">

      <div className="QuestionMenu">
            <Button>제 01부</Button>
            <Button>제 02부</Button> 
            
            <Button>제 03부</Button> 
            <Button>제 04부</Button> 
            <Button>제 05부</Button> 
            <Button>제 06부</Button>             
      </div>
      <QuestionList questions={questions} setQuestions={setQuestions}/>
      <div className="ButtonToolbar" align="right">
        <Button variant="outline-info" type="submit" onClick={getResult}>제출</Button>
      </div>
    </div>
  );
}

export default QuestionComponent;
