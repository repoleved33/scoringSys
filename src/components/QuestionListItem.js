import React, { useState } from 'react';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import { AiOutlineNumber } from 'react-icons/ai'
import cn from 'classnames';
import '../styles/QuestionListItem.scss';


const QuestionListItem = ({ question }) => {
    
    const {id, content, option_1, option_2} = question;
    const [checked_1, setChecked_1] = useState('');
    const [checked_2, setChecked_2] = useState('');

    const onToggleOption1 =(e)=> {
        console.log(e)
        const NextVal1 = !checked_1;
        if (NextVal1 !== false) {
            setChecked_1(NextVal1);
            setChecked_2(!NextVal1);
        }
    }
    const onToggleOption2 =(e)=> {
        const NextVal2 = !checked_2;
        if (NextVal2 !== false) {
            setChecked_2(NextVal2);
            setChecked_1(!NextVal2);
        }
    }
    
    return (
        <div className="QuestionListItem">
            <div>
                <div className="QuestionHeader">
                    <AiOutlineNumber/>{id}. {content}
                </div>         
                <div className="QuestionContent">
                    <div className={cn('checkbox',{checked_1})} onClick={onToggleOption1}>
                        {checked_1 ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                        <div className="text">{option_1}</div>
                    </div>
                    <div className={cn('checkbox',{checked_2})} onClick={onToggleOption2}>
                        {checked_2 ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                        <div className="text">{option_2}</div>
                    </div>

                </div>
   
            </div>
        </div>
    );
};



export default QuestionListItem;