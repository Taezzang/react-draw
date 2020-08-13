import React from 'react';
import "./ColorList.css";

const ColorList = ({colors}) => {
    const colorList = colors.map((color) => (
        <div class="controls__color jsColor" style={{backgroundColor: color}}></div>
    ));

    return (
        <div className="controls__colors" id="jsColors">
            {colorList}
        </div>
    )
}

export default ColorList;