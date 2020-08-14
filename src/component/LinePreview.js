import React, { createRef, useEffect } from 'react';



// 선 굵기를 실시간으로 표현하기 위한 캔버스
class LinePreview extends React.Component {

    let line__canvas;
    let line__canvasRef = createRef();
    
    
    let pos = {
        drawble: false,
        X: -1,
        Y: -1
    };
    
    let ctx;
    
    useEffect(() => {
        line__canvas = line__canvasRef.current;
        ctx = line__canvas.getContext("2d");
        line__canvas.addEventListener("mousedown", initDraw);
        line__canvas.addEventListener("mousemove", draw);
        line__canvas.addEventListener("mouseup", finishDraw);
        line__canvas.addEventListener("mouseout", finishDraw);
    }, []);
    
    function initDraw(event) {
        ctx.beginPath();
        pos = {drawable: true, ...getPosition(event)}
    }

    function draw(event) {

    }

    function finishDraw(event) {

    }

    function getPosition(event) {
        return {X: event.offsetX,
                Y: event.offsetY};
    }

    render() {
        
        return (
            <canvas ref={canvasRef} id="line__canvas" className="line__status"></canvas>      
        )
    };
}

export default LinePreview;