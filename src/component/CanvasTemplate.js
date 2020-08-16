import React from 'react';
import './Canvas.css';
import './Template.css';
import Range from './Range';
import LinePriview from './LinePreview';

    class CanvasTemplate extends React.Component {

        state = {
            range : 3.5
        }

        RangeChangeListner = (event) => {
            this.setState({
                range : event.target.value
            });
        }

        render() {
            return (
                <div>
                    <div className="canvas-wrap">
                        <canvas id="jsCanvas" className="canvas"></canvas>
                        <div className="status__box">
                        <div id="color__status" className="color_preview">PAINT</div> 
                        <LinePriview range={this.state.range} RangeChangeListner={this.RangeChangeListner} />
                    </div>
                </div>

                <div className="controls">
                        <Range range={this.state.range} RangeChangeListner={this.RangeChangeListner} />
                        
                        {this.props.btnList}
                                     
                        {this.props.colorList}
                 </div>
            </div>
        );

        


    }
};


export default CanvasTemplate;