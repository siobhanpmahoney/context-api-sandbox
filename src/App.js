import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {fontSettings, DisplayContext} from './context/DisplayContext'
import PageContainer from './components/PageContainer'
import { Toolbar } from './components/Toolbar'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fontSetting: fontSettings["serif"],
      togglefontSetting: this.togglefontSetting
    }

  }

  togglefontSetting = (event) => {

      let s = fontSettings
      let selection = event.target.value
      this.setState({
        fontSetting: s[selection]
      })
    }



  render() {
    return (
      <div className="App">
        <DisplayContext.Provider value={this.state}>
          <PageContainer />
        </DisplayContext.Provider>
      </div>
    );
  }
}

export default App;
