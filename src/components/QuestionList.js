import React from 'react';
import QuestionListItem from './QuestionListItem';
import '../styles/QuestionList.scss';

const QuestionList = ({ questions }) => {
    return (
        <div className="QuestionList">
            {questions.map( question => (
                <QuestionListItem question={question} key={question.id} />
            ))}
        </div>
    );
}

export default QuestionList;
