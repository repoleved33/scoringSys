import React from 'react';
import QuestionList from './QuestionList';
import '../styles/QuestionComponent.scss';
import {Button} from 'react-bootstrap';

const QuestionComponent = ({ questionlist }) => {
    return (
        <div className="QuestionComponent">
            <QuestionList questionlist={questionlist} />
            <div className="ButtonToolbar" align="right">
                <Button variant="outline-info"> 제출</Button>
                
                

            </div>


        </div>
    );
}

export default QuestionComponent;
