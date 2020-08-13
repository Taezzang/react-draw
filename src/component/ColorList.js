import React from 'react';
import "./ColorList.css";

const ColorList = ({colors}) => {
    const colorList = colors.map((color, index) => (
        <div className="controls__color jsColor" key={index} style={{backgroundColor: color}}></div>
    ));

    return (
        <div className="controls__colors" id="jsColors">
            {colorList}
        </div>
    )
}

export default ColorList;