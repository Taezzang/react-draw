import React from 'react';
import './Canvas.css';
import './Template.css';

const CanvasTemplate = ({btnList, colorList}) => {
    return (
        <div>
            <div className="canvas-wrap">
                <canvas id="jsCanvas" className="canvas"></canvas>
                <div className="status__box">
                    <div id="color__status" className="color_preview">PAINT</div> 
                    <canvas id="line__canvas" className="line__status"></canvas>
                </div>
            </div>

            <div className="controls">
                <div className="controls__range">
                    <input type="range" id="jsRange" min="0.5" max="6.5" value="3.5" step="0.1" />
                </div>
                
                    {btnList}
            
                
                    {colorList}
                
            </div>
        </div>
    );
};


export default CanvasTemplate;