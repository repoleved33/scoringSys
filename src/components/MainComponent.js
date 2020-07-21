import React from 'react';
import '../styles/MainComponent.scss';

const MainComponent = ({ history }) => {
    return (
        <form className="MainComponent">
            <div>
                <button type="submit" onClick={() => {history.push('/question')}}>
                    START
                </button>
            </div>
        </form>
    );
}

export default MainComponent;
