import React from 'react'

export const fontSettings = {
  sans: {
    fontFamily: "Helvetica"
  },
  serif: {
    fontFamily: "Times New Roman"
  },
  mono: {
    fontFamily: "Andale Mono"
  }
}

export const DisplayContext = React.createContext({
  fontSetting: fontSettings.serif,
  togglefontSetting: () => {}
})
