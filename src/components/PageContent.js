import React from 'react'
import {fontSettings, DisplayContext} from '../context/DisplayContext'


// export function PageContent() {
//   // render() {
//   return (
//     <DisplayContext.Consumer>
//       {({fontSetting, togglefontSetting}) => (
//         <div style={{fontFamily: fontSetting.fontFamily}}>
//           <h1>Learning Context Api </h1>
//           <h2> Part 1: The Basics </h2>
//         </div>
//       )}
//     </DisplayContext.Consumer>
//   )
//   // }
// }

export const PageContent = () => {
  // render() {
  return (
    <DisplayContext.Consumer>
      {({fontSetting, togglefontSetting}) => (
        <div style={{fontFamily: fontSetting.fontFamily}}>
          <h1>Learning Context Api </h1>
          <h2> Part 1: The Basics </h2>
        </div>
      )}
    </DisplayContext.Consumer>
  )
  // }
}


// class PageContent extends React.Component {
//   render() {
//   return (
//     <DisplayContext.Consumer>
//       {({fontSetting, togglefontSetting}) => (
//         <div style={{fontFamily: fontSetting.fontFamily}}>
//           <h1>Learning Context Api </h1>
//           <h2> Part 1: The Basics </h2>
//         </div>
//       )}
//     </DisplayContext.Consumer>
//   )
//   }
// }
//
//
// export default PageContent
