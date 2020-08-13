import React from 'react';



class Range extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            range : 3.5
        }
    }
        

    render() {
        return (
            <div className="controls__range">
                <input type="range" id="jsRange" min="0.5" max="6.5" value={this.props.range} step="0.1" onChange={this.props.RangeChangeListner} />
            </div>
        );
    };
}


export default Range;