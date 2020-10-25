import React from 'react';
import '../styles/ResultComponent.scss'

const ResultComponent = () => {
    return (
        <div className="ResultComponent">
            <div className="OriginalScore">
                원점수
                E: {} I: {}

            </div>
            <div className="PreferRange">
                선호 분명도 점수
            </div>
            <div className="FinalResult">
                나의 성격유형 결과
            </div>
        </div>
    );
}

export default ResultComponent;
