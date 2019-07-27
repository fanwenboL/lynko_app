import React from 'react';
import './index.css';

class Index extends React.Component {
    render() {
        return (
            <div >
                <div className="add"></div>
                {this.props.children}
            </div>
        );
    }
}

export default Index;
