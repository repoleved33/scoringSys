import React from 'react';
import QuestionListItem from './QuestionListItem';
import '../styles/QuestionList.scss';

const QuestionList = ({ questionlist }) => {
    return (
        <div className="QuestionList">
            {questionlist.map( question => (
                <QuestionListItem question={question} key={question.id}/>
            ))}
        </div>
    );
}

export default QuestionList;
