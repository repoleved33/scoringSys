import React, { useState } from 'react';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import { AiOutlineNumber } from 'react-icons/ai'
import cn from 'classnames';
import '../styles/QuestionListItem.scss';


const QuestionListItem = ({ question }) => {
    
    const {id, content, option_1, option_2} = question;
    const [checked_1, setChecked_1] = useState(question.checked_1);
    const [checked_2, setChecked_2] = useState(question.checked_2);

    const onToggle =(e)=> {
        setChecked_1({checked_1: !checked_1});
    }
    
    return (
        <div className="QuestionListItem">
            <div>
                <div className="QuestionHeader">
                    <AiOutlineNumber/>{id}. {content}
                </div>         
                <div className="QuestionContent">
                    <div className={cn('checkbox',{checked_1})} onClick={onToggle}>
                        {checked_1 ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                        <div className="text">{option_1}</div>
                    </div>
                    <div className={cn('checkbox',{checked_2})} onClick={onToggle}>
                        {checked_2 ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                        <div className="text">{option_2}</div>
                    </div>

                </div>
   
            </div>
        </div>
    );
};



export default QuestionListItem;