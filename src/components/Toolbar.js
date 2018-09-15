import React from 'react'
import {fontSettings, DisplayContext} from '../context/DisplayContext'

export function Toolbar () {
  //
  // render()
    const fontSettingKeys = Object.keys(fontSettings)

    return (
      <DisplayContext.Consumer>
      {({fontSetting, togglefontSetting}) => (
        <form>
        <label>Choose font</label>
        <select onChange={togglefontSetting}>
            return <option value="">Select..</option>
          {fontSettingKeys.map((k) => {
            return <option value={k}>{k}</option>
          })}
        </select>
        </form>
      )}
      </DisplayContext.Consumer>
    )

}

// export default Toolbar
