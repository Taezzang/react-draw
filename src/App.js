import React from 'react';
import './App.css';
import CanvasTemplate from './component/CanvasTemplate';
import ColorList from './component/ColorList';
import BtnList from './component/BtnList';

const colors = ['#2C2C2C', '#FFFFFF', '#FF3B00', '#FF9500', '#FFCC00', '#4CD963', '#5AC8FA', '#0579FF', '#5856D6'];

class App extends React.Component {

  state = {
    //선 굵기, 그리는 방식 들어가야될듯
    thickness : 3.5,
    color : '#2C2C2C'
  }

  render() {
    return (
      <CanvasTemplate
      btnList={(
        <BtnList />
      )}
      colorList={(
      <ColorList
        colors={colors}
      />
    )}>
        
      </CanvasTemplate>
    )
  }
}

export default App;
